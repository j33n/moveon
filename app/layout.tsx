import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import cx from "classnames";

import * as styles from "./styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoveOn",
  description: "Momo Vendor Onboarding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(cx(inter.className), styles.body)}>{children}</body>
    </html>
  );
}
