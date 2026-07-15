import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

import routes from "./routes/index.js";
import setupSocket from "./sockets/socketHandler.js";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "WebSocket Scoreboard API Running",
  });
});

setupSocket(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});