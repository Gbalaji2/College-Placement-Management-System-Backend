import express from "express";
import authenticateToken from "../middleware/auth.middleware.js";

import { Login } from "../controllers/TPO/tpo.login.controller.js";
import { PostJob } from "../controllers/TPO/tpo.post-job.controller.js";
import { AllJobs, DeleteJob, JobData, JobWithApplicants, StudentJobsApplied } from "../controllers/user/user.all-jobs.controller.js";

const router = express.Router();

// login
router.post("/login", Login);

// jobs
router.post("/post-job", authenticateToken(["tpo", "admin"]), PostJob);
router.get("/jobs", AllJobs); // public
router.post("/delete-job", authenticateToken(["tpo", "admin"]), DeleteJob);
router.get("/job/:jobId", authenticateToken(), JobData);
router.get("/job/applicants/:jobId", authenticateToken(["tpo", "admin"]), JobWithApplicants);
router.get("/myjob/:studentId", authenticateToken(["student"]), StudentJobsApplied);

export default router;