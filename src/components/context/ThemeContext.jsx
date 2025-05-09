import { useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("Dark");
  const [btnClass, setBtnClass] = useState("btn btn-dark");
  
  const [todos, setTodos] = useState(() => {

    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })


;
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);



  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input, done: false, edit: true }]);
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

 
  let themeChanger = () => {
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
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
