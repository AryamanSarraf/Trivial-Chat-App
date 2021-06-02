import express from "express";
import session from "express-session";
import passport from "passport";
import { resolve, join } from "path";
import { router } from "./routes/index";
import { userRouter } from "./routes/user";
import { myPassport } from "./controllers/services/passport";

export const app = express();

myPassport(passport);

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.platform === "win32") {
  app.use(express.static(join(resolve(__dirname.replace("\\src", "\\views")))));
} else {
  app.use(express.static(join(resolve(__dirname.replace("/src", "/views")))));
}

app.use("/", router);
app.use("/user", userRouter);

app.use((req, res) => {
  if (process.platform === "win32") {
    res.sendFile(
      join(resolve(__dirname.replace("\\src", "\\views"), "404.html"))
    );
  } else {
    res.sendFile(
      join(resolve(__dirname.replace("/src", "/views"), "404.html"))
    );
  }
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err) {
      if (process.platform === "win32") {
        res.sendFile(
          join(resolve(__dirname.replace("\\src", "\\views"), "error.html"))
        );
      } else {
        res.sendFile(
          join(resolve(__dirname.replace("/src", "/views"), "error.html"))
        );
      }
    } else {
      next();
    }
  }
);
