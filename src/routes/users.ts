import { createUser, deleteUser, getUsersByParams, updateUser } from "../db/models/users";
import { Request, Response } from "express";
import { User } from "../interfaces/user.interface";
import { ValidationCheck } from "../interfaces/validation.interface";
import { convertDBUserToUser } from "../utils/convert";
import { isValidUserFields } from "../validation/user";
const router = require("express").Router();

// Get users by query params
router.get("/", async (req: Request, res: Response) => {
  try {
    // fetch from db with query params
    const result = await getUsersByParams(req.query);
    return res.send(result);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Error in getting users" });
  }
});

// Crete a new user
router.post("/create", async (req: Request, res: Response) => {
  try {
    // convert the request body to user interface
    const user: User = convertDBUserToUser(req.body)
    // check validation
    const validation: ValidationCheck = isValidUserFields(user)
    if(!validation.isValid) {
      return res.status(400).send(validation.messages)
    }
    // create on db
    await createUser(user);
    return res.send("Added successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Error in creating user" });
  }
});

// Delete existing user
router.delete("/delete/:id", async (req: Request, res: Response) => {
    try {
      // get id from params
      const id: number = Number(req.params.id);
      // delete from db
      await deleteUser(id);
      return res.send("Deleted successfully");
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: "Error in deleting user" });
    }
});

// Update specific user details
router.put("/update/:id", async (req: Request, res: Response) => {
    try {
      // get id from params
      const id: number = Number(req.params.id);
      // check details validation
      const validation: ValidationCheck = isValidUserFields(req.body)
      if(!validation.isValid) {
        return res.status(400).send(validation.messages)
      }
      // update user in db
      await updateUser(id, req.body);
      return res.send("Updated successfully");
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: "Error in updating user" });
    }
});

module.exports = router;
