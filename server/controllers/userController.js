import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Get user profile
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc    Login & Auth user / get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("login auth user");
});

// @desc    Logout user / Clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

export {
  getUsers,
  registerUser,
  getUserByID,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
  loginUser,
  logoutUser,
};
