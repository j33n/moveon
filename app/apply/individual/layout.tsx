"use client";

import { Heading } from "@radix-ui/themes";
import React, { ReactNode } from "react";

import * as styles from "./styles.css";

export default function IndividualApplicationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Heading size="3" my="4">
        Individual Application
      </Heading>
      {children}
    </div>
  );
}
