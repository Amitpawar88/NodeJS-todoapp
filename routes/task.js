import express from "express";
import { deleteTask, getMyTask, newTask, updatetask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);

router.get("/my", isAuthenticated, getMyTask);

router.route("/:id").put(isAuthenticated, updatetask).delete(isAuthenticated, deleteTask);

export default router;