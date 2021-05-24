import React from 'react';
import './todoItem.css';

function TodoItem(props) {
    return(
        <div>
            <div className="row item-row">
                <div className="id">#{props.todo.id}</div>
                <div className="title">{props.todo.message}</div>
                <button className="btn btn-edit">изменить</button>
                <button className="btn btn-delete" onClick={() => props.deleteTodoThunk(props.todo.id)}>удалить</button>
            </div>
        </div>
    )
}



export default TodoItem;