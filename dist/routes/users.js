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
const users_1 = require("../db/models/users");
const convert_1 = require("../utils/convert");
const user_1 = require("../validation/user");
const router = require("express").Router();
// Get users by query params
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // fetch from db with query params
        const result = yield (0, users_1.getUsersByParams)(req.query);
        return res.send(result);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Error in getting users" });
    }
}));
// Crete a new user
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // convert the request body to user interface
        const user = (0, convert_1.convertDBUserToUser)(req.body);
        // check validation
        const validation = (0, user_1.isValidUserFields)(user);
        if (!validation.isValid) {
            return res.status(400).send(validation.messages);
        }
        // create on db
        yield (0, users_1.createUser)(user);
        return res.send("Added successfully");
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Error in creating user" });
    }
}));
// Delete existing user
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get id from params
        const id = Number(req.params.id);
        // delete from db
        yield (0, users_1.deleteUser)(id);
        return res.send("Deleted successfully");
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Error in deleting user" });
    }
}));
// Update specific user details
router.put("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get id from params
        const id = Number(req.params.id);
        // check details validation
        const validation = (0, user_1.isValidUserFields)(req.body);
        if (!validation.isValid) {
            return res.status(400).send(validation.messages);
        }
        // update user in db
        yield (0, users_1.updateUser)(id, req.body);
        return res.send("Updated successfully");
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Error in updating user" });
    }
}));
module.exports = router;
