"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";

import * as styles from "./styles.css";
import { Card } from "@radix-ui/themes";

export default function IndividualApplication() {
  return (
    <Card className={styles.container}>
      <Form.Root className={styles.formRoot}>
        <Form.Field className={styles.formField} name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className={styles.formLabel}>Email</Form.Label>
            <Form.Message className={styles.formMessage} match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className={styles.formMessage} match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className={styles.input} type="email" required />
          </Form.Control>
        </Form.Field>
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
        <Form.Submit asChild>
          <button className={styles.button} style={{ marginTop: 10 }}>
            Post question
          </button>
        </Form.Submit>
      </Form.Root>
    </Card>
  );
}
