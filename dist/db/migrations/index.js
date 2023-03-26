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
// Run this file one after creating the db
// Run from root file after building js, npm run migrations
const Pool = require("pg").Pool;
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });
const fs = require("fs");
const directoryPath = path.join(__dirname, "sql");
// Create a pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
fs.readdir(directoryPath, function (err, files) {
    return __awaiter(this, void 0, void 0, function* () {
        if (err) {
            return console.log("Unable to scan directory: " + err);
        }
        // For each file in migrations, run the content
        let sqlQuery;
        files.forEach(function (file) {
            sqlQuery = fs.readFileSync(directoryPath + "/" + file).toString();
            pool.query(sqlQuery, (error, results) => {
                if (error) {
                    throw error;
                }
            });
        });
    });
});
