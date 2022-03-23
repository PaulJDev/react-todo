import { initTodos } from './data.js'

class Todo {
    constructor({ description, tags, completed, title, priority }) {
        this.id = null
        this.description = description
        this.tags = tags
        this.completed = completed
        this.title = title
        this.priority = priority
        this.creationDate = new Date().toLocaleString()
    }

    getTodos() {
        return initTodos
    }

    saveTodo(todo) {
        initTodos.push(todo)
    }

    findTodo() {
        
    }

}