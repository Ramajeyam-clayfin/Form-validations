import  {actions} from './ActionTypes'
import {initial} from './Initial'

const initialState = {
    dishes: [...initial],
    orders: [],
};
  
 const ordersreducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actions.ORDER_DISH :
            {
                const updateUsers = [
                    ...state.orders,
                    {
                    dishId: action.value.dishId,
                    dishName: action.value.dishName,
                    dishImg: action.value.dishImg,
                    dishPrice: action.value.dishPrice,
                    status: action.value.status,
                    no: action.value.no,
                    }
                ];
                return {  ...state, orders:  updateUsers };
            }
            
        case actions.DELETE_ORDER :
            {
                const delitems = state.orders.filter( (Item) => Item.dishId !== action.value );
                return { ...state, orders: delitems };
            }
        
        default:
            return state;
    }
  };
  export default ordersreducer;


