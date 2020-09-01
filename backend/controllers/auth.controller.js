import HttpStatus from "http-status-codes";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";

const tokenSecret = "very_strong_token_SECRET";

export function login(req, res) {
  const { email, password } = req.body;
  User.query({
    where: { email: email },
  })
    .fetch()
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(password, user.get("password"))) {
          const token = jwt.sign(
            {
              id: user.get("id"),
              email: user.get("email"),
            },
            tokenSecret
          );

          res.json({
            success: true,
            token,
            email: user.get("email"),
          });
        } else {
          res.status(HttpStatus.UNAUTHORIZED).json({
            success: false,
            message: "Authentication failed. Invalid password.",
          });
        }
      } else {
        res.status(HttpStatus.UNAUTHORIZED).json({
          success: false,
          message: "Invalid username or password.",
        });
      }
    });
}
