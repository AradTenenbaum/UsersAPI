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
const router = require("express").Router();
router.get("/list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, departments_1.getDepartmentsWithUsersCount)();
        return res.send(result);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Error in getting departments" });
    }
}));
module.exports = router;
