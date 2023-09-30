"use client";

import React, { useEffect, useState } from "react";

import { ApplicationList, getApplications } from "../utils/methods";
import { Card } from "@radix-ui/themes";

const ApplicationsPage = () => {
  const [userApplications, setUserApplications] = useState<ApplicationList>([]);

  useEffect(() => {
    const applications = async () => {
      const data = await getApplications();

      setUserApplications(data.data);
    };

    applications().catch((e) => console.error(e));
  }, []);

  return (
    <Card style={{ padding: "1rem", marginTop: "1rem" }}>
      {userApplications &&
        userApplications.length > 0 &&
        userApplications.map((application) => {
          return (
            <div key={application.applicationId}>
              {application.businessName}
            </div>
          );
        })}
    </Card>
  );
};

// In the real world a user would not be able to see this view as it would be hidden behind an auth

export default ApplicationsPage;
