import { Component } from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";

class Todos extends Component {
  render() {
    const { todos, onDelete, onEdit } = this.props;
    return (
      <div className="todos-container">
        <h3 className="todos-heading">Todos List</h3>
        {todos.length === 0 ? (
          <p className="todos-empty">No Todos to display</p>
        ) : (
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDelete={onDelete}
              serial={index + 1}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    );
  }
}

export default Todos;