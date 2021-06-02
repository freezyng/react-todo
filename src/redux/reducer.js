import { ADD_TODO, DELETE_TODO, UPDATE_TODO, GET_TODO } from './actions';
import {todoData} from './state';

export const todoReducer = (state = todoData, action) => {
    let newTodos;

    switch (action.type) {
        case GET_TODO:
            newTodos = [...state]
            newTodos = action.todo
            return newTodos
        case ADD_TODO:
            newTodos = [...state]
            newTodos.push(action.todo)
            return newTodos
        case DELETE_TODO:
            newTodos = [...state]
            newTodos = newTodos.filter(todo => todo.id !== action.todoId)
            for(let i = 0; i < newTodos.length; i++) {
                newTodos[i].id = i + 1 
            }
            return newTodos
        case UPDATE_TODO:
            newTodos = [...state]
            newTodos[action.todo.id - 1] = action.todo
            return newTodos
        default:
            return state;
    }
}
