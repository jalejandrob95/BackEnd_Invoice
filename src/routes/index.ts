import express from "express";
import invoice from "./invoice";

type appType = any;
function routersApi(app: appType) {
  const router = express.Router();
  app.use("/v1", router);
  router.use("/invoice", invoice);
}

export default routersApi;
