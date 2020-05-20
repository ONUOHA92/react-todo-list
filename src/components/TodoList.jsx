import React, { Component } from 'react';
import Todoitem from '../components/TodoItem'

class TodoList extends Component {
    render() {
        const { items, clearList, handleEdit, handleDelete } = this.props
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    todolist
                </h3>
                {items.map(item => (
                    <Todoitem key={item.id}
                        title={item.title}
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)} />
                ))}
                <button type="button" className="btn btn-danger btn-block text-uppercase nt-5" onClick={clearList}>
                  clear list
                </button>
            </ul>
        );
    }
}

export default TodoList;