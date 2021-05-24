export const ADD_TODO = 'ADD_POST';
export const DELETE_TODO = 'DELETE_TODO';
export const UODATE_TODO = 'UODATE_TODO';



export const addTodo = (todo) => {
    return { type: ADD_TODO, todo }
}

export const deleteTodo = (todoId) => {
    return { type: DELETE_TODO, todoId }
}

export const updataTodo = (todo) => {
    return { type: UODATE_TODO, todo }
}

export const addTodoThunk = (todo) => {
    return (dispatch) => dispatch(addTodo(todo));
}

export const deleteTodoThunk = (todoId) => {
    return (dispatch) => dispatch(deleteTodo(todoId));
}