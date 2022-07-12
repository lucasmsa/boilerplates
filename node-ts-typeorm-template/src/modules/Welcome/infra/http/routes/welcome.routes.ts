import { Router } from "express";
import WelcomeController from "../controller/WelcomeController";

const welcomeRouter = Router();
const welcomeController = new WelcomeController();

welcomeRouter.get("/", welcomeController.show);

export default welcomeRouter;
