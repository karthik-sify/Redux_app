import { BUY_ICECREAM } from "./ActionNames"

const initialState={
    noOfIceCream:10
}

const IceCreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            noOfIceCream:state.noOfIceCream - action.payload
        }
        default :return state
        
    }
}

export default IceCreamReducer