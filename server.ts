import { createServer } from "http";
import { Server } from "socket.io";
import { config } from "dotenv";
import { resolve } from "path";
import { app } from "./src/app";
import { connectDB } from "./src/controllers/services/db";

config({ path: resolve(__dirname + "/.env") });
const server = createServer(app);
const port = process.env.PORT || 5000;
export const io = new Server(server);

//Connects to the database
connectDB();

server.listen(port, () =>
  //Executed if the server is run correctly
  console.log(`server is runing on http://localhost:${port}`)
);
