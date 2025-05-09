import React, { useContext } from 'react'
import Card from './shared/Card'
import { TiTickOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import ThemeContext from './context/ThemeContext';



const TaskList = () => {
  const {todos , toggleTodo , deleteTodo, edit} = useContext(ThemeContext)
  const strike = {
    textDecoration: "line-through 2px gray",
    color: "gray"


  }

  return (
    
    <div>
       {todos.map(todo => (
        <Card key={todo.id}>
          <ul className='task-list'>
          
             <li >
             <h3  onClick={() => toggleTodo(todo.id)}
              className= {`strike-${todo.done ? "yes" : ""}`} >
             {todo.text}
             </h3>
             <div>
             
             <MdOutlineDelete style={{
              cursor: "pointer"
             }}  onClick={() => deleteTodo(todo.id)}/>
             </div>
           </li>
           
          </ul>
        </Card>
        )
           
      )}
    </div>
  )
}

export default TaskList