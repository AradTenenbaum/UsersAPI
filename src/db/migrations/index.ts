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

fs.readdir(directoryPath, async function (err: any, files: []) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  // For each file in migrations, run the content
  let sqlQuery;
  files.forEach(function (file) {
    sqlQuery = fs.readFileSync(directoryPath + "/" + file).toString();
    pool.query(sqlQuery, (error: any, results: any) => {
      if (error) {
        throw error;
      }
    });
  });
});
