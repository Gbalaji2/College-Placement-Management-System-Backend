import express from "express";
import authenticateToken from "../middleware/auth.middleware.js";

import { Login } from "../controllers/Management/login.controller.js";
import { UsersTPO } from "../controllers/Management/tpo-users.controller.js";
import { DeleteTPO } from "../controllers/Management/delete-tpo.controller.js";
import { AddTPO, AddManagement, AddStudent } from "../controllers/Management/add-user.controller.js";
import { SendNotice, GetAllNotice, DeleteNotice, GetNotice } from "../controllers/Management/notice.controller.js";

const router = express.Router();

// login
router.post("/login", Login);

// TPO management (management/admin only)
router.get(
  "/tpo-users",
  authenticateToken(["management", "admin"]),
  UsersTPO
);

router.post(
  "/deletetpo",
  authenticateToken(["management", "admin"]),
  DeleteTPO
);

// Add users
router.post(
  "/addtpo",
  authenticateToken(["management", "admin"]),
  AddTPO
);

router.post(
  "/add-management",
  authenticateToken(["admin"]),
  AddManagement
);

router.post(
  "/add-student",
  authenticateToken(["management", "admin"]),
  AddStudent
);

// notices
router.post(
  "/send-notice",
  authenticateToken(["management", "admin"]),
  SendNotice
);

router.get(
  "/get-all-notices",
  authenticateToken(["management", "admin"]),
  GetAllNotice
);

router.get("/get-notice", GetNotice); // public

router.post(
  "/delete-notice",
  authenticateToken(["management", "admin"]),
  DeleteNotice
);

export default router;