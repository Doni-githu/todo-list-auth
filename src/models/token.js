import { Schema, model } from "mongoose"


const TokenSchema = new Schema({
    tokenId: String,
    userId: String,
})


const Token = model("Token", TokenSchema)

export default Token