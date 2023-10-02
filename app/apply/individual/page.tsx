"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Box, Card, Flex, Tabs, Text } from "@radix-ui/themes";

import PersonalForm from "./PersonalForm";
import BusinessForm from "./BusinessForm";

import * as styles from "./styles.css";

export default function IndividualApplication() {
  const [userDetailsAdded, setUserDetailsAdded] = useState<boolean>(false);
  const [businessDetailsAdded, setBusinessDetailsAdded] =
    useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<
    "personal" | "business" | string
  >();

  const router = useRouter();

  const [registeredBusiness, setRegisteredBusiness] = useState({});

  const handleSetUserDetailsAdded = (formState: boolean) => {
    setUserDetailsAdded(formState);
    setCurrentTab("business");
  };
  
  useEffect(() => {
    if (registeredBusiness && registeredBusiness.id) {
      router.push(`/business/${registeredBusiness.id}`);
    }
  }, [registeredBusiness, router])

  return (
    <Card className={styles.container}>
      <Flex direction="column" gap="4">
        <Tabs.Root
          defaultValue="personal"
          value={currentTab}
          onValueChange={(val) => setCurrentTab(val)}
        >
          <Tabs.List size="2">
            <Tabs.Trigger value="personal" className={styles.tabsTrigger}>
              <Text className={styles.tabsHeadingText}>Personal Details</Text>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="business"
              className={styles.tabsTrigger}
              // disabled={!userDetailsAdded}
            >
              <Text className={styles.tabsHeadingText}>Business Details</Text>
            </Tabs.Trigger>
          </Tabs.List>
          <Box px="4" pt="3" pb="2">
            <Tabs.Content value="personal">
              <PersonalForm
                handleSetUserDetailsAdded={(formState) =>
                  handleSetUserDetailsAdded(formState)
                }
              />
            </Tabs.Content>
            <Tabs.Content value="business">
              <BusinessForm
                handleBusinessDetailsAdded={(businessDetailsState) =>
                  handleBusinessDetailsAdded(businessDetailsState)
                }
                handleSetRegisteredBusiness={(data) =>
                  setRegisteredBusiness(data)
                }
              />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Flex>
    </Card>
  );
}
