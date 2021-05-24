import React from 'react';
import TodoItem from './todoItem.jsx';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import {deleteTodoThunk} from '../redux/actions';

function TodoList(props) {
    let todoArry = useSelector(state => state)

    return(
        <div>
            <h2>todo list</h2>
            {todoArry.map(todo => {
                return <TodoItem key={todo.id} todo={todo} deleteTodoThunk={props.deleteTodoThunk}/>
            })}
        </div>
    )
}


export default compose(
    connect('', {deleteTodoThunk})
)(TodoList)