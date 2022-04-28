import  {actions} from './ActionTypes'
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'reducer',
    initialState: {
        todoList: []
    },
    reducers: {
        ADD_TODO_ITEM: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        // state.value += 1
        // state.todoList = [ ...state.todoList,
        //     {
        //         id: new Date().valueOf(),
        //         item: action.value,
        //         completed: false
        //     }
        // ] ;
        console.log('ADD_TODO_ITEM :', action)
        return { todoList: 
                            [ ...state.todoList,
                                {
                                    id: new Date().valueOf(),
                                    item: action.payload,
                                    completed: false
                                }
                            ]
                        };
      },
      REMOVE_TODO_ITEM: (state, action) => {
        // state.value -= 1
        const filteredTodoItem = state.todoList.filter(
            (todoItem) => todoItem.id !== action.payload
            );
        state.todoList = filteredTodoItem ;
      },
      TOGGLE_COMPLETED: (state, action) => {
        // state.value += action.payload
        const updatedTodoList = state.todoList.map((todoItem) =>
          todoItem.id === action.payload
            ? { ...todoItem, completed: !todoItem.completed }
            : todoItem
        );
        state.todoList = updatedTodoList;
      },
    },
  })

  export const { ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_COMPLETED } = counterSlice.actions

export default counterSlice.reducer

// const initialState = {
//     todoList: []
// };
  
//  const reducer = (state = initialState, action) => {
//     switch (action.type) {
        
//         case actions.ADD_TODO_ITEM :
//             return { todoList: 
//                 [ ...state.todoList,
//                     {
//                         id: new Date().valueOf(),
//                         item: action.value,
//                         completed: false
//                     }
//                 ]
//             };

//         case actions.REMOVE_TODO_ITEM : 
//         {
//             const filteredTodoItem = state.todoList.filter(
//             (todoItem) => todoItem.id !== action.value
//             );
//             return { todoList: filteredTodoItem };
//         }

//       case actions.TOGGLE_COMPLETED :  
//       {
//         const updatedTodoList = state.todoList.map((todoItem) =>
//           todoItem.id === action.value
//             ? { ...todoItem, completed: !todoItem.completed }
//             : todoItem
//         );
//         return { todoList: updatedTodoList };
//       }

//       default:
//         return state;
//     }
//   };
//   export default reducer;