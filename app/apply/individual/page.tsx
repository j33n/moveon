"use client";

import React, { useState } from "react";
import cx from "classnames";
import * as Form from "@radix-ui/react-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import * as styles from "./styles.css";
import * as formStyles from "../../components/form/formStyles.css";
import { Button, Card } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";

export const ErrorMessage = ({ message }: { message: any }) => {
  if (!message) {
    return null;
  }

  return (
    <Form.Message className={formStyles.formMessage}>{message}</Form.Message>
  );
};

export type FormData = {
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  IDNumber: string;
};

interface FormInputs {
  multipleErrorInput: string;
}

export default function IndividualApplication() {
  const onPhoneFillComplete = () => {};
  const validatePhoneNumber = () => {};

  const formSchema = z
    .object({
      phone: z.string({
        required_error: "Phone is required",
        invalid_type_error: "Phone number is not valid",
      }),
      firstName: z.string(),
      lastName: z.string(),
      address: z.string(),
      email: z
        .string()
        .min(1, { message: "Email address is required!" })
        .email({
          message: "Please provide a valid email!",
        }),
      IDNumber: z.string(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    // resolver: zodResolver(formSchema),
    mode: "all",
  });

  console.log("form errors --->", errors);

  const onSubmit = (data: FormData) => {
    
  };

  // TODO: fix validations

  return (
    <Card className={styles.container}>
      <Form.Root className={formStyles.formRoot} asChild>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formContainer}>
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
                <input
                  className={formStyles.input}
                  {...register("phone")}
                  type="phone"
                  required
                />
              </Form.Control>
              <ErrorMessage message={errors.phone?.message} />
              {/* <ErrorMessage
                errors={errors}
                name="multipleErrorInput"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              /> */}
            </Form.Field>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="firstName"
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>
                  First Name:
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className={formStyles.input}
                  {...register("firstName")}
                  type="firstName"
                  required
                />
              </Form.Control>
              <ErrorMessage message={errors.firstName?.message} />
            </Form.Field>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="lastName"
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>
                  Last Name:
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className={formStyles.input}
                  type="text"
                  {...register("lastName")}
                  required
                />
              </Form.Control>
              <ErrorMessage message={errors.lastName?.message} />
            </Form.Field>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="address"
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>
                  Address:
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className={formStyles.input}
                  {...register("address")}
                  type="text"
                  required
                />
              </Form.Control>
              <ErrorMessage message={errors.address?.message} />
            </Form.Field>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="email"
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>Email:</Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className={formStyles.input}
                  {...register("email")}
                  type="email"
                  required
                />
              </Form.Control>
              <ErrorMessage message={errors.email?.message} />
            </Form.Field>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="IDNumber"
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>
                  ID Number:
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className={formStyles.input}
                  {...register("IDNumber")}
                  type="text"
                />
              </Form.Control>
              <ErrorMessage message={errors.IDNumber?.message} />
            </Form.Field>
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "end" }}
          >
            <Form.Submit asChild>
              <Button
                size="4"
                className={formStyles.button}
                style={{ marginTop: 10, border: "1px solid gray" }}
                color="yellow"
                type="submit"
              >
                Register
              </Button>
            </Form.Submit>
          </div>
        </form>
      </Form.Root>
    </Card>
  );
}
