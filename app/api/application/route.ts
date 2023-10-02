import { UserType } from "@/app/utils/methods";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request: Request) {
  const usersFilePath = path.join(process.cwd(), "app/data", "users.json");

  const newApplication = await request.json();

  // Read the file
  const rawData = fs.readFileSync(usersFilePath, "utf8");
  const applicationsData = JSON.parse(rawData);

  // Check if user exists
  const exists = applicationsData.some(
    (user: UserType) => user.phone === newApplication.phone
  );

  const composeApplication = {
    id: String(applicationsData.length + 1),
    ...newApplication,
    businesses: [],
    applications: [],
  };

  if (!exists) {
    applicationsData.push(composeApplication);

    fs.writeFileSync(usersFilePath, JSON.stringify(applicationsData, null, 2));
    return NextResponse.json({
      status: "SUCCESS",
      message: "OK",
      data: composeApplication,
    });
  } else {
    return NextResponse.json({
      status: "FAILED",
      message: "User already exists!",
      data: newApplication,
    });
  }
}
