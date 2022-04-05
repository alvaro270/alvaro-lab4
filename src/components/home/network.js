import { Router } from "express";
import * as Controller from "./controller";

const HomeRouter = Router();

HomeRouter.route("/").get(Controller.index);
export default HomeRouter;