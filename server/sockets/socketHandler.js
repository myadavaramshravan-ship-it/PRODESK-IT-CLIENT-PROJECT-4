import {
  getScores,
  addScore,
  updateScore,
} from "../services/scoreService.js";

import { sanitize } from "../utils/sanitize.js";
import { validateScore } from "../utils/validators.js";
import { analytics } from "../utils/analytics.js";

const setupSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(`✅ Client Connected: ${socket.id}`);

    socket.emit("scores", getScores());

    socket.on("add-score", (data) => {
      const { isValid, errors } = validateScore(data);

      if (!isValid) {
        socket.emit("validation-error", errors);
        return;
      }

      const newMatch = {
        id: Date.now(),
        teamA: sanitize(data.teamA),
        teamB: sanitize(data.teamB),
        scoreA: Number(data.scoreA),
        scoreB: Number(data.scoreB),
        status: data.status || "LIVE",
      };

      addScore(newMatch);

      analytics();

      io.emit("scores", getScores());
    });


    socket.on("update-score", (data) => {
      updateScore(data.id, {
        teamA: sanitize(data.teamA),
        teamB: sanitize(data.teamB),
        scoreA: Number(data.scoreA),
        scoreB: Number(data.scoreB),
        status: data.status,
      });

      analytics();

      io.emit("scores", getScores());
    });
    
    socket.on("delete-score", (id) => {
      const scores = getScores();
      const index = scores.findIndex((item) => item.id === id);

      if (index !== -1) {
        scores.splice(index, 1);
      }

      analytics();

      io.emit("scores", scores);
    });

    socket.on("disconnect", () => {
      console.log(`❌ Client Disconnected: ${socket.id}`);
    });
  });
};

export default setupSocket;