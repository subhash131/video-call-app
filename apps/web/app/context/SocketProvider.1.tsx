"use client";
import React, { useCallback, useEffect } from "react";
import { io } from "socket.io-client";
import { ISocketContext, SocketContext } from "./SocketProvider";

export const SocketProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const sendMessage: ISocketContext["sendMessage"] = useCallback((msg) => {
    console.log("msg: ", msg);
  }, []);

  useEffect(() => {
    const _socket = io("http://localhost:8000");
    return () => {
      _socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ sendMessage }}>
      {children}
    </SocketContext.Provider>
  );
};
