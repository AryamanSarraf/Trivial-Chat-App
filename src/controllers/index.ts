import { Request, Response } from "express";
import { resolve, join } from "path";
import { io } from "../../server";
//TODO use Job class to create jobs and save to database.
//import { Job } from "./Entity/job";
import { Jobs } from "../modals/job";

export interface IBody {
  name: string;
  ocupation: string;
  salary: number;
  contactNumber: number;
}

export const handleGetIndex = (req: Request, res: Response) => {
  res.sendFile(
    join(
      resolve(__dirname.replace("/src/controllers", "/views"), "welcome.html")
    )
  );
};

export const handleGetMessage = (req: Request, res: Response) => {
  io.on("connection", (socket) => {
    socket.on("user-join", (msg) => {
      socket.broadcast.emit("new-user-join", msg);
    });
    socket.on("chat-message", (msg) => {
      socket.broadcast.emit("new-chat-message", msg);
    });
  });
  res.sendFile(
    join(
      resolve(__dirname.replace("/src/controllers", "/views"), "messages.html")
    )
  );
};

export const handleGetJobs = (req: Request, res: Response) => {
  res.sendFile(
    join(resolve(__dirname.replace("/src/controllers", "/views"), "jobs.html"))
  );
};

export const handlePostJobs = (req: Request, res: Response) => {
  const { name, ocupation, salary, contactNumber }: IBody = req.body;
  const newJob = new Jobs({
    name,
    ocupation,
    salary,
    contactNumber,
  });
  newJob.save();
  res.redirect("/jobs");
};

export const handleGetCovid19 = (req: Request, res: Response) => {
  res.sendFile(
    join(
      resolve(__dirname.replace("/src/controllers", "/views"), "covid-19.html")
    )
  );
};

export const handleGetFacilities = (req: Request, res: Response) => {
  res.sendFile(
    join(
      resolve(
        __dirname.replace("/src/controllers", "/views"),
        "facilities.html"
      )
    )
  );
};

export const handleGetNoticeBoard = (req: Request, res: Response) => {
  res.sendFile(
    join(
      resolve(
        __dirname.replace("/src/controllers", "/views"),
        "notice-board.html"
      )
    )
  );
};

export const handleGetWelcomeUser = (req: Request, res: Response) => {
  res.json(req.user);
};

export const handleGetJob = (req: Request, res: Response) => {
  Jobs.find((err, jobs) => {
    if (err) {
      return console.log(err);
    } else {
      res.json(jobs);
    }
  });
};
