import { Router } from "express";
import registerController from "../controllers/registerController.js"
import loginController from "../controllers/loginController.js"
import refreshTokens from "../controllers/refreshTokens.js";

const router = Router()

router.post("/register", registerController)
router.post("/login", loginController)
router.post("/refresh-tokens", refreshTokens)


export default router