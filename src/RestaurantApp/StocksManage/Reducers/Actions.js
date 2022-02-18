import {actions} from './ActionTypes'

export const additem = (Item) => {
    return {
        type: actions.ADD_ITEM,
        value: Item
    }
}

export const addqty = (ItemId) => {
    return {
        type: actions.ADD_QTY,
        value: ItemId
    }
}

export const subqty = (ItemId) => {
    return {
        type: actions.SUB_QTY,
        value: ItemId
    }
}


export const removeitem = (ItemId) => {
    return {
        type: actions.REMOVE_ITEM,
        value: ItemId
    }
}

