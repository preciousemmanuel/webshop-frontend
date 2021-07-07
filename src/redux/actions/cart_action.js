import axios from "axios"
import { ADD_TO_CART,INCREASE_CART_QTY,DECREASE_CART_QTY,REMOVE_CART} from "../type";

export const addToCart=(product)=>{
    return {type:ADD_TO_CART,payload:product}
        
}

export const increaseQty=(product)=>{
    return {type:INCREASE_CART_QTY,payload:product}
        
}
export const decreaseQty=(product)=>{
    return {type:DECREASE_CART_QTY,payload:product}     
}
export const removeCart=(product)=>{
    return {type:REMOVE_CART,payload:product}     
}