import React, { useState } from "react";

// 🎨 Inline style objects
const addTodoStyles = {
  container: {
    margin: "40px",
    padding: "15px",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(255,69,0,0.6)"
  },
  heading: {
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "bold",
    color: "orange",
    marginBottom: "20px"
  },
  label: {
    color: "white",
    fontWeight: "500",
    marginBottom: "5px",
    display: "block"
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "1px solid orange",
    color: "white",
    padding: "8px",
    borderRadius: "5px",
    width: "100%",
    marginBottom: "15px"
  },
  button: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "transform 0.2s ease-in-out"
  },
  buttonHover: {
    transform: "scale(1.05)"
  }
};

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [hover, setHover] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description is required");
      return;
    }
    props.AddTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div style={addTodoStyles.container}>
      <h3 style={addTodoStyles.heading}>Add a Todo</h3>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="title" style={addTodoStyles.label}>
            Add a title for your Todo.
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={addTodoStyles.input}
          />
        </div>
        <div>
          <label htmlFor="desc" style={addTodoStyles.label}>
            Describe your Todo in detail.
          </label>
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={addTodoStyles.input}
          />
        </div>
        <button
          type="submit"
          style={{
            ...addTodoStyles.button,
            ...(hover ? addTodoStyles.buttonHover : {})
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
