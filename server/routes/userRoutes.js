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
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, admin, getUsers).post(registerUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router
  .route("/:id")
  .get(protect, admin, getUserByID)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

export default router;
