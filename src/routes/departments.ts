import { Request, Response, Router } from "express";
import { getDepartmentsWithUsersCount } from "../db/models/departments";
const router = require("express").Router();


router.get("/list", async (req: Request, res: Response) => {
    try {
        const result = await getDepartmentsWithUsersCount();
        return res.send(result);
      } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Error in getting departments" });
      }
})


module.exports = router;
