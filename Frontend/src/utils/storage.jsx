// utils/storage.js
// Centralised localStorage helpers so App.js stays clean.

export const getTodos = () => {
  const raw = localStorage.getItem("todos");
  return raw ? JSON.parse(raw) : [];
};

export const getAllTodos = () => {
  const raw = localStorage.getItem("allTodos");
  return raw ? JSON.parse(raw) : [];
};

export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const saveAllTodos = (allTodos) => {
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
};