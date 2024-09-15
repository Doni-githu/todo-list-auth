export default function(todos, sort) {
    switch (sort) {
        case "ASC":
            return todos.sort((a, b) => a.title.localeCompare(b))
        case "DESC":
            return todos.sort((a, b) => b.title.localeCompare(a))
    }
}