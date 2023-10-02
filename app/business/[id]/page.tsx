"use client";

import businesses from "../../data/businesses.json";

import React, { ReactNode, useEffect } from "react";
import { Card, Heading, Text } from "@radix-ui/themes";
import { getUniqueMomoCode } from "@/app/utils/methods";

const BusinessTillPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const currentBusiness = businesses.find((business) => business.id === id);

  console.log("currentBusiness", currentBusiness);

  if (!currentBusiness) {
    return (
      <Heading color="bronze">{`Business with id ${id} not found`}</Heading>
    );
  }

  //   TODO: persist momo code
  const newMomoCode = () => getUniqueMomoCode();

  return (
    <div>
      <Heading color="gray">{currentBusiness.businessName}</Heading>
      {currentBusiness.description && (
        <Text style={{ marginTop: "1rem" }}>{currentBusiness.description}</Text>
      )}
      <div style={{ display: "flex", rowGap: "2rem", flexDirection: "column" }}>
        <Text style={{ marginTop: "1rem" }}>Please find Momo Code below</Text>
        <Card
          style={{
            background: "yellow",
            width: "200px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>code: </span>
          <br />
          <Text size="7" style={{ fontWeight: "700" }}>
            {!!currentBusiness.momoCode
              ? currentBusiness.momoCode
              : newMomoCode()}
          </Text>
          <div style={{ marginTop: "1rem" }}>
            <span>Business Name: </span>
            <br />
            <Text size="3" style={{ fontWeight: "700" }}>
              {currentBusiness.businessName}
            </Text>
            <br />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BusinessTillPage;
