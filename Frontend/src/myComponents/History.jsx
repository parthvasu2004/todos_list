import { Component } from "react";
import TodoItem from "./TodoItem";
import "./History.css";

class History extends Component {
  render() {
    const { todos, onDelete } = this.props;
    return (
      <div className="history-container">
        <h3 className="history-heading">History of Todos</h3>
        {todos.length === 0 ? (
          <p className="history-empty">No Todos added yet</p>
        ) : (
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              serial={index + 1}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    );
  }
}

export default History;