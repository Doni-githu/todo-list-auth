import Todo from "../models/todo.js";


export default async function(req, res){
    const todo = await Todo.findById(req.params.id)
    if(!todo){
        res.status(404).json({message: "Todo not found"})
        return
    }

    if(todo.userId !== req.userId){
        res.status(403).json({message: "Forbidden"})
        return
    }


    await Todo.findByIdAndDelete(todo._id)
    res.status(204).json({message: "Successfully deleted todo"})
}