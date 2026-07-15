import express from "express";
import scoreRoutes from "./scoreRoutes.js";

const router = express.Router();

router.use("/scores", scoreRoutes);

export default router;