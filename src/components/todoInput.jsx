import React, { useState } from 'react';
import './todoInput.css';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import { addTodoThunk } from '../redux/actions';

function TodoInput(props) {
    let todoArry = useSelector(state => state)
    let [textTodo, setTextTodo] = useState()
    return(
        <div>
            <div className="row">
                <input type="text" className="form-post" 
                    value={textTodo}
                    onChange={(e) => setTextTodo(e.target.value)}
                />
                <button className="btn btn-add-post"
                    onClick={() => {
                        if(textTodo){
                            props.addTodoThunk({id: todoArry.length + 1, message: textTodo})
                            setTextTodo('')
                        }
                    }}
                >добавить</button>
            </div>
        </div>
    )
}

export default compose(
    connect('', {addTodoThunk})
)(TodoInput)