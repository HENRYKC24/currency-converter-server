import express from "express";

import getRates from "../controllers/ratesController";

// USERS ROUTE
const router = express.Router();

router.get("/:currencies", getRates);

module.exports = router;
