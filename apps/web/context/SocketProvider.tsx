"use client";
import React, { createContext, useCallback, useEffect } from "react";
import { io } from "socket.io-client";

export interface ISocketContext {
  // eslint-disable-next-line no-unused-vars
  sendMessage: (msg: string) => any;
}

export const SocketContext = createContext<ISocketContext | null>(null);

const SocketProvider = ({ children }: { children?: React.ReactNode }) => {
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

export default SocketProvider;
