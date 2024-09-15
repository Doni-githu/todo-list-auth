import Todo from "../models/todo.js"

export default async function (req, res) {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const todos = await Todo.find().skip((page - 1) * limit).limit(limit).lean()
    res.status(200).json({ data: todos, page: page, limit: limit, total: todos.length })
}