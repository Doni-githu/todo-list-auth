import User from "../models/user.js"
import bcrypt from "bcrypt"
import { loginSchema } from "../validators/index.js"
import updateTokens from "./updateTokens.js"


export default async function (req, res) {
    const { email, password } = req.body
    const { error } = loginSchema.validate(req.body)
    if (error) {
        res.status(400).json(error.message)
        return
    }
    const user = await User.findOne({ email: email })
    if (!user) {
        res.status(404).json({ message: "User was not found" })
        return
    }

    const isTruthUser = await bcrypt.compare(password, user.password)
    if (!isTruthUser) {
        res.status(400).json({ message: "Password is wrong. Try other one" })
        return
    }

    updateTokens(user._id).then(tokens => res.status(200).json(tokens));
}