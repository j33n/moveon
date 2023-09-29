"use client";

import React from "react";
import cx from "classnames";
import * as Form from "@radix-ui/react-form";

import * as styles from "./styles.css";
import * as formStyles from "../../components/form/formStyles.css";
import { Button, Card } from "@radix-ui/themes";

export default function IndividualApplication() {
  return (
    <Card className={styles.container}>
      <Form.Root className={formStyles.formRoot}>
        <div className={styles.formContainer}>
          <Form.Field
            className={cx(formStyles.formField, styles.formField)}
            name="firstName"
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className={formStyles.formLabel}>
                First Name:
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input className={formStyles.input} type="firstName" required />
            </Form.Control>
            <div>
              <Form.Message
                className={formStyles.formMessage}
                match="valueMissing"
              >
                Please enter your first name
              </Form.Message>
              <Form.Message
                className={formStyles.formMessage}
                match="typeMismatch"
              >
                Please provide a first name
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field
            className={cx(formStyles.formField, styles.formField)}
            name="lastName"
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className={formStyles.formLabel}>
                Last Name:
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input className={formStyles.input} type="firstName" required />
            </Form.Control>
            <div>
              <Form.Message
                className={formStyles.formMessage}
                match="valueMissing"
              >
                Please enter your first name
              </Form.Message>
              <Form.Message
                className={formStyles.formMessage}
                match="typeMismatch"
              >
                Please provide a first name
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field
            className={cx(formStyles.formField, styles.formField)}
            name="phone"
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className={formStyles.formLabel}>Phone:</Form.Label>
            </div>
            <Form.Control asChild>
              <input className={formStyles.input} type="firstName" required />
            </Form.Control>
            <div>
              <Form.Message
                className={formStyles.formMessage}
                match="valueMissing"
              >
                Please enter your phone number
              </Form.Message>
              <Form.Message
                className={formStyles.formMessage}
                match="typeMismatch"
              >
                Please provide a valid Phone number
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field
            className={cx(formStyles.formField, styles.formField)}
            name="address"
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className={formStyles.formLabel}>Address:</Form.Label>
            </div>
            <Form.Control asChild>
              <input className={formStyles.input} type="address" required />
            </Form.Control>
            <div>
              <Form.Message
                className={formStyles.formMessage}
                match="valueMissing"
              >
                Please enter your address
              </Form.Message>
              <Form.Message
                className={formStyles.formMessage}
                match="typeMismatch"
              >
                Please provide a valid address
              </Form.Message>
            </div>
          </Form.Field>
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
          <Form.Submit asChild>
            <Button
              size="4"
              className={formStyles.button}
              style={{ marginTop: 10, border: "1px solid gray" }}
              color="yellow"
            >
              Register
            </Button>
          </Form.Submit>
        </div>
      </Form.Root>
    </Card>
  );
}
