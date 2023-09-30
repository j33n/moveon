"use client";

import React, { ReactNode } from "react";

import { Heading } from "@radix-ui/themes";

const ApplicationsPageLayout = ({ children }: { children: ReactNode }) => (
  <div>
    <Heading>View Applications</Heading>
    <div>{children}</div>
  </div>
);

export default ApplicationsPageLayout;
