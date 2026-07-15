import { useEffect, useState } from "react";

import { useSocketContext } from "../context/SocketContext";

const useSocket = () => {
  const socket = useSocketContext();

  const [connected, setConnected] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => setConnected(true);

    const onDisconnect = () => setConnected(false);

    socket.on("connect", onConnect);

    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);

      socket.off("disconnect", onDisconnect);
    };
  }, [socket]);

  return {
    socket,
    connected,
  };
};

export default useSocket;