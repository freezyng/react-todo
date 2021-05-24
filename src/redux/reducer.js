import { ADD_TODO, DELETE_TODO } from './actions';
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
            return {
                ...state,
                
            }
        default:
            return state;
    }
}