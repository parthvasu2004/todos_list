import { Component } from "react";
import "./Addtodo.css";

class AddTodo extends Component {
  state = {
    title: "",
    desc: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, desc } = this.state;
    if (!title.trim() || !desc.trim()) return;
    this.props.AddTodo(title, desc);
    this.setState({ title: "", desc: "" });
  };

  render() {
    return (
      <div className="addtodo-container">
        <h3 className="addtodo-heading">Add a Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="addtodo-field">
            <label htmlFor="title" className="addtodo-label">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter todo title..."
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              className="addtodo-input"
            />
          </div>
          <div className="addtodo-field">
            <label htmlFor="desc" className="addtodo-label">Description</label>
            <input
              id="desc"
              type="text"
              placeholder="Enter todo description..."
              value={this.state.desc}
              onChange={(e) => this.setState({ desc: e.target.value })}
              className="addtodo-input"
            />
          </div>
          <button type="submit" className="addtodo-btn">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;