import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import todo from "./routes/todo.js"
import user from "./routes/user.js"
import rateLimit from "express-rate-limit"
dotenv.config()

const app = express()

const limitter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
})


app.get("/api/hello-world", (req, res) => {
    res.status(200).json({message: "Hello World"})
})

app.use(limitter)
app.use(cors())
app.use(express.json())
app.use("/todos", todo)
app.use(user)


const startApp = () => {
    const port = process.env.PORT || 8000
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB was connected"))
        .catch((err) => console.error(`Error in connection mongodb: ${err}`))
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`)
    })
}

startApp()

export default app