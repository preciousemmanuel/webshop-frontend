 import { ADD_TO_CART,INCREASE_CART_QTY,DECREASE_CART_QTY,REMOVE_CART,CLEAR_CART } from "../type";


 const INITIAL_STATE={
     cart:[
       
     ],
    
 }
export default (state=INITIAL_STATE,action)=>{
switch(action.type){

    case ADD_TO_CART:
    console.log("tesrr",action.payload)
    if(state.cart.some(item=>item.id===action.payload.id) ){
        return {...state}
    }
    return {cart:[{id:action.payload.id,main_image:action.payload.main_image,name:action.payload.name,description:action.payload.description,price:action.payload.price,quantity:1},...state.cart]};
    case INCREASE_CART_QTY:
    const itemIndex=state.cart.findIndex(obj=>obj.id==action.payload.id);

    state.cart[itemIndex].quantity+=1;

    return {...state,cart:[...state.cart]};
    case DECREASE_CART_QTY:
        const itemVIndex=state.cart.findIndex(obj=>obj.id==action.payload.id);
        const quantity=state.cart[itemVIndex].quantity;
        if(quantity>1){
            state.cart[itemVIndex].quantity-=1;
        }
            return {...state,cart:[...state.cart]};
     case REMOVE_CART:
        
    return {...state,cart:state.cart.filter(item=>item.id!=action.payload.id)};
    case CLEAR_CART:
        return {...INITIAL_STATE}
    default :
    return state;
}
}