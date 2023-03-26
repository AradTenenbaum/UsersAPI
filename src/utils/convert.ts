import { Depatment } from "../interfaces/department.interface";
import { User } from "../interfaces/user.interface";

// Convert db user to user from the interface
export const convertDBUserToUser = (dbUser: any): User => {
  return {
    id: dbUser.id,
    first_name: dbUser.first_name,
    last_name: dbUser.last_name,
    title: dbUser.title,
    email: dbUser.email,
    image: dbUser.image,
    department: dbUser.department,
  };
};

// Convert db department to department from the interface
export const convertDBDepartmentToDepartment = (
  dbDepartment: any
): Depatment => {
  return {
    id: dbDepartment.id,
    name: dbDepartment.name,
    description: dbDepartment.description,
  };
};
