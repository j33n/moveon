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

export type ApplicationList = Application[];

// USERS
export async function getUsers() {
  return {
    message: "OK",
    data: users,
  };
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
