import axios from "axios"
import { GET_PRODUCTS,GET_SEARCH_PRODUCTS,SEARCH_FIELD_FORM, IS_FETCHING_PRODUCTS ,IS_FETCHING_PRODUCTS_ERROR,GET_PRODUCT,IS_FETCHING_PRODUCT,IS_FETCHING_PRODUCT_ERROR} from "../type";

export const getProducts=()=>{
    

    return async dispatch=>{
        dispatch({
            type:IS_FETCHING_PRODUCTS, 
        })
        try {
            
            const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URI}/stock`);

        console.log(data);
        dispatch({
            type:GET_PRODUCTS,
            payload:data
        })
    
        } catch (error) {
            console.log("error",error);
            dispatch({
                type:IS_FETCHING_PRODUCTS_ERROR,
                payload:"Oops!! Could not fetch Products"
            })
        }
      }
}

export const searchField=(field)=>{
    return {type:SEARCH_FIELD_FORM,payload:field}
}

export const getSearchProducts=(search)=>{
    return async dispatch=>{
        dispatch({
            type:IS_FETCHING_PRODUCTS, 
        })
        try {
            
            const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URI}/stock/search?search=${search}`);

        console.log("seardd",data[0]);
        dispatch({
            type:GET_SEARCH_PRODUCTS,
            payload:data[0]
        })
    
        } catch (error) {
            console.log("error",error);
            dispatch({
                type:IS_FETCHING_PRODUCTS_ERROR,
                payload:"Oops!! Could not fetch Products"
            })
        }
      }
}

export const getProduct=(productid)=>{
    

    return async dispatch=>{
        dispatch({
            type:IS_FETCHING_PRODUCT, 
        })
        try {
            
            const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URI}/stocks/${productid}`);

        console.log(data);
        dispatch({
            type:GET_PRODUCT,
            payload:data
        })
    
        } catch (error) {
            console.log("error",error);
            dispatch({
                type:IS_FETCHING_PRODUCT_ERROR,
                payload:"Oops!! Could not fetch Product"
            })
        }
      }
}