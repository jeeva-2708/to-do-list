import { useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("Dark");
  const [btnClass, setBtnClass] = useState("btn btn-dark");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const saveEdit = (id) => {
    if (editText.trim() === '') return;
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editText } : todo
    ));
    setEditingId(null);
    setEditText('');
  };

  const themeChanger = () => {
    document.body.style.backgroundColor = themeName === "Dark" ? "#000000" : "#FFFFFF";
    setThemeName(themeName === "Dark" ? "Light" : "Dark");
    setBtnClass(btnClass === "btn btn-dark" ? "btn btn-light" : "btn btn-dark");
  };

  return (
    <ThemeContext.Provider value={{
      todos,
      themeName,
      btnClass,
      input,
      setInput,
      addTodo,
      themeChanger,
      toggleTodo,
      deleteTodo,
      editingId,
      editText,
      setEditText,
      startEdit,
      cancelEdit,
      saveEdit
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
