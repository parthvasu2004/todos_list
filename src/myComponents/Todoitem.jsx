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
    transition: "transform 0.2s ease-in-out",
    marginRight: "10px"
  },
  editButton: {
    backgroundColor: "orange",
    color: "black",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out"
  },
  buttonHover: {
    transform: "scale(1.05)"
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "1px solid orange",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    marginBottom: "10px",
    width: "100%"
  }
};

class TodoItem extends Component {
  state = {
    isHovered: false,
    buttonHovered: false,
    editMode: false,
    editTitle: this.props.todo.title,
    editDesc: this.props.todo.desc
  };

  handleEditToggle = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  handleSave = () => {
    const { todo, onEdit } = this.props;
    const { editTitle, editDesc } = this.state;
    if (onEdit) {
      onEdit(todo, editTitle, editDesc);
    }
    this.setState({ editMode: false });
  };

  render() {
    const { todo, onDelete, serial, onEdit } = this.props;
    const { isHovered, buttonHovered, editMode, editTitle, editDesc } = this.state;

    return (
      <div
        style={{
          ...todoItemStyles.card,
          ...(isHovered ? { transform: "scale(1.05)" } : {})
        }}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        {editMode && onEdit ? (
          <>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => this.setState({ editTitle: e.target.value })}
              style={todoItemStyles.input}
            />
            <input
              type="text"
              value={editDesc}
              onChange={(e) => this.setState({ editDesc: e.target.value })}
              style={todoItemStyles.input}
            />
            <button
              style={todoItemStyles.editButton}
              onClick={this.handleSave}
            >
              Save
            </button>
            <button
              style={todoItemStyles.button}
              onClick={this.handleEditToggle}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
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
            {onEdit && (
              <button
                style={todoItemStyles.editButton}
                onClick={this.handleEditToggle}
              >
                Edit
              </button>
            )}
          </>
        )}
      </div>
    );
  }
}

export default TodoItem;
