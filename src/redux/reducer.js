import { ADD_TODO, DELETE_TODO, addTodo } from './actions';
import {todoData} from './state';

export const todoReducer = (state = todoData, action) => {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoData: [
                    ...state.message,
                    ...state.id = ++state.message.length
                ]
            }
        case DELETE_TODO:
            let newTodos = [...state]
            newTodos = newTodos.filter(todo => todo.id !== action.todoId)
            return newTodos
        default:
            return state;
    }
}
