import User from "../models/user.js";
import jwt from "../utils/jwt.js";
import { registerSchema } from "../validators/index.js"
import bcrypt from "bcrypt"
export default async function (req, res) {
    const { name, email, password } = req.body
    const { error } = registerSchema.validate(req.body)
    if (error) {
        res.status(400).json(error.message)
        return
    }

    const user = await User.findOne({ email })
    console.log(user)
    if (user) {
        res.status(404).json({ message: "a user with this email address already exists. Try again with other one" })
        return
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = {
        name,
        email,
        password: hashPassword
    }

    const result = await User.create(newUser)
    const token = jwt.encode(result._id)
    res.status(201).json({ token })
}