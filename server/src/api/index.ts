import { Router } from "express";
import nftRouter from "./nft/controller";

export default (): Router => {
  const app = Router();

  app.use("/nft", nftRouter);
  //TODO: add routes here...

  return app;
};
