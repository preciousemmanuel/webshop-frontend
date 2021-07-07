 import { IS_SUBMITING_ORDER,CHANGE_DEV_FORM_FIELD ,IS_SUBMITTING_ERROR,ORDER_SUCCESS} from "../type";


 const INITIAL_STATE={
    first_name:"",
    last_name:"",
    address:"",
    email:"",
    phone:"",
    note:"",
     isSubmitting:false,
     submitError:null,
     isOrderSuccess:false
 }
export default (state=INITIAL_STATE,action)=>{
switch(action.type){
case IS_SUBMITING_ORDER:
    return {...state,isSubmitting:true,submitError:null};
    case CHANGE_DEV_FORM_FIELD:
    console.log("reoor",action);
      return{
        ...state,
        submitError:"",
        [action.payload.prop]:action.payload.value
      }
      case IS_SUBMITTING_ERROR:

      return{
        ...state,
        isSubmitting:false,
        submitError:action.payload
      }
      case ORDER_SUCCESS:

      return{
        ...state,
        isOrderSuccess:true,
        ...INITIAL_STATE

      }
      
   
    default :
    return state;
}
}