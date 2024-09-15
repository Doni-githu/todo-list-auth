import jwt from "../utils/jwt.js"

export default async function (req, res, next) {
    const authorization = req.headers.authorization
    if (!authorization) {
        res.status(401).json({ message: "Unauthorized" })
    }
    const token = jwt.decode(authorization.replace("Token ", ""))
    if (!token) {
        res.status(401).json({ message: "Unauthorized" })
    }
    req.userId = token.payload.id
    next()
}