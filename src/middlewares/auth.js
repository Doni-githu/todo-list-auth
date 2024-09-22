import app from "../config/app.js"
import User from "../models/user.js"
import jwt from "jsonwebtoken"

export default async function (req, res, next) {
    const authorization = req.headers.authorization
    if (!authorization) {
        res.status(400).json({ message: "Token Not Provided!" })
        return
    }

    const token = authorization.replace("Token ", "")
    try {
        const payload = jwt.verify(token, app.jwt.secret)
        if (payload.type !== "access") {
            res.status(401).json({ message: "Invalid token!" })
            return
        }

        const user = await User.findById(token.payload.id)
        if (!user) {
            res.status(400).json({ message: "User not found or deleted" })
            return
        }
        req.user = user

    } catch (err) {
        if (err.name === "TokenExpiredError") {
            res.status(401).json({ message: "Token expired" })
            return
        }
        if (err.name === "JsonWebTokenError") {
            res.status(401).json({ message: "Invalid token!" })
            return
        }
    }
    next()

}