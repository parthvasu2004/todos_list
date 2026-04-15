import { Component } from "react";
import TodoItem from "./Todoitem";

// 🎨 Inline style objects
const todosStyles = {
  container: {
    margin: "30px 30px 30px 30px",
    padding: "20px",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(255,69,0,0.6)"
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "orange",
    marginBottom: "20px"
  },
  emptyText: {
    textAlign: "center",
    color: "lightgray",
    fontStyle: "italic"
  }
};

class Todos extends Component {
  render() {
    const { todos, onDelete } = this.props;
    return (
      <div style={todosStyles.container}>
        <h3 style={todosStyles.heading}>Todos List</h3>
        {todos.length === 0 ? (
          <p style={todosStyles.emptyText}>No Todos to display</p>
        ) : (
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDelete={onDelete}
              serial={index + 1}
            />
          ))
        )}
      </div>
    );
  }
}

export default Todos;
