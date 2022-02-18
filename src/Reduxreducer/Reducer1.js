import  {actions} from './ActionTypes'

const initialState = {
    todoList: []
};
  
 const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actions.ADD_TODO_ITEM :
            return { todoList: 
                [ ...state.todoList,
                    {
                        id: new Date().valueOf(),
                        item: action.value,
                        completed: false
                    }
                ]
            };

        case actions.REMOVE_TODO_ITEM : 
        {
            const filteredTodoItem = state.todoList.filter(
            (todoItem) => todoItem.id !== action.value
            );
            return { todoList: filteredTodoItem };
        }

      case actions.TOGGLE_COMPLETED :  
      {
        const updatedTodoList = state.todoList.map((todoItem) =>
          todoItem.id === action.value
            ? { ...todoItem, completed: !todoItem.completed }
            : todoItem
        );
        return { todoList: updatedTodoList };
      }

      default:
        return state;
    }
  };
  export default reducer;