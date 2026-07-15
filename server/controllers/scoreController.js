import {
  getScores,
  addScore,
  updateScore,
} from "../services/scoreService.js";

import { sanitize } from "../utils/sanitize.js";
import { validateScore } from "../utils/validators.js";
import { analytics } from "../utils/analytics.js";

// GET /scores
export const fetchScores = (req, res) => {
  res.status(200).json({
    success: true,
    scores: getScores(),
  });
};

// POST /scores
export const createScore = (req, res) => {
  const { isValid, errors } = validateScore(req.body);

  if (!isValid) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }

  const newScore = {
    id: Date.now(),
    teamA: sanitize(req.body.teamA),
    teamB: sanitize(req.body.teamB),
    scoreA: Number(req.body.scoreA),
    scoreB: Number(req.body.scoreB),
    status: req.body.status || "LIVE",
  };

  addScore(newScore);

  analytics();

  res.status(201).json({
    success: true,
    score: newScore,
  });
};

// PUT /scores/:id
export const editScore = (req, res) => {
  const id = Number(req.params.id);

  const updated = {
    teamA: sanitize(req.body.teamA),
    teamB: sanitize(req.body.teamB),
    scoreA: Number(req.body.scoreA),
    scoreB: Number(req.body.scoreB),
    status: req.body.status,
  };

  const scores = updateScore(id, updated);

  analytics();

  res.json({
    success: true,
    scores,
  });
};