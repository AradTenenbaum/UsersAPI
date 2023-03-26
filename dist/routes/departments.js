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
const departments_1 = require("../db/models/departments");
const convert_1 = require("../utils/convert");
const user_1 = require("../validation/user");
const router = require("express").Router();
// List the departments and amount of users related to them
router.get("/list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // fetch from db
        const result = yield (0, departments_1.getDepartmentsWithUsersCount)();
        return res.send(result);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Error in getting departments" });
    }
}));
// Create new department
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get department and convert it to our interface
        const department = (0, convert_1.convertDBDepartmentToDepartment)(req.body);
        // check for validation
        const validation = (0, user_1.isValidDepartment)(department);
        if (!validation.isValid) {
            return res.status(400).send(validation.messages);
        }
        // create on db
        yield (0, departments_1.createDepartment)(department);
        return res.send("Added successfully");
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Error in creating department" });
    }
}));
// Delete existing department
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get id from params
        const id = Number(req.params.id);
        // delete from db
        yield (0, departments_1.deleteDepartment)(id);
        return res.send("Deleted successfully");
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Error in deleting department" });
    }
}));
module.exports = router;
