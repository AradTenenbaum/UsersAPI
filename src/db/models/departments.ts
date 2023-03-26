import { Depatment } from "../../interfaces/department.interface";
import { dbPool } from "../connect";

// Get departments with number of users related to each
export const getDepartmentsWithUsersCount = async () => {
  let result = { rows: [] };
  result = await dbPool.query(
    'SELECT D."name", D."description", count(U.id) as usersCount FROM department D \
        JOIN "user" U on U.department = D.id \
        GROUP BY U.department, D.id'
  );
  return result.rows;
};

// Create department
export const createDepartment = async (department: Depatment) => {
  await dbPool.query(
    'INSERT INTO "department" ("name", "description") \
            VALUES($1, $2)',
    [department.name, department.description]
  );
};

// Delete department
export const deleteDepartment = async (id: number) => {
  await dbPool.query('DELETE FROM "department" WHERE "id" = $1', [id]);
};