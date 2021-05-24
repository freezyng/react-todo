import { ADD_TODO, DELETE_TODO } from './actions';
import {todoData} from './state';

export const todoReducer = (state = todoData, action) => {
    let newTodos;

    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state]
            newTodos.push(action.todo)
            debugger
            return newTodos
        case DELETE_TODO:
            newTodos = [...state]
            newTodos = newTodos.filter(todo => todo.id !== action.todoId)
            return newTodos
        default:
            return state;
    }
}
