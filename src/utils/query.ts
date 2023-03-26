import { UserOptional } from "../interfaces/user.interface";

// Add parameters by the received data
const addParameters = (data: UserOptional): String => {
  let query: String = "";
  if (data.first_name) query += ' "first_name" = ' + `'${data.first_name}',`;
  if (data.last_name) query += ' "last_name" = ' + `'${data.last_name}',`;
  if (data.title) query += ' "title" = ' + `'${data.title}',`;
  if (data.email) query += ' "email" = ' + `'${data.email}',`;
  if (data.image) query += ' "image" = ' + `'${data.image}',`;
  if (data.department) query += ' "department" = ' + data.department + ",";
  return query;
};

// Build partial update query, to update the fields that been added
export const partialUpdateQueryString = (
  id: Number,
  data: UserOptional
): String => {
  let query = 'UPDATE "user" SET';
  query += addParameters(data);
  query = query.slice(0, -1);
  query += ' WHERE "id" = ' + id;
  return query;
};

// Add AND to parameter for where clause
const addParametersWithAND = (data: UserOptional): String => {
  let query: String = "";
  if (data.first_name) query += ' "first_name" = ' + `'${data.first_name}' AND`;
  if (data.last_name) query += ' "last_name" = ' + `'${data.last_name}' AND`;
  if (data.title) query += ' "title" = ' + `'${data.title}' AND`;
  if (data.email) query += ' "email" = ' + `'${data.email}' AND`;
  if (data.image) query += ' "image" = ' + `'${data.image}' AND`;
  if (data.department) query += ' "department" = ' + data.department + " AND";
  return query;
};

// Builds the query of selecting by the params
export const getByQueryString = (data: UserOptional):String => {
  let query = 'SELECT * FROM "user"';
  let addQuery = addParametersWithAND(data);
  if(data.id) addQuery += ' "id" = ' + data.id + " AND";
  if(addQuery.length > 0) {
    query += ' WHERE'
    query += addQuery;
    query = query.slice(0, -3);
  }
  return query;
}