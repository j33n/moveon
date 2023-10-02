import { BusinessType, UserType } from "@/app/utils/methods";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request: Request) {
  const businessFilePath = path.join(
    process.cwd(),
    "app/data",
    "businesses.json"
  );

  const newBusiness = await request.json();

  const rawData = fs.readFileSync(businessFilePath, "utf8");
  const businessData = JSON.parse(rawData);

  const exists = businessData.some(
    (business: BusinessType) =>
      business.businessName === newBusiness.businessName
  );

  const composeData = {
    id: String(businessData.length + 1),
    ...newBusiness,
    documents: [],
    // TODO: associate with owner details
    ownerId: "",
  };

  if (!exists) {
    businessData.push(composeData);

    fs.writeFileSync(businessFilePath, JSON.stringify(businessData, null, 2));
    return NextResponse.json({
      status: "SUCCESS",
      message: "OK",
      data: composeData,
    });
  } else {
    return NextResponse.json({
      status: "FAILED",
      message: "Business already exists!",
      data: composeData,
    });
  }
}
