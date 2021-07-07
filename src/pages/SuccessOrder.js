import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import CartSummary from "../components/CartSummary";
import CurrencyFormat from "react-currency-format";
import { useSelector ,useDispatch} from "react-redux";
import { changDevFormField,submitOrder } from "../redux/actions/checkout_action";
import ReactLoading from 'react-loading';
import { Link,useHistory ,Redirect} from 'react-router-dom';
import successIcon from "../images/checked.png";

const SuccessOrder=()=>{
  const history=useHistory();
    const {cart}=useSelector((state)=>state.cart);
    const {isOrderSuccess}=useSelector((state)=>state.checkout);
console.log("sdsd",isOrderSuccess)
// if ( cart.length<1) {
//   return <Redirect to="/"/>
// }

    return(
        <div className="col-md-10 offset-md-1 my-10" style={{marginTop:10}}>
         
<BreadCrumb title="Success Order" />
<div className="well col-md-8 offset-md-2 my-10" style={{marginTop:10}}>
    <center>
<img className="rounded-circle header-profile-user" style={{width:170,height:170}} src={successIcon} />
<h4>Your Order is recieved! Our Agent will call you immediately. Thanks.</h4>
<Link className="btn btn-info" to="/">Continue</Link>
</center>
</div>

        </div>
    )
}

export default SuccessOrder;