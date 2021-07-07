import axios from "axios"
import { CHANGE_DEV_FORM_FIELD, IS_SUBMITING_ORDER ,IS_SUBMITTING_ERROR,ORDER_SUCCESS,CLEAR_CART} from "../type";


export const changDevFormField=({prop,value})=>{
    console.log("prop",value)
    return{
      type:CHANGE_DEV_FORM_FIELD,
      payload:{prop,value}
    }
  }

export const submitOrder=(order,{first_name,last_name,email,phone,address,note},callback)=>{
    console.log("one")
    return async dispatch=>{
        console.log("two")
        dispatch({
            type:IS_SUBMITING_ORDER, 
        })
        try {
            console.log("sdsd")
            
            const {data} = await axios.post(`${process.env.REACT_APP_SERVER_URI}/order`,{
                cart:order,
               first_name,
               last_name,
               email,
               phone,
               address,
               note
            }); 

        console.log("orusds",data);
        dispatch({
            type:ORDER_SUCCESS,
            
        })
        dispatch({
            type:CLEAR_CART,
            
        })

        callback()
    
        } catch (error) {
            console.log("error",error);
            dispatch({
                type:IS_SUBMITTING_ERROR,
                payload:"Oops!! Could not create order"
            })
        }
      }
}