"use client";

import { Heading, Text } from "@radix-ui/themes";
import React, { ReactNode } from "react";

import * as styles from "./styles.css";

export default function IndividualApplicationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div style={{ padding: "1rem" }}>
        <Heading size="3" my="4">
          Individual Application
        </Heading>
        <Text color="gold">
          An individual application is for solo
          entrepreneurs. It provides a unique till number, enabling direct
          transactions for their sales.
        </Text>
      </div>
      {children}
    </div>
  );
}
