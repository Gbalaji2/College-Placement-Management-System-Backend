import express from "express";
import authenticateToken from "../middleware/auth.middleware.js";
import {
  AddCompany,
  CompanyDetail,
  AllCompanyDetail,
  DeleteCompany
} from "../controllers/Company/company.all-company.controller.js";

const router = express.Router();

// companies
router.get(
  "/company-detail",
  authenticateToken(["admin"]),
  AllCompanyDetail
);

router.get("/company-data", CompanyDetail);

// add & delete
router.post(
  "/add-company",
  authenticateToken(["admin"]),
  AddCompany
);

router.post(
  "/delete-company",
  authenticateToken(["admin"]),
  DeleteCompany
);

export default router;