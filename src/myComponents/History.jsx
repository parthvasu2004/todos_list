import { Component } from "react";
import TodoItem from "./Todoitem";

const historyStyles = {
  container: {
    margin: "30px",
    padding: "20px",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(255,69,0,0.6)",
    marginBottom: "600px"
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

class History extends Component {
  render() {
    const { todos, onDelete } = this.props;

    return (
      <div style={historyStyles.container}>
        <h3 style={historyStyles.heading}>History of Todos</h3>
        {todos.length === 0 ? (
          <p style={historyStyles.emptyText}>No Todos added yet</p>
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
