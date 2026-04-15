import { Component } from "react";

// 🎨 Inline style objects
const todoItemStyles = {
  card: {
    backgroundColor: "rgba(0,0,0,0.5)",
    border: "1px solid #e52d27",
    borderRadius: "10px",
    padding: "15px",
    margin: "30px 30px 0px 30px",
    color: "white",
    boxShadow: "0 0 15px rgba(255,69,0,0.6)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer"
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "orange",
    marginBottom: "10px"
  },
  desc: {
    fontSize: "14px",
    color: "lightgray",
    marginBottom: "15px"
  },
  button: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out"
  },
  buttonHover: {
    transform: "scale(1.05)"
  }
};

class TodoItem extends Component {
  state = {
    isHovered: false,
    buttonHovered: false
  };

  render() {
    const { todo, onDelete, serial } = this.props;
    const { isHovered, buttonHovered } = this.state;

    return (
      <div
        style={{
          ...todoItemStyles.card,
          ...(isHovered ? { transform: "scale(1.05)" } : {})
        }}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <h4 style={todoItemStyles.title}>
          {serial}. {todo.title}
        </h4>
        <p style={todoItemStyles.desc}>{todo.desc}</p>
        <button
          style={{
            ...todoItemStyles.button,
            ...(buttonHovered ? todoItemStyles.buttonHover : {})
          }}
          onMouseEnter={() => this.setState({ buttonHovered: true })}
          onMouseLeave={() => this.setState({ buttonHovered: false })}
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default TodoItem;
