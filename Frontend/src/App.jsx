import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import Todos from "./myComponents/Todos";
import AddTodo from "./myComponents/Addtodo";
import History from "./myComponents/History";
import AuthForm from "./myComponents/AuthForm";
import { getTodos, getAllTodos, saveTodos, saveAllTodos } from "./utils/storage";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: getTodos(),
      allTodos: getAllTodos(),
      searchText: "",
    };
  }

  onDelete = (todo) => {
    const newTodos = this.state.todos.filter((t) => t !== todo);
    this.setState({ todos: newTodos });
    saveTodos(newTodos);
  };

  onDeleteHistory = (todo) => {
    const newAllTodos = this.state.allTodos.filter((t) => t !== todo);
    this.setState({ allTodos: newAllTodos });
    saveAllTodos(newAllTodos);
  };

  onEdit = (todo, newTitle, newDesc) => {
    const updatedTodos = this.state.todos.map((t) =>
      t === todo ? { ...t, title: newTitle, desc: newDesc } : t
    );
    const updatedAllTodos = this.state.allTodos.map((t) =>
      t === todo ? { ...t, title: newTitle, desc: newDesc } : t
    );
    this.setState({ todos: updatedTodos, allTodos: updatedAllTodos });
    saveTodos(updatedTodos);
    saveAllTodos(updatedAllTodos);
  };

  AddTodo = (title, desc) => {
    const lastSno =
      this.state.allTodos.length > 0
        ? this.state.allTodos[this.state.allTodos.length - 1].sno
        : 0;
    const sno = lastSno + 1;
    const newTodo = { sno, title, desc };

    const updatedTodos = [...this.state.todos, newTodo];
    const updatedAllTodos = [...this.state.allTodos, newTodo];

    this.setState({ todos: updatedTodos, allTodos: updatedAllTodos });
    saveTodos(updatedTodos);
    saveAllTodos(updatedAllTodos);
  };

  handleSearch = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    const filteredTodos = this.state.todos.filter((todo) =>
      todo.title.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    );

    // Reusable layout wrapper — wraps any page with Header + Footer
    const WithLayout = ({ children }) => (
      <div className="app-root">
        <Header searchBar={true} onSearch={this.handleSearch} />
        {children}
        <Footer />
      </div>
    );

    return (
      <Routes>

        {/* Login — no Header or Footer */}
        

        {/* Home */}
        <Route path="/"
          element={
            <WithLayout>
              <AddTodo AddTodo={this.AddTodo} />
              <Todos
                todos={filteredTodos}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
              />
            </WithLayout>
          }
        />

        {/* History */}
        <Route
          path="/history"
          element={
            <WithLayout>
              <History
                todos={this.state.allTodos}
                onDelete={this.onDeleteHistory}
              />
            </WithLayout>
          }
        />

      </Routes>
    );
  }
}

export default App;