import Joi from "joi"
import Todo from "../models/todo.js"
import filter from "../utils/filter.js"
import sorting from "../utils/sorting.js"

const sortSchema = Joi.any().allow("ASC", "DESC", "asc", "desc")
export default async function (req, res) {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const { sort = "ASC", term = "" } = req.query
    const { error } = sortSchema.validate(sort)
    if (error) {
        res.status(400).json({ message: "Enter in sorting ASC or DESC" })
    }
    const todos = await Todo
        .find()
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ title: sort === "ASC" ? 1 : -1 })
        .lean()
    const filteredTodos = filter(todos, term)
    res.status(200).json({ data: sortedTodos, page: page, limit: limit, total: filteredTodos.length, term, sort })
}