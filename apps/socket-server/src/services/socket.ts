import { Server } from "socket.io";
class SocketService {
  private _io: Server;
  constructor() {
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
  }
  get io() {
    return this._io;
  }
  public initListeners() {
    console.log("initialized socket Listeners ");
    const io = this._io;
    io.on("connect", (socket) => {
      console.log(`New socket connected :: ${socket.id}`);
      socket.on("event:message", ({ message }) => {
        console.log(`New message received ${message}`);
      });
    });
  }
}

export default SocketService;
