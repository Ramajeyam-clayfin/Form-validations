import React from "react";
import  Stockmanage  from "./StocksManage/Stockmanage";
import Menu from './Dashboard/Menu'
import Orders from './Dashboard/Orders'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import stocksreducer from './StocksManage/Reducers/StockReducer';
import ordersreducer from './Dashboard/Reducers/OrdersReducer';

const combinereducers = combineReducers({
    stocks: stocksreducer,
    orders: ordersreducer
  });


const store = createStore( combinereducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); 

export default function Home() {
    return (
        <>
            <Provider store={store}>
                <Menu />
                <Orders/>
                <Stockmanage/>
            </Provider>
            
        </>
    );
  }
  






