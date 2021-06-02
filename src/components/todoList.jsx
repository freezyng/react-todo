import React from 'react';
import TodoItem from './todoItem.jsx';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {deleteTodoThunk, updataTodoThunk, getTodoThunk} from '../redux/actions';

class TodoList extends React.Component {

    updateProfile(){
            this.props.getTodoThunk();
    }
    componentDidMount() {
        this.updateProfile()
    }
    

    render() { 
        return(
        <div>
            <h2>todo list</h2>
            {this.props.todo.map(todo => {
                return <TodoItem key={todo.id} todo={todo} 
                    deleteTodoThunk={this.props.deleteTodoThunk}
                    updataTodoThunk={this.props.updataTodoThunk} />
            })}
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        todo: state
    }
}

export default compose(
    connect(mapStateToProps, {deleteTodoThunk, updataTodoThunk, getTodoThunk})
)(TodoList)