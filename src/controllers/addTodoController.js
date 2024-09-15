import Todo from "../models/todo.js"
import { addTodoSchema } from "../validators/index.js"

export default async function(req, res){
    const {error} = addTodoSchema.validate(req.body)
    if(error){   
        res.status(400).json(error.message)
        return
    }
    const result = await Todo.create({...req.body, userId: req.userId})
    res.status(200).json(result)
}