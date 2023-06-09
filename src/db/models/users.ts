import { User, UserOptional } from "../../interfaces/user.interface";
import { getByQueryString, partialUpdateQueryString } from "../../utils/query";
import { dbPool } from "../connect";

// Get users by query params
export const getUsersByParams = async (userData: UserOptional) => {
  let result = {rows:[]};
  result = await dbPool.query(getByQueryString(userData));
  return result.rows;
};

// Create a user query
export const createUser = async (user: User) => {
  await dbPool.query(
    'INSERT INTO "user" ("first_name", "last_name", "title", "email", "image", "department") \
        VALUES($1, $2, $3, $4, $5, $6)',
    [
      user.first_name,
      user.last_name,
      user.title,
      user.email,
      user.image,
      user.department,
    ]
  );
};

// Delete a user query
export const deleteUser = async (id: number) => {
  await dbPool.query('DELETE FROM "user" WHERE "id" = $1', [id]);
};

// Update a user query
export const updateUser = async (id: number, data: any) => {
  await dbPool.query(partialUpdateQueryString(id, data));
};
