 import { IS_FETCHING_PRODUCTS,GET_SEARCH_PRODUCTS,SEARCH_FIELD_FORM,GET_PRODUCTS,GET_PRODUCT,IS_FETCHING_PRODUCTS_ERROR, IS_FETCHING_PRODUCT } from "../type";


 const INITIAL_STATE={
     products:[],
     isFetching:false,
     isFetchingSingle:false,
     product:{},
     fetchingError:null,
     search:"",
     searchProducts:[]
 }
export default (state=INITIAL_STATE,action)=>{
switch(action.type){
case IS_FETCHING_PRODUCTS:
    return {...state,isFetching:true};
    case SEARCH_FIELD_FORM:
    return {...state,search:action.payload};
    case IS_FETCHING_PRODUCT:
    return {...state,isFetchingSingle:true};
    case IS_FETCHING_PRODUCTS_ERROR:
    return {...state,isFetching:false,fetchingError:action.payload};
    case GET_PRODUCTS:
    return {...state,isFetching:false,fetchingError:null,products:action.payload};
    case GET_SEARCH_PRODUCTS:
    return {...state,isFetching:false,fetchingError:null,searchProducts:action.payload};
    case GET_PRODUCT:
        return {...state,isFetchingSingle:false,fetchingError:null,product:action.payload};
    default :
    return state;
}
}