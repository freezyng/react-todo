import React, { useState } from 'react';
import './todoItem.css';

function TodoItem(props) {
    let [editable, setEditable] = useState(false);
    let [textTodo, setTextTodo] = useState(props.todo.message);

    return(
        <div className="row">
            <div className="item-row">
                <div className="id">#{props.todo.id}</div>
                {editable 
                    ? <input type="text"  className="form-post" autoFocus={true}
                        value={textTodo}
                        onChange={(e) => setTextTodo(e.target.value)}
                    /> 
                    : <div className="title">{props.todo.message}</div>}
                <div className="wrap-btns">
                    <button className="btn btn-edit" onClick={ () => {
                        if(editable){
                            props.updateTodoThunk({id: props.todo.id, message: textTodo})
                        } 
                        setEditable(!editable)
                        }} >изменить</button>
                    <button className="btn btn-delete" onClick={() => props.deleteTodoThunk(props.todo.id)}>удалить</button>
                </div>
            </div>
        </div>
    )
}



export default TodoItem;