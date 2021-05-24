import React from 'react';
import TodoItem from './todoItem.jsx';

function TodoList() {
    return(
        <div>
            <h2>todo list</h2>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default TodoList;