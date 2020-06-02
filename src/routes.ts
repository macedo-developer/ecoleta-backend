import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.send("Welcome");
});

export default routes;
