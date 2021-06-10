import bcrypt from "bcryptjs";
import { User } from "../../../modals/user";

export const saveUserToDatabase = (
  name: string,
  username: string,
  email: string,
  password: string
) => {
  User.findOne({ username: username })
    .then((user: any) => {
      if (user) {
        console.log("user already exits");
      } else {
        const newUser = new User({
          name,
          username,
          email,
          password,
        });
        bcrypt.genSalt(10, (err, salt) => {
          if (!err) {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                console.log(err);
              } else {
                newUser.password = hash;
                newUser
                  .save()
                  .then((user: any) => {})
                  .catch((err: any) => console.log(err));
              }
            });
          }
        });
      }
    })
    .catch((err: any) => console.log(err));
};
