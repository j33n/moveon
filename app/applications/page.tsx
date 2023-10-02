"use client";

import React, { useEffect, useState } from "react";

import { BusinessType, getApplications } from "../utils/methods";
import { Card, Code, Flex, Heading, Text } from "@radix-ui/themes";

const ApplicationsPage = () => {
  const [userApplications, setUserApplications] = useState<any>([]);

  useEffect(() => {
    const applications = async () => {
      const data = await getApplications();

      setUserApplications(data.data);
    };

    applications().catch((e) => console.error(e));
  }, []);

  return (
    <Card style={{ padding: "1rem", marginTop: "1rem", display: "flex" }}>
      {userApplications &&
        userApplications.length > 0 &&
        userApplications.map((application: BusinessType) => {
          return (
            <Card key={application.id} style={{ marginTop: "1rem" }}>
              <Heading size="2">{application.businessName}</Heading>
              <Text color="gray">{application.description}</Text>
              {application.momoCode ? (
                <Flex mt="4">
                  <Text mx="4">Code:</Text>
                  <Code color="yellow" weight="bold">
                    {application.momoCode}
                  </Code>
                </Flex>
              ) : (
                <Flex mt="4">
                  <Text color="gray" weight="bold">
                    Momo code not approved yet!
                  </Text>
                </Flex>
              )}
            </Card>
          );
        })}
    </Card>
  );
};

// In the real world a user would not be able to see this view as it would be hidden behind an auth

export default ApplicationsPage;
