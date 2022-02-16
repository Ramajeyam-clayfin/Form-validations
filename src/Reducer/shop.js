import React from "react";
import { Provider } from './Context';
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import './style.css'

export default function shop() {
    return (
      <Provider>
        <AddTodo />
        <TodoList />
      </Provider>
    );
  }
  






