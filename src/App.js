import { Component } from "react";
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import Todos from "./myComponents/Todos";
import AddTodo from "./myComponents/Addtodo";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// 🔥 Inline style objects
const finalStyle = {
  background: "linear-gradient(135deg, #000000, #b31217, #e52d27, #000000)"
};


const appStyles = {
  main: {
    minHeight: "100vh",
    // background: "linear-gradient(135deg, #000000, #b31217, #e52d27, #000000)",
    color: "white",
    // padding: "20px",
    fontFamily: "Arial, sans-serif"
  }
};

const todoStyles = {
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    border: "1px solid #e52d27",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px 0",
    color: "white",
    boxShadow: "0 0 15px rgba(255,69,0,0.6)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer"
  },
  containerHover: {
    transform: "scale(1.05)"
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "orange"
  },
  desc: {
    fontSize: "14px",
    color: "lightgray"
  }
};

const History = () => <h2 style={{ color: "white" }}>History Page</h2>;
const Reminders = () => <h2 style={{ color: "white" }}>Reminders Page</h2>;

class App extends Component {
  constructor() {
    super();
    let initTodo;
    if (localStorage.getItem("todos") === null) {
      initTodo = [];
    } else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    this.state = {
      todos: initTodo,
      searchText: ""
    };
  }

  onDelete = (todo) => {
    const newTodos = this.state.todos.filter((t) => t !== todo);
    this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  AddTodo = (title, desc) => {
    let sno;
    if (this.state.todos.length === 0) {
      sno = 1;
    } else {
      sno = this.state.todos[this.state.todos.length - 1].sno + 1;
    }

    const newTodo = { sno, title, desc };
    const updatedTodos = [...this.state.todos, newTodo];
    this.setState({ todos: updatedTodos });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  handleSearch = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    const filteredTodos = this.state.todos.filter(todo =>
      todo.title.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    );

    return (
      <div className="hello" style={finalStyle}>
      <div className="main" style={appStyles.main}>
        <Header searchBar={true} onSearch={this.handleSearch} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo AddTodo={this.AddTodo} />
                {/* Pass todoStyles down to Todos for styling */}
                <Todos todos={filteredTodos} onDelete={this.onDelete} todoStyles={todoStyles} />
              </>
            }
          />
          <Route path="/history" element={<History />} />
          <Route path="/reminders" element={<Reminders />} />
        </Routes>

        
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
