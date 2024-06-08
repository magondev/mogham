import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createTheme, MantineProvider } from '@mantine/core'
import { HeaderMenu } from "@/components/HeaderMenu/HeaderMenu";
import '@mantine/core/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mogham",
  description: "Mogham - Description",
};

export default function ClientFrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <HeaderMenu />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
