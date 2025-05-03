import { Router } from "express";
import marketsRoutes from "./markets.route";

const routes = Router();

routes.use("/markets", marketsRoutes);

export default routes;
