import express, { Application, NextFunction, Request, Response } from 'express';
import { setUpDB } from './db/connect';
import cors from 'cors'
require("dotenv").config();

const app: Application = express();

// routes import
const usersRoute = require("./routes/users");
const departmentsRoute = require("./routes/departments");

// middlewares
app.use(express.json());
app.use(cors());

// routes connect
app.use("/api/users", usersRoute);
app.use("/api/departments", departmentsRoute);

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    res.send("ok")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await setUpDB();
    console.log(`Server is listening on port ${PORT}`);
});
