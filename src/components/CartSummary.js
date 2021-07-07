import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector ,useDispatch} from "react-redux";

import { toast } from 'react-toastify';


const CartSummary=({item,index})=>{


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
     {item.price}
        </td>
        <td>
        {item.quantity}
        </td>
        <td>
        
        <CurrencyFormat value={item.quantity * item.price}  displayType={'text'} thousandSeparator={true} prefix={'₦'} />
        </td>

       

</tr>
    )
}

export default CartSummary;