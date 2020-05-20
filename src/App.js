import React, { Component } from 'react';
import './App.css'

// this import of component goes right here
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import uuid from "react-uuid"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuid(),
      item: '',
      editItem: false

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearList = this.clearList.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  };

  //  this is for the hundle change
  handleChange(e) {
    this.setState({
     item: e.target.value
    })

  }
  //  THIS IS FOR THE HANDLE SUBMIT
  handleSubmit(e) {
    e.preventDefault()
    const newData ={
      id: this.state.id,
      title: this.state.item
    }

    const upploadItem = [...this.state.items, newData];
    this.setState({
      items: upploadItem,
      item: '',
      id: uuid(),
      editItem: false


    }
    )

  }

  // THIS IS FOR THE CLEARLIST
  clearList() {
    this.setState({
      items:[]
    })

  }

  // THIS IS FOR THE HANDLE EIDT
  handleEdit (id) {
    const filterItems = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
     this.setState({
       items: filterItems,
       item: selectedItem.title,
       id:id,
       editItem:true
     })
     
  }

  // THIS IS FOR THE HANDLE DELETE

  handleDelete(id) {
    const filterItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterItems
    });

  }

  render() {
   
    return (

      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center text-success">todo input</h3>
            <TodoInput item={this.state.item}
             handleChange={this.handleChange} 
             handleSubmit={this.handleSubmit}
              editItem={this.state.editItem} />

            <TodoList items={this.state.items} 
            clearList={this.clearList} 
            handleEdit={this.handleEdit} 
            handleDelete={this.handleDelete} />
          </div>
        </div>
      </div>

    );
  }
};

export default App;