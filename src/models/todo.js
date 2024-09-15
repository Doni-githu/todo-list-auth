import { Schema, model } from "mongoose"


const TodoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: {type: Schema.ObjectId, required: true}
})


const Todo = model("Todo", TodoSchema)

export default Todo