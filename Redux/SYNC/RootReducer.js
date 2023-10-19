import { combineReducers } from "redux";
import cakeReducer from "./CAKE/CakeReducer";
import IceCreamReducer from "./ICECREAM/IceCreamReducer";

const rootReducer=combineReducers({
    cakeState:cakeReducer,
    iceCreamState:IceCreamReducer
})

export default rootReducer;