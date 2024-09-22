import Todo from "../models/todo.js";


export default async function (req, res) {
    const { title, description } = req.body
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
        res.status(404).json({ message: "Todo not found" })
        return
    }
    if (todo.userId.toString() !== req.user._id.toString()) {
        res.status(403).json({ message: "Forbidden" })
        return
    }


    const obj = {
        title: title ? title : todo.title,
        description: description ? description : todo.description,
        userId: req.userId
    }

    const result = await Todo.findByIdAndUpdate(req.params.id, obj, {new: true})
    res.status(200).json(result) 

}