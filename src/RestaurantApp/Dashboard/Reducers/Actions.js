import {actions} from './ActionTypes'

export const orderdish = (Item) => {
    return {
        type: actions.ORDER_DISH,
        value: Item
    }
}

export const deleteorders = (Item) => {
    return {
        type: actions.DELETE_ORDER,
        value: Item
    }
}
