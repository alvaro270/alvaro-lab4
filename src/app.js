import express from "express";
import { clientes, productos, home } from "./components";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", home);
app.use("/clientes", clientes);
app.use("/productos", productos);

export default app;