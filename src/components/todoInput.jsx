import React from 'react';
import './todoInput.css';
import {addTodoThunk} from '../redux/reducer';

function TodoInput() {
    return(
        <div>
            <h2>todo input</h2>
            <div className="row">
                <input type="text" className="form-post" />
                <button className="btn btn-add-post"
                >добавить</button>
            </div>
        </div>
    )
}

export default TodoInput;