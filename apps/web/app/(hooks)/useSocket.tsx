import { useContext } from "react";
import { ISocketContext, SocketContext } from "../(context)/SocketProvider";

export const useSocket = (): ISocketContext => {
  const state = useContext(SocketContext);
  if (!state) throw new Error(`socket state is undefined`);

  return state;
};
