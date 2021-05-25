import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './actions';
import {todoData} from './state';

export const todoReducer = (state = todoData, action) => {
    let newTodos;

    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state]
            newTodos.push(action.todo)
            return newTodos
        case DELETE_TODO:
            newTodos = [...state]
            newTodos = newTodos.filter(todo => todo.id !== action.todoId)
            return newTodos
        case UPDATE_TODO:
            newTodos = [...state]
            newTodos[action.todo.id - 1] = action.todo
            return newTodos
        default:
            return state;
    }
}
