import React, {useContext} from "react";
import {TodoListContext } from './Context';

export const AddTodo = () => {
    const [inputValue, setInputValue] = React.useState("");
    const { addTodoItem } = useContext(TodoListContext);
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          placeholder={"Type and add todo item"}
          onChange={(e) => setInputValue(e.target.value)}
        /> 
        <button onClick={() => { addTodoItem(inputValue); setInputValue(""); }}>
          Add
        </button>
      </>
    );
  };