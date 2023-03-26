import { User } from "../interfaces/user.interface";

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
