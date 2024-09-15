import { Router } from "express";
import updateTodoController from "../controllers/updateTodoController.js";
import addTodoController from "../controllers/addTodoController.js";
import getTodosController from "../controllers/getTodosController.js"
import deleteTodoController from "../controllers/deleteTodoController.js"
import getTodoController from "../controllers/getTodoController.js";
import auth from "../middlewares/auth.js";

const router = Router()

router.post("/", auth, addTodoController)
router.put("/:id", auth, updateTodoController)
router.get("/", auth, getTodosController)
router.delete("/:id", auth, deleteTodoController)
router.get("/:id", auth, getTodoController)

export default router