import React, { Component } from "react";
import TodoItems from "./Todoitems";


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newInput: "",
      items: [],
    };
    this.addItem = this.addItem.bind(this)
    this.userInput = this.userInput.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }
  addItem(e) {
    if (this.state.newInput !== "") {
      var newItem = {
        text: this.state.newInput,
        key: new Date().getTime(),
        isCompleted: false,
      };
      // console.log(this.key)

      this.setState((prevState) => {
        return {
          newInput: '',
          items: prevState.items.concat(newItem)
        };
      });
    }
    e.preventDefault();
  }

  changeStatus(key) {
    let deletedArray = this.state.items.map(function (item, index) {
      console.log(item)
      if (item.key === key) {
        item.isCompleted = item.isCompleted === false ? true : false
        console.log(key)
      }
      return item
    });

    console.log(deletedArray)
    this.setState({ items: deletedArray })
  }
  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.items))
  }
  componentDidMount() {
    if (localStorage.getItem('items') != null) {
      var localToDoList = JSON.parse(localStorage.getItem('items'));
      this.setState({
        items: localToDoList,
      })
    }
  }
  userInput(e) {
    this.setState({
      newInput: e.target.value,
    });
  }
  render() {
    return (
      <div className="todoListMain">
        <h2 className="toDoHeader">2 Much 2 Do 2 Day</h2>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              value={this.state.newInput}
              type='text'
              onChange={this.userInput}
              placeholder=" What would you like to do? ">
            </input>
            <button type="submit"> + </button>
          </form>
        </div>

        <TodoItems entries={this.state.items} handelTodoCheck={this.changeStatus} />
      </div>
    );
  }
}
export default TodoList;

