
export default function(todos, term) {
    const regex = new RegExp(term, "i")

    const filteredTodos = todos.filter((item) => 
        regex.test(item.title) || regex.test(item.description)
    )
    return filteredTodos
}