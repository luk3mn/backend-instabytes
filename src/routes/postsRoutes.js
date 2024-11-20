import express from "express";
import { listarPosts } from "../controller/postsController.js";

const routes = (app) => {
  app.use(express.json()); // indica que será usado a estrutura JSON

  app.get("/posts", listarPosts);
}

export default routes;