import express from "express";
import { sendContactEmail } from "../controllers/contactController.js";
import { validateContact } from "../validators/contactValidator.js";

const router = express.Router();

router.post("/", validateContact, sendContactEmail);

export default router;
