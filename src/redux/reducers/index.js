import { combineReducers } from "redux";
import product from "./product_reducer"; 
import cart from "./cart_reducer"; 
import checkout from "./checkout_reducer"; 


export default combineReducers({
    product,
    cart,
    checkout
})