import express from "express";
import authenticateToken from "../middleware/auth.middleware.js";

import { Login } from "../controllers/SuperUser/login.controller.js";
import { managementUsers, managementAddUsers, managementDeleteUsers } from "../controllers/SuperUser/user-management.controller.js";
import { tpoUsers, tpoAddUsers, tpoDeleteUsers } from "../controllers/SuperUser/user-tpo.controller.js";
import { studentUsers, studentAddUsers, studentDeleteUsers, studentApprove } from "../controllers/SuperUser/user-student.controller.js";

const router = express.Router();

// login
router.post("/login", Login);

// management routes (admin only)
router.get("/management-users", authenticateToken(["admin"]), managementUsers);
router.post("/management-add-user", authenticateToken(["admin"]), managementAddUsers);
router.post("/management-delete-user", authenticateToken(["admin"]), managementDeleteUsers);

// TPO routes (admin only)
router.get("/tpo-users", authenticateToken(["admin"]), tpoUsers);
router.post("/tpo-add-user", authenticateToken(["admin"]), tpoAddUsers);
router.post("/tpo-delete-user", authenticateToken(["admin"]), tpoDeleteUsers);

// student routes (admin only)
router.get("/student-users", authenticateToken(["admin"]), studentUsers);
router.post("/student-add-user", authenticateToken(["admin"]), studentAddUsers);
router.post("/student-delete-user", authenticateToken(["admin"]), studentDeleteUsers);
router.post("/student-approve", authenticateToken(["admin"]), studentApprove);

export default router;