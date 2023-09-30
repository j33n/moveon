"use client";

import React, { useState } from "react";
import cx from "classnames";
import * as Form from "@radix-ui/react-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import * as styles from "./styles.css";
import * as formStyles from "../../components/form/formStyles.css";
import { Button, Card } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";

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

const err = {
  firstNameError: "First name is required",
  lastNameError: "Last name is required",
  addressError: "Address is required",
  idNumberError: "Identification number is required",
  phoneError: "Phone is required",
  emailError: "Email is required",
};

export default function IndividualApplication() {
  const onPhoneFillComplete = () => {};
  const validatePhoneNumber = () => {};

  const formSchema = z
    .object({
      phone: z
        .string({
          required_error: err.phoneError,
          invalid_type_error: "Phone number is not valid",
        })
        .min(12, { message: "Phone number should be 12 characters long" })
        .max(12, { message: "Phone number should be 12 characters long" })
        .regex(/^2507/, { message: "Phone number should start with '250 7'" }),
      firstName: z
        .string({
          required_error: err.firstNameError,
        })
        .min(2, { message: err.firstNameError }),
      lastName: z
        .string({
          required_error: err.lastNameError,
        })
        .min(2, { message: err.lastNameError }),
      address: z
        .string({
          required_error: err.addressError,
        })
        .min(2, { message: err.addressError }),
      email: z
        .string({
          required_error: err.emailError,
        })
        .min(1, { message: err.emailError })
        .email({
          message: "Please provide a valid email!",
        }),
      IDNumber: z
        .string({
          required_error: err.idNumberError,
        })
        .min(16, { message: "ID should be 16 digits long" })
        .max(16, { message: "ID should be 16 digits long" })
        .regex(/^119\d{13}$/, {
          message: "ID should start with '119' and be 16 digits long",
        }),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  console.log("form errors --->", errors);

  const onSubmit = (data: FormData) => {
    console.log("data", data);
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
                <label className={formStyles.formLabel}>Phone:</label>
              </div>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <Form.Control asChild>
                    <input
                      className={formStyles.input}
                      type="phone"
                      {...field}
                    />
                  </Form.Control>
                )}
                name="phone"
              />
              <ErrorMessage message={errors.phone?.message} />
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
              <Controller
                control={control}
                name="firstName"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <Form.Control asChild>
                    <input
                      className={formStyles.input}
                      type="text"
                      {...field}
                    />
                  </Form.Control>
                )}
              />
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
              <Controller
                control={control}
                name="lastName"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <Form.Control asChild>
                    <input
                      className={formStyles.input}
                      type="text"
                      {...field}
                    />
                  </Form.Control>
                )}
              />
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
              <Controller
                control={control}
                name="address"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <Form.Control asChild>
                    <input
                      className={formStyles.input}
                      type="text"
                      {...field}
                    />
                  </Form.Control>
                )}
              />
              <ErrorMessage message={errors.address?.message} />
            </Form.Field>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="email"
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>Email:</Form.Label>
              </div>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <Form.Control asChild>
                    <input
                      className={formStyles.input}
                      type="email"
                      {...field}
                    />
                  </Form.Control>
                )}
              />
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
              <Controller
                control={control}
                name="IDNumber"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <Form.Control asChild>
                    <input
                      className={formStyles.input}
                      type="text"
                      {...field}
                    />
                  </Form.Control>
                )}
              />
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
