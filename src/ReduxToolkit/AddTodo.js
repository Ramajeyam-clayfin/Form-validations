import React, { useState} from "react";
import { useDispatch } from 'react-redux';
import * as actionCreators from './Actions';

export const AddTodo = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          placeholder={"Type and add todo item"}
          onChange={(e) => setInputValue(e.target.value)}
        /> 
        <button onClick={() => { dispatch(actionCreators.additem(inputValue)); setInputValue(""); }}>
          Add
        </button>
      </>
    );
  };

export default AddTodo;