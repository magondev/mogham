"use client";

import { Button, Card, Container, Image, FileButton, Grid, GridCol, Group, InputWrapper, Paper, Space, Stack, Text, TextInput } from "@mantine/core";
import { IconPhoto, IconPhotoPlus, IconUpload, IconUserCircle, IconX } from "@tabler/icons-react";
import { ReactNode, useState } from "react";
import '@mantine/dates/styles.css'
import '@mantine/tiptap/styles.css';
import 'dayjs/locale/ru';

import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';


import { DateInput } from '@mantine/dates';

export default function PeopleCRUD()
{
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [value, setValue] = useState<Date | null>(null);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
  });

  return (
    <>
      <Text size="xl" fw="bold">Профили NEW</Text>
      <Card withBorder>
        <Grid>
          <GridCol span={7}>
            <Grid>
              <GridCol span={6}>
                <TextInput
                  label="Имя и отчество"
                  name="first-name"
                  required
                />
              </GridCol>
              <GridCol span={6}>
                <TextInput
                  label="Фамилия"
                  name="last-name"
                  required
                />
              </GridCol>
              <GridCol span={6}>
                <DateInput
                  value={value}
                  onChange={setValue}
                  label="Дата рождения"
                  name="birth-date"
                  locale="ru"
                />
              </GridCol>
            </Grid>

            <Space h="xl" />
            <Space h="xs" />

            <Grid>
              <GridCol span={6}>
                <TextInput
                  label="Место работы"
                  name="workplace"
                />
              </GridCol>
              <GridCol span={6}>
                <TextInput
                  label="Должность"
                  name="position"
                />
              </GridCol>
              <GridCol span={6}>
                <TextInput
                  label="Номер авто"
                  name="car-number"
                />
              </GridCol>
            </Grid>
          </GridCol>
          <GridCol span={4} offset={1}>
            <InputWrapper label="Фото" maw={320}>
              {!profilePicture && (
                <Paper bg="lightgray" radius="md" w="100%" maw={320}>
                  <Stack justify="center" align="center" mih={300}>
                    <IconUserCircle size="100%" color="white" stroke={1} />
                  </Stack>
                </Paper>
              )}


              {profilePicture && (
                <Image src={URL.createObjectURL(profilePicture)} radius="md" />)}




              <FileButton onChange={setProfilePicture} accept="image/png,image/jpeg">
                {(props) => <Button {...props} justify="start" leftSection={<IconPhotoPlus size={16} />} variant="default" mt={16}>
                  {profilePicture ? "Изменить фото" : "Добавить фото"}
                </Button>}
              </FileButton>
            </InputWrapper>
          </GridCol>

        </Grid>

        <Space h="xl" />
        <Space h="xs" />

        <InputWrapper label="Дополнительно">
          <RichTextEditor editor={editor} mih={300}>
            <RichTextEditor.Toolbar sticky stickyOffset={60}>
              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Bold />
                <RichTextEditor.Italic />
                <RichTextEditor.Underline />
                <RichTextEditor.Strikethrough />
                <RichTextEditor.ClearFormatting />
                <RichTextEditor.Highlight />
                <RichTextEditor.Code />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.H1 />
                <RichTextEditor.H2 />
                <RichTextEditor.H3 />
                <RichTextEditor.H4 />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Blockquote />
                <RichTextEditor.Hr />
                <RichTextEditor.BulletList />
                <RichTextEditor.OrderedList />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Link />
                <RichTextEditor.Unlink />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.AlignLeft />
                <RichTextEditor.AlignCenter />
                <RichTextEditor.AlignJustify />
                <RichTextEditor.AlignRight />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Undo />
                <RichTextEditor.Redo />
              </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>

            <RichTextEditor.Content />
          </RichTextEditor>
        </InputWrapper>

        <Space h="xl" />
        <Space h="xs" />

        <InputWrapper label="Медиа">
          <Paper withBorder p="md">
            <Dropzone
              onDrop={(files) => console.log('accepted files', files)}
              onReject={(files) => console.log('rejected files', files)}
              maxSize={5 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}

            >
              <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                <Dropzone.Accept>
                  <IconUpload
                    style={{ width: 52, height: 52, color: 'var(--mantine-color-blue-6)' }}
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    style={{ width: 52, height: 52, color: 'var(--mantine-color-red-6)' }}
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconPhoto
                    style={{ width: 52, height: 52, color: 'var(--mantine-color-dimmed)' }}
                    stroke={1.5}
                  />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Перетащите изображения сюда или нажмите, чтобы выбрать файлы
                  </Text>
                  <Text size="sm" c="dimmed" inline mt={7}>
                    Прикрепите столько файлов, сколько хотите
                  </Text>
                </div>
              </Group>
            </Dropzone>
          </Paper>
        </InputWrapper>
      </Card>
    </>
  );
}
