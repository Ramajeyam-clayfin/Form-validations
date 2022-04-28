import {actions} from './ActionTypes'
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_COMPLETED } from './Reducer1'

export const additem = (todoItem) => {
    // return {
    //     type: actions.ADD_TODO_ITEM,
    //     value: todoItem
    // }
   return ADD_TODO_ITEM(todoItem)
}

export const removeitem = (todoItemId) => {
    // return {
    //     type: actions.REMOVE_TODO_ITEM,
    //     value: todoItemId
    // }
    return REMOVE_TODO_ITEM(todoItemId)
}

export const completed = (todoItemId) => {
    // return {
    //     type: actions.TOGGLE_COMPLETED,
    //     value: todoItemId
    // }
    return TOGGLE_COMPLETED(todoItemId)
}