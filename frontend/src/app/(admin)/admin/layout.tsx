import type { Metadata } from "next";
import { AppShell, AppShellNavbar, createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import { AdminNavbar } from "@/components/AdminNavbar/AdminNavbar";

export const metadata: Metadata = {
  title: "Mogham - Admin Panel",
  description: "Mogham - Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <AdminNavbar>
            {children}
          </AdminNavbar>
        </MantineProvider>
      </body>
    </html>
  );
}
