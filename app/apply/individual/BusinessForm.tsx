"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import cx from "classnames";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@radix-ui/themes";
import { useForm, Controller, FieldError } from "react-hook-form";
import * as Form from "@radix-ui/react-form";

import { BusinessType, UserType, getUserByPhone } from "@/app/utils/methods";

import Loader from "@/app/components/loader";
import XIcon from "../../assets/x.svg";
import CheckIcon from "../../assets/check.svg";

import * as formStyles from "../../components/form/formStyles.css";
import * as styles from "./styles.css";

export type FormData = {
  businessName: string;
  description: string;
  address: string;
  tin: string;
  regNumber: string;
  category: string;
};

export const ErrorMessage = ({ message }: { message: any }) => {
  if (!message) {
    return null;
  }

  return (
    <Form.Message className={formStyles.formMessage}>{message}</Form.Message>
  );
};

export default function BusinessForm({
  handleBusinessDetailsAdded,
  handleSetRegisteredBusiness,
}: {
  handleBusinessDetailsAdded: (formSate: boolean) => void;
  handleSetRegisteredBusiness: (businessData: BusinessType) => void;
}) {
  const [userDataLoading, setUserDataLoading] = useState<boolean>(false);

  const err = {
    businessNameError: "Business name is required",
    lastNameError: "Last name is required",
    addressError: "Address is required",
    tinError: "TIN number is required",
    regNumError: "Registration number is required",
    categoryError: "Category is required",
  };

  const businessFormSchema = z
    .object({
      businessName: z.string({
        required_error: "Business name is required",
        invalid_type_error: "Business name is not valid",
      }),
      description: z.string().optional(),
      address: z
        .string({
          required_error: err.addressError,
        })
        .min(2, { message: err.addressError }),
      tin: z
        .string({
          required_error: err.tinError,
        })
        .min(1, { message: err.tinError }),
      regNumber: z
        .string({
          required_error: err.regNumError,
        })
        .min(1, { message: err.regNumError }),
      category: z
        .string({
          required_error: err.categoryError,
        })
        .min(2, { message: err.categoryError }),
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
    resolver: zodResolver(businessFormSchema),
    mode: "all",
  });

  //   useEffect(() => {
  //     if (phoneValidity) {
  //       const getUser = async () => {
  //         setUserDataLoading(true);
  //         const user = await getUserByPhone(watchedPhone);

  //         //
  //         // add timer to add a simulate loading
  //         setTimeout(() => {
  //           setUser(user.data);
  //           if (user.data) {
  //             setValue("phone", user.data.phone);
  //             setValue("firstName", user.data.firstName);
  //             setValue("lastName", user.data.lastName);
  //             setValue("address", user.data.address);
  //             setValue("email", user.data.email);
  //             setValue("IDNumber", user.data.IDNumber);
  //             setUserDataLoading(false);
  //           } else {
  //             setUserDataLoading(false);
  //           }
  //         }, 2000);
  //         return user.data;
  //       };

  //       getUser();
  //     }
  //   }, [phoneValidity, setValue, watchedPhone]);

  //   useEffect(() => {
  //     setPhoneValidity(!!watchedPhone && !phoneInvalid && !phoneError);
  //   }, [watchedPhone, phoneInvalid, phoneError]);

  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/business", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (res.status === "SUCCESS" && res.data) {
      console.log("res.data", res.data);
      handleSetRegisteredBusiness(res.data);
      handleBusinessDetailsAdded(true);
    } else {
      handleBusinessDetailsAdded(false);
    }
  };

  return (
    <div>
      {/* {phoneValidity && userDataLoading && <Loader />} */}

      <Form.Root className={formStyles.formRoot} asChild>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formContainer}>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="businessName"
              style={{ position: "relative" }}
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>
                  Business Name:
                </Form.Label>
              </div>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name="businessName"
                render={({ field }) => {
                  return (
                    <Form.Control asChild style={{ position: "relative" }}>
                      <input
                        className={formStyles.input}
                        type="text"
                        {...field}
                      />
                    </Form.Control>
                  );
                }}
              />
              <ErrorMessage message={errors.businessName?.message} />
            </Form.Field>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="description"
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>
                  Description:
                </Form.Label>
              </div>
              <Controller
                control={control}
                name="description"
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
              name="tin"
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>
                  TIN Number:
                </Form.Label>
              </div>
              <Controller
                control={control}
                name="tin"
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
              <ErrorMessage message={errors.tin?.message} />
            </Form.Field>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="regNumber"
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>
                  Registration Number:
                </Form.Label>
              </div>
              <Controller
                control={control}
                name="regNumber"
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
              <ErrorMessage message={errors.regNumber?.message} />
            </Form.Field>
            <Form.Field
              className={cx(formStyles.formField, styles.formField)}
              name="category"
            >
              <div className={formStyles.labelContainer}>
                <Form.Label className={formStyles.formLabel}>
                  Category:
                </Form.Label>
              </div>
              {/* TODO: make this a select */}
              <Controller
                control={control}
                name="category"
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
              <ErrorMessage message={errors.category?.message} />
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
                Submit Application
              </Button>
            </Form.Submit>
          </div>
        </form>
      </Form.Root>
    </div>
  );
}
