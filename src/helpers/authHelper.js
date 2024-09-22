import app from "../config/app.js"
import jwt from "jsonwebtoken"
import {v4} from "uuid"
import Token from "../models/token.js"
const generateAccessToken = (userId) =>   {
    const payload = {
        userId,
        type: app.jwt.tokens.access.type,
    }
    const opt = {
        expiresIn: app.jwt.tokens.access.expiresIn
    }
    return jwt.sign(payload, app.jwt.secret, opt)
}  
const generateRefreshToken = () => {
    const payload =  {
        id: v4(),
        type: app.jwt.tokens.refresh.type
    }

    const opt = {
        expiresIn: app.jwt.tokens.refresh.expiresIn
    }

    return {
        id: payload.id,
        token: jwt.sign(payload, app.jwt.secret, opt)
    }
}

const replaceDBRefreshToken = async (tokenId, userId) => {
    await Token.findOneAndDelete({userId})
    await Token.create({tokenId, userId})
}

export default {
    replaceDBRefreshToken,
    generateAccessToken,
    generateRefreshToken
}