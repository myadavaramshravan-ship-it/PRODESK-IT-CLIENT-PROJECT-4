import express from "express";

import {
  fetchScores,
  createScore,
  editScore,
} from "../controllers/scoreController.js";

const router = express.Router();

router.get("/", fetchScores);

router.post("/", createScore);

router.put("/:id", editScore);

export default router;