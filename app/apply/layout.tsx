"use client";

import React, { ReactNode } from "react";

import * as styles from "./apply.css";

const ApplyPage = ({ children }: { children: ReactNode }) => (
  <div className={styles.applyContainer}>{children}</div>
);

export default ApplyPage;
