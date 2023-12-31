"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import cx from "classnames";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@radix-ui/themes";
import { useForm, Controller, FieldError } from "react-hook-form";
import * as Form from "@radix-ui/react-form";

import { UserType, getUserByPhone } from "@/app/utils/methods";

import Loader from "@/app/components/loader";
import XIcon from "../../assets/x.svg";
import CheckIcon from "../../assets/check.svg";

import * as formStyles from "../../components/form/formStyles.css";
import * as styles from "./styles.css";

export type FormData = {
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  IDNumber: string;
};

export const ErrorMessage = ({ message }: { message: any }) => {
  if (!message) {
    return null;
  }

  return (
    <Form.Message className={formStyles.formMessage}>{message}</Form.Message>
  );
};

export default function PersonalForm({
  handleSetUserDetailsAdded,
}: {
  handleSetUserDetailsAdded: (formSate: boolean) => void;
}) {
  const [phoneValidity, setPhoneValidity] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [phoneError, setPhoneError] = useState<FieldError | undefined>();
  const [userDataLoading, setUserDataLoading] = useState<boolean>(false);

  const [user, setUser] = useState<UserType>();

  const err = {
    firstNameError: "First name is required",
    lastNameError: "Last name is required",
    addressError: "Address is required",
    idNumberError: "Identification number is required",
    phoneError: "Phone is required",
    emailError: "Email is required",
  };

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
        .max(16, { message: "ID should be 16 digits long" }),
      // .regex(/^119\d{13}$/, {
      //   message: "ID should start with '119' and be 16 digits long",
      // }),
    })
    .required();

  const {
    watch,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const watchedPhone = watch("phone");

  useEffect(() => {
    if (phoneValidity) {
      const getUser = async () => {
        setUserDataLoading(true);
        const user = await getUserByPhone(watchedPhone);

        // add timer to add a simulate loading
        setTimeout(() => {
          setUser(user.data);
          if (user.data) {
            setValue("phone", user.data.phone);
            setValue("firstName", user.data.firstName);
            setValue("lastName", user.data.lastName);
            setValue("address", user.data.address);
            setValue("email", user.data.email);
            setValue("IDNumber", user.data.IDNumber);
            setUserDataLoading(false);
          } else {
            setUserDataLoading(false);
          }
        }, 2000);
        return user.data;
      };

      getUser();
    }
  }, [phoneValidity, setValue, watchedPhone]);

  useEffect(() => {
    setPhoneValidity(!!watchedPhone && !phoneInvalid && !phoneError);
  }, [watchedPhone, phoneInvalid, phoneError]);

  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (res.status === "SUCCESS" && res.data) {
      handleSetUserDetailsAdded(true);
    } else {
      handleSetUserDetailsAdded(false);
    }
  };

  return (
    <div>
      {phoneValidity && userDataLoading && <Loader />}

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
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
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
    </div>
  );
}
