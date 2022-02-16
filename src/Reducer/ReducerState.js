export const initialState = {
    todoList: []
};
  
export  const actions = {
    ADD_TODO_ITEM: "ADD_TODO_ITEM",
    REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
    TOGGLE_COMPLETED: "TOGGLE_COMPLETED"
};
  
export  const reducer = (state, action) => {
    switch (action.type) {

      case "ADD_TODO_ITEM":
        return { todoList: [ ...state.todoList,
            {
              id: new Date().valueOf(),
              item: action.todoItemLabel,
              completed: false
            }
          ]
        };

      case "REMOVE_TODO_ITEM": 
      {
        const filteredTodoItem = state.todoList.filter(
          (todoItem) => todoItem.id !== action.todoItemId
        );
        return { todoList: filteredTodoItem };
      }

      case "TOGGLE_COMPLETED": 
      {
        const updatedTodoList = state.todoList.map((todoItem) =>
          todoItem.id === action.todoItemId
            ? { ...todoItem, completed: !todoItem.completed }
            : todoItem
        );
        return { todoList: updatedTodoList };
      }

      default:
        return state;
    }
  };