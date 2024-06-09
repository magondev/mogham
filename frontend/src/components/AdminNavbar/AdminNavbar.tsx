"use client";

import { Group, Code, ScrollArea, rem, AppShell, Burger, Skeleton } from '@mantine/core';
import
{
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconUser,
  IconQuestionMark,
} from '@tabler/icons-react';
import { LinksGroup } from '../LinksGroup/LinksGroup';
import packageInfo from '../../../package.json';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';


const mockdata = [
  { label: 'Dashboard', icon: IconPresentationAnalytics, link: '/admin' },
  {
    label: 'Люди',
    icon: IconUser,
    links: [
      { label: 'Новый', link: '/admin/people/new' },
      { label: 'Все люди', link: '/admin/people' },
    ],
  },
  { label: 'Запросы', icon: IconQuestionMark, link: '/admin/inquiries' },
];

export function AdminNavbar({ children }: { children: ReactNode })
{
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened, desktop: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} size="sm" />
            <div>Могlам - Админ</div>
            <Code fw={700}>v{packageInfo.version}</Code>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar py="sm">
          {links}
        </AppShell.Navbar>
        <AppShell.Main bg={"#F8F8F8"}>{children}</AppShell.Main>
      </AppShell>
    </>
  );
}