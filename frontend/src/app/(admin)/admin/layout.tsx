import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';

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
          ADMIN PANEL HEADER
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
