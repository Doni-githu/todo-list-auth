import Todo from "../models/todo.js"

export default async function(req, res){
    const id = req.params.id
    const user = await Todo.findById(id)
    if(!user){
        res.status(404).json({message: "Todo was not found"})
        return
    }

    res.status(200).json(user)
}