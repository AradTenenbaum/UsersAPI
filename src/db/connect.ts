const Pool = require("pg").Pool;

export let dbPool:(typeof Pool);

export const setUpDB = async () => {
    dbPool = await new Pool({
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    });

    console.log("Connected to DB")
}