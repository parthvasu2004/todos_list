import { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  state = {
    isHovered: false,
    editMode: false,
    editTitle: this.props.todo.title,
    editDesc: this.props.todo.desc,
  };

  handleEditToggle = () => {
    this.setState((prev) => ({ editMode: !prev.editMode }));
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
    const { isHovered, editMode, editTitle, editDesc } = this.state;

    return (
      <div
        className={`todo-card ${isHovered ? "todo-card--hovered" : ""}`}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        {editMode && onEdit ? (
          <>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => this.setState({ editTitle: e.target.value })}
              className="todo-input"
            />
            <input
              type="text"
              value={editDesc}
              onChange={(e) => this.setState({ editDesc: e.target.value })}
              className="todo-input"
            />
            <button className="btn-edit" onClick={this.handleSave}>
              Save
            </button>
            <button className="btn-delete" onClick={this.handleEditToggle}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <h4 className="todo-title">
              {serial}. {todo.title}
            </h4>
            <p className="todo-desc">{todo.desc}</p>
            <button className="btn-delete" onClick={() => onDelete(todo)}>
              Delete
            </button>
            {onEdit && (
              <button className="btn-edit" onClick={this.handleEditToggle}>
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