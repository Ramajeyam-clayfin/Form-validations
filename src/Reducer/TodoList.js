import React from "react";
import {TodoListContext } from './Context';

export const TodoList = () => {
    const { todoList, removeTodoItem, markAsCompleted } = React.useContext(TodoListContext );
    return (
      <ol style={{ textAlign: "center", marginLeft:'450px', paddingLeft: '5px', width:'fit-content' }}>
        {todoList.map((todoItem, index) => (
            <li  className={`todoItem ${todoItem.completed ? "completed" : "none"}`} key={index}  style={{ margin: '2px', }}>
                <input 
                    style={{float:'left'}}
                    type='checkbox'
                    key={todoItem.id}
                    onClick={(e) => markAsCompleted(todoItem.id,e)}
                />

                {todoItem.item}
                <button
                    className="delete"
                    onClick={() => removeTodoItem(todoItem.id)}
                    style={{float:'end'}}
                >
                    X
                </button>
            </li>
        ))}
      </ol>
    );
  };