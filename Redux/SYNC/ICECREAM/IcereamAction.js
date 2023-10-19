import { BUY_ICECREAM } from "./ActionNames"

export const buyIceCream=(number)=>{
    return{
        type:BUY_ICECREAM,
        payload:number
    }
}