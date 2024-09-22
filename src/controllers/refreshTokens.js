import jwt from "jsonwebtoken"
import app from "../config/app.js";
import Token from "../models/token.js";
import updateTokens from "./updateTokens.js";

export default function (req, res) {
    const { refresh_token } = req.body
    let payload;
    try {
        payload = jwt.verify(refresh_token, app.jwt.secret)
        if (payload.type !== "refresh") {
            res.status(400).json({ message: "Invalid token!" })
            return
        }
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(400).json({ message: "Token expired!" })
            return
        } else if (error instanceof jwt.JsonWebTokenError) {
            res.status(400).json({ message: "Invalid token!" })
            return
        }
    }

    Token.findOne({ tokenId: payload.id })
        .exec()
        .then((token) => {
            if (token === null) {
                throw new Error("Invalid Token!")
            }
            return updateTokens(token.userId)
        })
        .then((tokens) => res.status(200).json(tokens))
        .catch((err) => res.status(400).json({message: err.message}))
}