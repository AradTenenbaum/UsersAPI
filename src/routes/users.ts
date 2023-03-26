import { createUser, deleteUser, getUsersByParams, updateUser } from "../db/models/users";
import { Request, Response } from "express";
import { User } from "../interfaces/user.interface";
import { ValidationCheck } from "../interfaces/validation.interface";
import { convertDBUserToUser } from "../utils/convert";
import { isValidUserFields } from "../validation/user";
const router = require("express").Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await getUsersByParams(req.query);
    return res.send(result);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Error in getting users" });
  }
});

router.post("/create", async (req: Request, res: Response) => {
  try {
    const user: User = convertDBUserToUser(req.body)
    const validation: ValidationCheck = isValidUserFields(user)
    if(!validation.isValid) {
      return res.status(400).send(validation.messages)
    }
    await createUser(user);
    return res.send("Added successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Error in creating user" });
  }
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
    try {
      const id: number = Number(req.params.id);
      await deleteUser(id);
      return res.send("Deleted successfully");
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: "Error in deleting user" });
    }
});

router.put("/update/:id", async (req: Request, res: Response) => {
    try {
      const id: number = Number(req.params.id);
      const validation: ValidationCheck = isValidUserFields(req.body)
      if(!validation.isValid) {
        return res.status(400).send(validation.messages)
      }
      await updateUser(id, req.body);
      return res.send("Updated successfully");
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: "Error in updating user" });
    }
});

module.exports = router;
