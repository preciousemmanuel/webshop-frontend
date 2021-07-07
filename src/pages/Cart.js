import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import CartCard from "../components/CartCard";
import Carousel from "../components/Carousel";
import { useSelector ,useDispatch} from "react-redux";
import { getProducts } from "../redux/actions/product_action";
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

const Cart=()=>{
    const {cart}=useSelector((state)=>state.cart);
    console.log("dsda",cart)
    const dispatch=useDispatch();
    
    
    return(
        <div className="col-md-10 offset-md-1 my-10" style={{marginTop:10}}>
<BreadCrumb title="My Cart" />

<div className="row">
{cart && cart<1 &&(
    <div className="alert alert-danger">No item in cart</div>
)}
{cart && cart.length>0 &&( 
    <div>
    <table className="table">
    <thead>
    <tr>
    <th scope="col">Image</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
  {cart.map((item,index)=>(
    <CartCard index={index} item={item} />  
  ))}

  </tbody>
    </table>
<Link to="/" className="btn btn-primary"><i className="fas fa-arrow-left"></i> Continue Shopping</Link>

<Link to="/deliveryinfo" className="btn btn-success float-end"> Checkout</Link>
    </div>

  
)}
</div>
{/* <Carousel /> */}
        </div>
        
    )
}

export default Cart;