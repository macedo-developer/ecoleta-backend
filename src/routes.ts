import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";
import multer from "multer";
import multerConfig from "./config/multer";

const routes = express.Router();

const upload = multer(multerConfig);

const pointController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.post("/points", upload.single("image"), pointController.create);
routes.get("/points", pointController.index);
routes.get("/points/:id", pointController.show);
export default routes;
