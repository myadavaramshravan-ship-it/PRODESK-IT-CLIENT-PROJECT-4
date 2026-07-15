import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  transports: ["websocket"],

  autoConnect: true,

  reconnection: true,

  reconnectionAttempts: Infinity,

  reconnectionDelay: 1000,

  reconnectionDelayMax: 5000,
});

export default socket;