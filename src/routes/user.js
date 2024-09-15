import { Router } from "express";
import registerController from "../controllers/registerController.js"
import loginController from "../controllers/loginController.js"

const router = Router()

router.post("/register", registerController)
router.post("/login", loginController)


export default router