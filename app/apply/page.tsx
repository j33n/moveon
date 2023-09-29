"use client";

import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";

import * as styles from "./apply.css";

const ApplyPage = () => (
  <div className={styles.applyContainer}>
    <Card size="1" className={styles.cardContent}>
      <Link href="/apply/individual" className={styles.cardLink}>
        <Flex gap="3" align="center">
          <Avatar size="3" radius="full" fallback="IB" color="orange" />
          <Box>
            <Text as="div" size="4" weight="bold" color="blue">
              Individual Businesses
            </Text>
            <Text as="div" size="2" color="gray">
              This application allows individual businesses to get a TILL Number
              to use accepting Mobile Money payments.
            </Text>
          </Box>
        </Flex>
      </Link>
    </Card>
    <Card size="1" className={styles.cardContent}>
      <Link href="/apply/business" className={styles.cardLink}>
        <Flex gap="3" align="center">
          <Avatar size="3" radius="full" fallback="SB" color="orange" />
          <Box>
            <Text as="div" size="4" weight="bold" color="blue">
              Small Businesses
            </Text>
            <Text as="div" size="2" color="gray">
              This application allows small businesses to get a TILL Number to
              use accepting Mobile Money payments.
            </Text>
          </Box>
        </Flex>
      </Link>
    </Card>
    <Card size="1" className={styles.cardContent}>
      <Link href="/apply/institution" className={styles.cardLink}>
        <Flex gap="3" align="center">
          <Avatar size="3" radius="full" fallback="LI" color="orange" />
          <Box>
            <Text as="div" size="4" weight="bold" color="blue">
              Large Institutions
            </Text>
            <Text as="div" size="2" color="gray">
              This application allows large institutions to get a code to be
              used accepting transactions, it allows institutions to accept
              large sums of money.
            </Text>
          </Box>
        </Flex>
      </Link>
    </Card>
  </div>
);

export default ApplyPage;
