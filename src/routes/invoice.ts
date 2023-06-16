import express from "express";
import { createInvoice, getSecuence } from "../controllers/invoice.controller";

const router = express.Router();

router.get("/", getSecuence);

router.post("/create", createInvoice);
export default router;
