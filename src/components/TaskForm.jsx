import React, { useContext } from "react";
import Card from "./shared/Card";
import ThemeContext from "./context/ThemeContext";


const TaskForm = () => {
  const {addTodo, input, setInput, btnValue} = useContext(ThemeContext)

  return (
    
      <Card>
        <div className="input-grp ">
          <input  type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} placeholder="Enter your task"/>
          <button id="btn" onClick={addTodo}>ADD</button>
        </div>
      </Card>
  
  );
};

export default TaskForm;
