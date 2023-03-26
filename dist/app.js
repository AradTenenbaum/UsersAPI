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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = require("./db/connect");
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const app = (0, express_1.default)();
// routes import
const usersRoute = require("./routes/users");
const departmentsRoute = require("./routes/departments");
// middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes connect
app.use("/api/users", usersRoute);
app.use("/api/departments", departmentsRoute);
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("ok");
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connect_1.setUpDB)();
    console.log(`Server is listening on port ${PORT}`);
}));
