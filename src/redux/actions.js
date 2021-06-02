import {todoPostAPI} from '../api/api';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const GET_TODO = 'GET_TODO';


//actions
export const getTodo = (todo) => {
    return { type: GET_TODO, todo }
}

export const addTodo = (todo) => {
    return { type: ADD_TODO, todo }
}

export const deleteTodo = (todoId) => {
    return { type: DELETE_TODO, todoId }
}

export const updataTodo = (todo) => {
    return { type: UPDATE_TODO, todo }
}


//thunks
export const addTodoThunk = (todo) => {
    return (dispatch) => dispatch( addTodo(todo) );
}

export const deleteTodoThunk = (todoId) => {
    return async (dispatch) => {
        let response = await todoPostAPI.deleteTodo(todoId)
        dispatch(getTodoThunk());
    }
}

export const updataTodoThunk = (todo) => {
    return (dispatch) => dispatch( updataTodo(todo) );
}

export const getDataTodoThunk = (todo) => {
    return (dispatch) => dispatch( getTodo(todo) );
}

export const getTodoThunk = () => {
    return async (dispatch) => {
        let response = await todoPostAPI.getDataTodo()
        dispatch(getTodo(response));
    }
}