import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { resolve, join } from "path";
import { MyUser } from "./Entity/user";

export interface IBody {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const handleGetUser = (req: Request, res: Response) => {
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

export const handleSignUp = (req: Request, res: Response) => {
  const { name, username, password, email, confirmPassword }: IBody = req.body;
  const newUser = new MyUser(name, username, email, password, confirmPassword);
  console.log(newUser);
  if (newUser.validate() === "valid user") {
    newUser.save();
    res.send(`
<head>
  <title>Trivia Chat Login</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="welcome.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</head>
             <div style="padding:0.75rem">
  <h1>Now you can log in </h1> 
  <a href='/'>go back</a> to log in
  </div>`);
  } else {
    const errors = newUser.validate();
    if (errors !== "valid user") {
      res.send(
        `<div style=
  'background-color: #c2c2c2; font-family:-apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "Roboto",
  "Helvetica Neue", Arial, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !default;'>
  <h1>${errors.errors.map((err) => {
    return err;
  })}</h1>
        <a href="/"> Go back </a> and try to sign up again
        </div>`
      );
    }
  }
};

export const handleSignIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/messages",
  })(req, res, next);
};

export const handleGetLogOut = (req: Request, res: Response) => {
  req.logOut();
  res.redirect("/");
};
