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
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUsersByParams = void 0;
const query_1 = require("../../utils/query");
const connect_1 = require("../connect");
const getUsersByParams = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    let result = { rows: [] };
    result = yield connect_1.dbPool.query((0, query_1.getByQueryString)(userData));
    return result.rows;
});
exports.getUsersByParams = getUsersByParams;
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    yield connect_1.dbPool.query('INSERT INTO "user" ("first_name", "last_name", "title", "email", "image", "department") \
        VALUES($1, $2, $3, $4, $5, $6)', [
        user.first_name,
        user.last_name,
        user.title,
        user.email,
        user.image,
        user.department,
    ]);
});
exports.createUser = createUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield connect_1.dbPool.query('DELETE FROM "user" WHERE "id" = $1', [id]);
});
exports.deleteUser = deleteUser;
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield connect_1.dbPool.query((0, query_1.partialUpdateQueryString)(id, data));
});
exports.updateUser = updateUser;
