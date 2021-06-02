import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://60b78ee617d1dc0017b8a562.mockapi.io/todo-posts/'
})



const todoPostAPI = {
    getDataTodo() {
        return instance.get()
        .then(response => response.data);
    },
    deleteTodo(todoId){
        return instance.delete(todoId)
    },
    addDataTodo(todo) {
        return instance.post('', todo)
        .then(response => response.data);
    },
    updateTodo(todo) {
        return instance.put(todo.id, {message: todo.message})
    },
}


export {todoPostAPI}