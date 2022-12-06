import { Router } from "express";
import { getInfo } from "../controllers/info.js";

const info = Router();

info.get("/", getInfo);

export default info;
