import { Component } from "react";
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import Todos from "./myComponents/Todos";
import AddTodo from "./myComponents/Addtodo";
import History from "./myComponents/History";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// 🔥 Global background style
const finalStyle = {
  background: "linear-gradient(135deg, #000000, #b31217, #e52d27, #000000)",
  minHeight: "100vh",
  fontFamily: "Monospace",
  color: "white",
};


class App extends Component {
  constructor() {
    super();

    let initTodo;
    let initAllTodos;

    if (localStorage.getItem("todos") === null) {
      initTodo = [];
    } else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    if (localStorage.getItem("allTodos") === null) {
      initAllTodos = [];
    } else {
      initAllTodos = JSON.parse(localStorage.getItem("allTodos"));
    }

    this.state = {
      todos: initTodo,       // current active todos
      allTodos: initAllTodos, // permanent history
      searchText: ""
    };
  }

  onDelete = (todo) => {
    const newTodos = this.state.todos.filter((t) => t !== todo);
    this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    // Notice: we do NOT touch allTodos here
  };

  onDeleteHistory = (todo) => {
  const newAllTodos = this.state.allTodos.filter((t) => t !== todo);
  this.setState({ allTodos: newAllTodos });
  localStorage.setItem("allTodos", JSON.stringify(newAllTodos));
};

  onEdit = (todo, newTitle, newDesc) => {
  const updatedTodos = this.state.todos.map((t) =>
    t === todo ? { ...t, title: newTitle, desc: newDesc } : t
  );
  const updatedAllTodos = this.state.allTodos.map((t) =>
    t === todo ? { ...t, title: newTitle, desc: newDesc } : t
  );

  this.setState({ todos: updatedTodos, allTodos: updatedAllTodos });
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  localStorage.setItem("allTodos", JSON.stringify(updatedAllTodos));
};


  AddTodo = (title, desc) => {
    let sno;
    if (this.state.todos.length === 0 && this.state.allTodos.length === 0) {
      sno = 1;
    } else {
      // Use last sno from allTodos to keep numbering consistent
      const lastSno =
        this.state.allTodos.length > 0
          ? this.state.allTodos[this.state.allTodos.length - 1].sno
          : 0;
      sno = lastSno + 1;
    }

    const newTodo = { sno, title, desc };

    const updatedTodos = [...this.state.todos, newTodo];
    const updatedAllTodos = [...this.state.allTodos, newTodo];

    this.setState({ todos: updatedTodos, allTodos: updatedAllTodos });

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    localStorage.setItem("allTodos", JSON.stringify(updatedAllTodos));
  };

  handleSearch = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    const filteredTodos = this.state.todos.filter((todo) =>
      todo.title.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    );

    return (
      <div style={finalStyle}>
        <Header searchBar={true} onSearch={this.handleSearch} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo AddTodo={this.AddTodo} />
                <Todos todos={filteredTodos} onDelete={this.onDelete} onEdit={this.onEdit} />
              </>
            }
          />
          <Route
            path="/history"
            element={<History todos={this.state.allTodos} onDelete={this.onDeleteHistory} />}
          />

        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;
