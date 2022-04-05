import { Router } from "express";
import * as Controller from "./controller";
const clientesRouter = Router();

clientesRouter.route("/").get(Controller.lista_clientes);
export default clientesRouter;