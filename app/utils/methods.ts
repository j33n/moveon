import users from "../data/users.json";
import businesses from "../data/businesses.json";
import applications from "../data/applications.json";
import categories from "../data/categories.json";

export type Application = {
  applicationId: string;
  businessName: string;
  businessType: string;
  ownerFirstName: string;
  ownerLastName: string;
  assignedMomoCode: string;
  ownerId: string;
  businessId: string;
};

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
  IDNumber: string;
  businesses: string[];
  applications: string[];
};

export type BusinessType = {
  id: string;
  businessName: string;
  description: string;
  address: string;
  momoCode: string;
  TIN: string;
  regNumber: string;
  category: string;
  documents: string[];
  ownerId: string;
};

export type ApplicationList = Application[];

// USERS
export async function getUsers() {
  return {
    message: "OK",
    data: users,
  };
}

export async function getUserByPhone(phone: string) {
  const user = users.find((usr) => usr.phone === phone);

  return {
    message: "OK",
    data: user,
  };
}

function generateRandomMomoCode(length = 6) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
}

export const getUniqueMomoCode = () => {
  let unique = false;
  let momoCode = '';
  
  while (!unique) {
    momoCode = generateRandomMomoCode();
    if (!businesses.some(business => business.momoCode === momoCode)) {
      unique = true;
    }
  }
  
  return momoCode;
}

// BUSINESSES
export async function getBusinesses() {
  return {
    message: "OK",
    data: businesses,
  };
}

// APPLICATIONS
export async function getApplications() {
  return {
    message: "OK",
    data: applications,
  };
}

// CATEGORIES
export async function getCategories() {
  return {
    message: "OK",
    data: categories,
  };
}
