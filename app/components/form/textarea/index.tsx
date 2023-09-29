"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";

import * as styles from "../formStyles.css";

export default function TextArea() {
  return (
    <Form.Field className={styles.formField} name="question">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className={styles.formLabel}>Question</Form.Label>
        <Form.Message className={styles.formMessage} match="valueMissing">
          Please enter a question
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className={styles.textarea} required />
      </Form.Control>
    </Form.Field>
  );
}
