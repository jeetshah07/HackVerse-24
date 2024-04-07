import * as jwt from "jsonwebtoken";
import config from "../../../../../../git-repo/likes-service/src/config";
export const createToken = (data: { id: string }): string =>
  jwt.sign(data, config.auth.jwtSecret, { expiresIn: "30 minute" });
export const verifyToken = (token: string): any =>
  jwt.verify(token, config.auth.jwtSecret);
