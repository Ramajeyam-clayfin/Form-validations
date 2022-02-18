import  {actions} from './ActionTypes'

const initialState = {
    stocks: [],
};
  
 const stocksreducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actions.ADD_ITEM :
        return { stocks:  action.value };

        case actions.REMOVE_ITEM : 
        {
            const delitems = state.stocks.filter( (Item) => Item.id !== action.value );
            return { stocks: delitems };
        }

        case actions.ADD_QTY :  
        {
            const addQty = state.stocks.map( (Item) => Item.id === action.value ? { quantity: Item.quantity++, ...Item } : Item  );
            return { stocks: addQty };
        }

        case actions.SUB_QTY :  
        {
            const subQty = state.stocks.map( (Item) => Item.id === action.value ? { quantity: Item.quantity--, ...Item } : Item  );
            return { stocks: subQty };
        }

        default:
            return state;
    }
  };
  export default stocksreducer;