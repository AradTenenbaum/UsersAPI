import { Request, Response, Router } from "express";
import { createDepartment, deleteDepartment, getDepartmentsWithUsersCount } from "../db/models/departments";
import { Depatment } from "../interfaces/department.interface";
import { ValidationCheck } from "../interfaces/validation.interface";
import { convertDBDepartmentToDepartment } from "../utils/convert";
import { isValidDepartment } from "../validation/user";
const router = require("express").Router();

// List the departments and amount of users related to them
router.get("/list", async (req: Request, res: Response) => {
    try {
        // fetch from db
        const result = await getDepartmentsWithUsersCount();
        return res.send(result);
      } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Error in getting departments" });
      }
});

// Create new department
router.post("/create", async (req: Request, res: Response) => {
  try {
    // get department and convert it to our interface
    const department: Depatment = convertDBDepartmentToDepartment(req.body)
    // check for validation
    const validation: ValidationCheck = isValidDepartment(department)
    if(!validation.isValid) {
      return res.status(400).send(validation.messages)
    }
    // create on db
    await createDepartment(department);
    return res.send("Added successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Error in creating department" });
  }
});

// Delete existing department
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    // get id from params
    const id: number = Number(req.params.id);
    // delete from db
    await deleteDepartment(id);
    return res.send("Deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Error in deleting department" });
  }
});


module.exports = router;
