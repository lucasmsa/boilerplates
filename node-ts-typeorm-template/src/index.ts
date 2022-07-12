import "reflect-metadata";
import "./shared/infra/typeorm";
import "./shared/container";
import express from "express";
import welcomeRouter from "./modules/Welcome/infra/http/routes/welcome.routes";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/welcome", welcomeRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 🎸`);
});
