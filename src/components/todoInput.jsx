import React from 'react';

function TodoInput() {
    return(
        <div>
            <h2>todo input</h2>
            <div className="row">
                <input type="text" />
                <button className="btn btn-add-post">добавить</button>
            </div>
        </div>
    )
}

export default TodoInput;