import express from "express";
import "./src/database";
import homeRoutes from "./src/routes/homeRoutes";
import dotenv from "dotenv";
dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  routes() {
    this.app.use("/", homeRoutes);
  }
}

export default new App().app;
