import {createStore} from 'redux';
import IceCreamReducer from './ICECREAM/IceCreamReducer';
import RootReducer from './RootReducer';


const store=createStore(RootReducer);
export default store;

