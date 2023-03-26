import { dbPool } from "../connect";

export const getDepartmentsWithUsersCount = async () => {
    let result = {rows:[]};
    result = await dbPool.query(
        'SELECT D."name", D."description", count(U.id) as usersCount FROM department D \
        JOIN "user" U on U.department = D.id \
        GROUP BY U.department, D.id'
    );
    return result.rows;
}