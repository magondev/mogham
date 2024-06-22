"use client";

import { ActionIcon, Box, Card, Group, Text, Badge, Button } from "@mantine/core";

import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import { DataTable } from 'mantine-datatable';
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

const data = [
  { id: 1001, firstName: "Зелимхан", lastName: "Акаев", birthDate: "20.08.1990", position: "ФСБ", status: 1 },
  { id: 1002, firstName: "Али", lastName: "Батукаев", birthDate: "15.04.1988", position: "ФСБ", status: 1 },
  { id: 1003, firstName: "Мовсар", lastName: "Визиров", birthDate: "03.12.1995", position: "ФСБ", status: 1 },
  { id: 1004, firstName: "Руслан", lastName: "Гелогаев", birthDate: "28.09.1992", position: "ФСБ", status: 2 },
  { id: 1005, firstName: "Ибрагим", lastName: "Даудов", birthDate: "10.07.1993", position: "ФСБ", status: 2 },
  { id: 1006, firstName: "Хасан", lastName: "Евлоев", birthDate: "05.02.1991", position: "ФСБ", status: 0 },
  { id: 1007, firstName: "Магомед", lastName: "Жамалдаев", birthDate: "19.11.1994", position: "ФСБ", status: 0 },
  { id: 1008, firstName: "Керим", lastName: "Заманаев", birthDate: "23.06.1990", position: "ФСБ", status: 0 },
  { id: 1009, firstName: "Саид-Магомед", lastName: "Ибрагимов", birthDate: "14.03.1989", position: "ФСБ", status: 2 },
  { id: 1010, firstName: "Али", lastName: "Курбанов", birthDate: "30.01.1996", position: "ФСБ", status: 1 },
  { id: 1011, firstName: "Мухаммед", lastName: "Ламсиев", birthDate: "25.08.1992", position: "ФСБ", status: 0 },
  { id: 1012, firstName: "Султан", lastName: "Магомаев", birthDate: "12.05.1993", position: "ФСБ", status: 2 },
  { id: 1013, firstName: "Иса", lastName: "Нургалиев", birthDate: "07.09.1987", position: "ФСБ", status: 1 },
  { id: 1014, firstName: "Ахмед", lastName: "Омаров", birthDate: "02.04.1994", position: "ФСБ", status: 0 },
  { id: 1015, firstName: "Магомед", lastName: "Пашаев", birthDate: "18.10.1991", position: "ФСБ", status: 2 },
  { id: 1016, firstName: "Мурад", lastName: "Рамазанов", birthDate: "21.12.1990", position: "ФСБ", status: 1 },
  { id: 1017, firstName: "Исмаил", lastName: "Садулаев", birthDate: "26.06.1988", position: "ФСБ", status: 0 },
  { id: 1018, firstName: "Мовсар", lastName: "Темирханов", birthDate: "01.03.1997", position: "ФСБ", status: 2 },
  { id: 1019, firstName: "Али", lastName: "Умаров", birthDate: "09.07.1995", position: "ФСБ", status: 1 },
  { id: 1020, firstName: "Руслан", lastName: "Хаджиев", birthDate: "04.11.1992", position: "ФСБ", status: 0 },
  { id: 1021, firstName: "Хамзат", lastName: "Цадаев", birthDate: "16.09.1993", position: "ФСБ", status: 2 },
  { id: 1022, firstName: "Заур", lastName: "Шамсудинов", birthDate: "11.07.1991", position: "ФСБ", status: 1 },
  { id: 1023, firstName: "Абдурахман", lastName: "Юсупов", birthDate: "27.02.1989", position: "ФСБ", status: 0 },
  { id: 1024, firstName: "Иса", lastName: "Акхадов", birthDate: "22.05.1994", position: "ФСБ", status: 2 },
  { id: 1025, firstName: "Магомед", lastName: "Батукаев", birthDate: "08.08.1990", position: "ФСБ", status: 1 },
  { id: 1026, firstName: "Али", lastName: "Визиров", birthDate: "03.04.1996", position: "ФСБ", status: 0 },
  { id: 1027, firstName: "Мурад", lastName: "Гелогаев", birthDate: "29.01.1993", position: "ФСБ", status: 2 },
  { id: 1028, firstName: "Руслан", lastName: "Даудов", birthDate: "14.06.1991", position: "ФСБ", status: 1 },
  { id: 1029, firstName: "Исмаил", lastName: "Евлоев", birthDate: "19.10.1994", position: "ФСБ", status: 0 },
  { id: 1030, firstName: "Хасан", lastName: "Жамалдаев", birthDate: "24.12.1990", position: "ФСБ", status: 2 },
  { id: 1031, firstName: "Абдула", lastName: "Заманаев", birthDate: "17.07.1988", position: "ФСБ", status: 1 },
  { id: 1032, firstName: "Иса", lastName: "Ибрагимов", birthDate: "02.03.1995", position: "ФСБ", status: 0 },
  { id: 1033, firstName: "Магомед", lastName: "Курбанов", birthDate: "27.09.1992", position: "ФСБ", status: 2 },
  { id: 1034, firstName: "Али", lastName: "Ламсиев", birthDate: "12.05.1991", position: "ФСБ", status: 1 },
  { id: 1035, firstName: "Мухаммед", lastName: "Магомаев", birthDate: "07.11.1993", position: "ФСБ", status: 0 },
  { id: 1036, firstName: "Султан", lastName: "Нургалиев", birthDate: "22.08.1989", position: "ФСБ", status: 2 },
  { id: 1037, firstName: "Ибрагим", lastName: "Омаров", birthDate: "16.02.1994", position: "ФСБ", status: 1 },
  { id: 1038, firstName: "Хасан", lastName: "Пашаев", birthDate: "01.10.1991", position: "ФСБ", status: 0 },
  { id: 1039, firstName: "Магомед", lastName: "Рамазанов", birthDate: "09.12.1990", position: "ФСБ", status: 2 },
  { id: 1040, firstName: "Исмаил", lastName: "Садулаев", birthDate: "04.06.1988", position: "ФСБ", status: 1 },
  { id: 1041, firstName: "Мовсар", lastName: "Темирханов", birthDate: "20.03.1997", position: "ФСБ", status: 0 },
  { id: 1042, firstName: "Руслан", lastName: "Умаров", birthDate: "15.07.1995", position: "ФСБ", status: 2 },
  { id: 1043, firstName: "Хамзат", lastName: "Хаджиев", birthDate: "30.11.1992", position: "ФСБ", status: 1 },
  { id: 1044, firstName: "Заур", lastName: "Цадаев", birthDate: "25.09.1993", position: "ФСБ", status: 0 },
  { id: 1045, firstName: "Абдурахман", lastName: "Шамсудинов", birthDate: "10.07.1991", position: "ФСБ", status: 2 },
  { id: 1046, firstName: "Иса", lastName: "Юсупов", birthDate: "05.02.1989", position: "ФСБ", status: 1 },
  { id: 1047, firstName: "Магомед", lastName: "Акхадов", birthDate: "19.05.1994", position: "ФСБ", status: 0 },
  { id: 1048, firstName: "Али", lastName: "Батукаев", birthDate: "04.08.1990", position: "ФСБ", status: 2 },
  { id: 1049, firstName: "Мурад", lastName: "Визиров", birthDate: "29.04.1996", position: "ФСБ", status: 1 },
  { id: 1050, firstName: "Руслан", lastName: "Гелогаев", birthDate: "14.01.1993", position: "ФСБ", status: 0 },
];

const PAGE_SIZES = [10, 15, 20];


export default function PeopleDataTable()
{
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(data.slice((page - 1) * pageSize, page * pageSize));

  return (
    <>
      <Group justify="space-between" mb="xs">
        <Text size="xl" fw="bold">Профили</Text>
        <Button size="xs">Новый профиль</Button>
      </Group>
      <Card withBorder>
        <DataTable
          withTableBorder
          borderRadius="sm"
          withColumnBorders
          striped
          highlightOnHover
          records={records}
          columns={[
            {
              accessor: 'id',
              title: '#',
              textAlign: 'right',
              sortable: true,
            },
            { accessor: 'firstName', sortable: true, },
            {
              accessor: 'lastName',
              sortable: true,
            },
            {
              accessor: 'birthDate',
              title: 'Дата рождения',
              sortable: true,
            },
            {
              accessor: 'position',
              title: 'Должность',
              sortable: true,
            },
            {
              accessor: 'status',
              title: 'Статус',
              render: ({ status }) => (
                <Badge
                  color={status === 0 ? 'gray.5' : status == 1 ? 'green.5' : 'red.5'}
                  variant="filled"
                >
                  {status === 0 ? 'новый' : status == 1 ? 'публичный' : 'Отклонено'}
                </Badge>
              ),
              sortable: true,
            },
            {
              accessor: 'actions',
              title: "",
              textAlign: 'right',
              render: (company) => (
                <Group gap={4} justify="right" wrap="nowrap">
                  <ActionIcon
                    size="md"
                    variant="light"
                    color="green"
                    onClick={() => { }}
                  >
                    <IconEye size={16} />
                  </ActionIcon>
                  <ActionIcon
                    size="md"
                    variant="light"
                    color="blue"
                    onClick={() => { }}
                  >
                    <IconEdit size={16} />
                  </ActionIcon>
                  <ActionIcon
                    size="md"
                    variant="light"
                    color="red"
                    onClick={() => { }}
                  >
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              ),
            },
          ]}
          totalRecords={50}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p) => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
        />
      </Card>
    </>
  );
}
