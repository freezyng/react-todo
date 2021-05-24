import React from 'react';
import './todoItem.css';

function TodoItem() {
    return(
        <div>
            <div className="row item-row">
                <div className="id">#1</div>
                <div className="title">текст</div>
                <button className="btn btn-edit">изменить</button>
                <button className="btn btn-delete">удалить</button>
            </div>
        </div>
    )
}

export default TodoItem;