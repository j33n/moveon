"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";
import * as Form from "@radix-ui/react-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import * as styles from "./styles.css";
import * as formStyles from "../../components/form/formStyles.css";
import { Button, Card } from "@radix-ui/themes";
import {
  useForm,
  Controller,
  FieldError,
} from "react-hook-form";
import Loader from "@/app/components/loader";

import XIcon from "../../assets/x.svg";
import CheckIcon from "../../assets/check.svg";
import Image from "next/image";

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
  const [phoneValidity, setPhoneValidity] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [phoneError, setPhoneError] = useState<FieldError | undefined>();

  const formSchema = z
    .object({
      phone: z
        .string({
          required_error: err.phoneError,
          invalid_type_error: "Phone number is not valid",
        })
        .min(12, { message: "Phone number should be 12 characters long" })
        .max(12, { message: "Phone number should be 12 characters long" })
        .regex(/^2507/, { message: "Phone number should start with '2507'" }),
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
    watch,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const watchedPhone = watch("phone");

  const handlePhoneChange = (val: any, invalid: boolean) => {
    if (phoneValidity) {
      // getUserByPhone();
    }
  };

  useEffect(() => {
    setPhoneValidity(!!watchedPhone && !phoneInvalid && !phoneError);
  }, [watchedPhone, phoneInvalid, phoneError]);

  const onSubmit = (data: FormData) => {
    console.log("data", data);
  };

  const handleSetPhoneValidity = (e) => {
    console.log("e.target.value", e.target.value);
  };

  return (
    <Card className={styles.container}>
      {/* {fetchingUserDetails && <Loader />} */}
      <Form.Root className={formStyles.formRoot} asChild>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formContainer}>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="phone"
              style={{ position: "relative" }}
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>Phone:</Form.Label>
              </div>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name="phone"
                render={({ field, fieldState: { invalid, error } }) => {
                  setPhoneInvalid(invalid);
                  setPhoneError(error);
                  return (
                    <Form.Control asChild style={{ position: "relative" }}>
                      <>
                        <input
                          className={formStyles.input}
                          type="phone"
                          {...field}
                        />
                        <div className={formStyles.validity}>
                          {phoneValidity ? (
                            <Image
                              src={CheckIcon}
                              alt=""
                              width="24"
                              height="24"
                            />
                          ) : (
                            <Image src={XIcon} alt="" width="24" height="24" />
                          )}
                        </div>
                      </>
                    </Form.Control>
                  );
                }}
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
