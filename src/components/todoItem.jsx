import React from 'react';
import './todoItem.css';

function TodoItem(props) {
    return(
        <div className="row">
            <div className="item-row">
                <div className="id">#{props.todo.id}</div>
                <div className="title">{props.todo.message}</div>
                <div className="wrap-btns">
                    <button className="btn btn-edit">изменить</button>
                    <button className="btn btn-delete" onClick={() => props.deleteTodoThunk(props.todo.id)}>удалить</button>
                </div>
            </div>
        </div>
    )
}



export default TodoItem;