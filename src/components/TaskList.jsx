import React, { useContext } from 'react';
import Card from './shared/Card';
import { TiTickOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import ThemeContext from './context/ThemeContext';

const TaskList = () => {
  const {
    todos,
    toggleTodo,
    deleteTodo,
    editingId,
    editText,
    setEditText,
    startEdit,
    cancelEdit,
    saveEdit
  } = useContext(ThemeContext);

  return (
    <div>
      {todos.map(todo => (
        <Card key={todo.id}>
          <ul className='task-list'>
            <li>
              {editingId === todo.id ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                  />
                  <button onClick={() => saveEdit(todo.id)}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <h3
                    title="Click to toggle complete"
                    onClick={() => toggleTodo(todo.id)}
                    className={`strike-${todo.done ? "yes" : ""}`}
                  >
                    {todo.text}
                  </h3>
                  <div className="icons">
                    <FaRegEdit
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => startEdit(todo.id, todo.text)}
                    />
                    <MdOutlineDelete
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteTodo(todo.id)}
                    />
                  </div>
                </>
              )}
            </li>
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
