import { Request, Response } from "express";
import { resolve, join } from "path";
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
  if (process.platform === "win32") {
    res.sendFile(
      join(
        resolve(
          __dirname.replace("\\src\\controllers", "\\views"),
          "welcome.html"
        )
      )
    );
  } else {
    res.sendFile(
      join(
        resolve(__dirname.replace("/src/controllers", "/views"), "welcome.html")
      )
    );
  }
};

export const handleGetMessage = (req: Request, res: Response) => {
  if (process.platform === "win32") {
    res.sendFile(
      join(
        resolve(
          __dirname.replace("\\src\\controllers", "\\views"),
          "messages.html"
        )
      )
    );
  } else {
    res.sendFile(
      join(
        resolve(
          __dirname.replace("/src/controllers", "/views"),
          "messages.html"
        )
      )
    );
  }
};

export const handleGetJobs = (req: Request, res: Response) => {
  if (process.platform === "win32") {
    res.sendFile(
      join(
        resolve(__dirname.replace("\\src\\controllers", "\\views"), "jobs.html")
      )
    );
  } else {
    res.sendFile(
      join(
        resolve(__dirname.replace("/src/controllers", "/views"), "jobs.html")
      )
    );
  }
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
  if (process.platform === "win32") {
    res.sendFile(
      join(
        resolve(
          __dirname.replace("\\src\\controllers", "\\views"),
          "covid-19.html"
        )
      )
    );
  } else {
    res.sendFile(
      join(
        resolve(
          __dirname.replace("/src/controllers", "/views"),
          "covid-19.html"
        )
      )
    );
  }
};

export const handleGetFacilities = (req: Request, res: Response) => {
  if (process.platform === "win32") {
    res.sendFile(
      join(
        resolve(
          __dirname.replace("\\src\\controllers", "\\views"),
          "facilities.html"
        )
      )
    );
  } else {
    res.sendFile(
      join(
        resolve(
          __dirname.replace("/src/controllers", "/views"),
          "facilities.html"
        )
      )
    );
  }
};

export const handleGetNoticeBoard = (req: Request, res: Response) => {
  if (process.platform === "win32") {
    res.sendFile(
      join(
        resolve(
          __dirname.replace("\\src\\controllers", "\\views"),
          "notice-board.html"
        )
      )
    );
  } else {
    res.sendFile(
      join(
        resolve(
          __dirname.replace("/src/controllers", "/views"),
          "notice-board.html"
        )
      )
    );
  }
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
