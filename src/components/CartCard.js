import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector ,useDispatch} from "react-redux";
import { increaseQty,decreaseQty,removeCart } from "../redux/actions/cart_action";
import { toast } from 'react-toastify';


const CartCard=({item,index})=>{
const dispatch=useDispatch();

const handleReduceQty=()=>{
  dispatch(decreaseQty(item))
}
const handleRemoveCart=()=>{
  dispatch(removeCart(item))
}
const handleIncreaseQty=()=>{
    dispatch(increaseQty(item))
    console.log("dsdsds")
   // toast.success("item added to cart");

}


    return(
        
        <tr>
        <td>
<div style={{width: 50,
    minHeight: 20,
    maxHeight: "auto",
    float: "left",
    margin: 3,
    padding: 3}}>
    <center>
    <img
    style={{maxHeight:"100%",height:"auto"}}
      src={`${process.env.REACT_APP_SERVER_URI}/uploads/${item.main_image}`}
      className="img-fluid"
    />
    </center>
    
    </div>
        </td>
        <td>
    {item.name}
        </td>
        <td>
    {item.quantity} X {item.price}
        </td>
        <td>
        <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" onClick={()=>handleReduceQty()} class="btn btn-danger">-</button>
  <button type="button" disabled class="btn btn-deafult">{item.quantity}</button>
  <button type="button" onClick={()=>handleIncreaseQty()} class="btn btn-success">+</button>
</div>
    
        </td>
        <td>
        
        <CurrencyFormat value={item.quantity * item.price}  displayType={'text'} thousandSeparator={true} prefix={'₦'} />
        </td>

        <td>
        <button className="btn btn-default btn-sm" onClick={()=>handleRemoveCart()}> <i class="fas fa-trash text-danger"></i></button>
        </td>

</tr>
    )
}

export default CartCard;