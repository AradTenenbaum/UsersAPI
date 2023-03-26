"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDepartment = exports.createDepartment = exports.getDepartmentsWithUsersCount = void 0;
const connect_1 = require("../connect");
// Get departments with number of users related to each
const getDepartmentsWithUsersCount = () => __awaiter(void 0, void 0, void 0, function* () {
    let result = { rows: [] };
    result = yield connect_1.dbPool.query('SELECT D."name", D."description", count(U.id) as usersCount FROM department D \
        JOIN "user" U on U.department = D.id \
        GROUP BY U.department, D.id');
    return result.rows;
});
exports.getDepartmentsWithUsersCount = getDepartmentsWithUsersCount;
// Create department
const createDepartment = (department) => __awaiter(void 0, void 0, void 0, function* () {
    yield connect_1.dbPool.query('INSERT INTO "department" ("name", "description") \
            VALUES($1, $2)', [department.name, department.description]);
});
exports.createDepartment = createDepartment;
// Delete department
const deleteDepartment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield connect_1.dbPool.query('DELETE FROM "department" WHERE "id" = $1', [id]);
});
exports.deleteDepartment = deleteDepartment;
