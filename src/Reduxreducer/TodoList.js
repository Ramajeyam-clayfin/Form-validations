import React from "react";
import { useSelector, useDispatch  } from 'react-redux';
import * as actionCreators from './Actions';

const TodoList = () => {
    const todoList1 = useSelector( (state) => state.todoList)
    const dispatch = useDispatch();

    return (
      <ol style={{ textAlign: "center", marginLeft:'450px', paddingLeft: '5px', width:'fit-content' }}>
        {todoList1.map((todoItem, index) => (
            <li  className={`todoItem ${todoItem.completed ? "completed" : "none"}`} key={index}  style={{ margin: '2px', }}>
                <input 
                    style={{float:'left'}}
                    type='checkbox'
                    key={todoItem.id}
                    onClick={() => dispatch(actionCreators.completed(todoItem.id))}
                />

                {todoItem.item}
                <button
                    className="delete"
                    onClick={() => dispatch(actionCreators.removeitem(todoItem.id))}
                    style={{float:'end'}}
                >
                    X
                </button>
            </li>
        ))}
      </ol>
    );
  };

export default TodoList;
