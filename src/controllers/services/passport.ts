import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcryptjs";
import { User } from "../../modals/user";

export const myPassport = (passport: passport.PassportStatic) => {
  passport.use(
    new Strategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email })
        .then((user: any) => {
          if (!user) {
            return done("user do not exit", false);
          } else {
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) {
                return done(err, false);
              } else if (isMatch) {
                return done(null, user);
              } else {
                return done(
                  "email and password combination did not match",
                  false
                );
              }
            });
          }
        })
        .catch((err: any) => console.log(err));
    })
  );
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((userId, done) => {
    User.findById(userId)
      .then((user: any) => {
        if (!user) {
          return done("can not find user", false);
        } else {
          return done(null, user);
        }
      })
      .catch((err: any) => console.log(err));
  });
};
