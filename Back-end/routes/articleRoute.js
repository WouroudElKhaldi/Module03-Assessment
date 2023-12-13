import express from "express";
import {
  getAllArticles,
  getOneArticle,
  addArticle,
  updateArticle , 
  deleteArticle
} from "../controller/articleController.js";
import { upload } from "../middlewares/upload.js";

const articleRouter = express.Router();

articleRouter.get("/", getAllArticles);
articleRouter.post("/one", getOneArticle);
articleRouter.post("/add", upload.single("image"), addArticle);
articleRouter.patch("/", upload.single("image") , updateArticle);
articleRouter.delete('/', deleteArticle)

export default articleRouter;