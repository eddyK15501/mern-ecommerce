import express from "express";
const router = express.Router();
import {
  getUsers,
  registerUser,
  getUserByID,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

router.route("/").get(getUsers).post(registerUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").get(getUserByID).put(updateUser).delete(deleteUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
