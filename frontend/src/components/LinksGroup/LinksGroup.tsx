"use client";

import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, rem, Badge, Indicator, Anchor } from '@mantine/core';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';
import classes from './LinksGroup.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface LinksGroupProps
{
  icon: React.FC<any>;
  label: string;
  isInitiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  isIndicatorVisible?: boolean;
  link?: string;
}

export function LinksGroup({ icon: Icon, label, isInitiallyOpened, links, isIndicatorVisible, link }: LinksGroupProps)
{
  const hasLinks = Array.isArray(links);
  const router = useRouter();
  const [opened, setOpened] = useState(isInitiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Link href={link.link} key={link.label} style={{ textDecoration: "none" }}>
      <Text className={classes.link}>
        {link.label}
      </Text>
    </Link>
  ));

  const handleLinkClick = () =>
  {
    if (link)
    {
      router.push(link, undefined);
    } else
    {
      setOpened((o) => !o);
    }
  };

  return (
    <>
      <UnstyledButton onClick={handleLinkClick} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>

            {isIndicatorVisible ? (
              <Indicator inline size={16} offset={3} position="bottom-end" color="red" withBorder>
                <ThemeIcon variant="light" size={30}>
                  <Icon style={{ width: rem(18), height: rem(18) }} />
                </ThemeIcon>
              </Indicator>
            ) : (
              <ThemeIcon variant="light" size={30}>
                <Icon style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>
            )}

            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}