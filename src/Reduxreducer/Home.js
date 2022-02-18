import React from "react";
import  AddTodo  from "./AddTodo";
import  TodoList  from "./TodoList";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer1';
import './style.css'

const store = createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); 

export default function Home() {
    return (
        <>
            <Provider store={store}>
                <AddTodo />
                <TodoList />
            </Provider>
            
        </>
    );
  }
  






