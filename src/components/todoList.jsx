import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todoItem.jsx';

function TodoList() {
    let todoArry = useSelector(state => state)

    return(
        <div>
            <h2>todo list</h2>
            {todoArry.map(todo => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default TodoList;