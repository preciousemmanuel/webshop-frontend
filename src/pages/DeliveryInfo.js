import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import CartSummary from "../components/CartSummary";
import CurrencyFormat from "react-currency-format";
import { useSelector ,useDispatch} from "react-redux";
import { changDevFormField,submitOrder } from "../redux/actions/checkout_action";
import ReactLoading from 'react-loading';
import { Link,useHistory ,Redirect} from 'react-router-dom';

const DeliveryInfo=()=>{
  const history=useHistory();
    const {cart}=useSelector((state)=>state.cart);
    const {first_name,last_name,email,phone,address,note,isSubmitting}=useSelector((state)=>state.checkout);

    console.log("dsda",address)
    const dispatch=useDispatch();
    
    const handleSubmit=(e)=>{
      e.preventDefault()
     dispatch(submitOrder(cart,{first_name,last_name,email,phone,address,note},()=>{
        console.log("success");
        history.push("/successorder");
      }))
    }
    
if ( cart.length<1) {
  return <Redirect to="/"/>
}

    return(
        <div className="col-md-10 offset-md-1 my-10" style={{marginTop:10}}>
          <ReactLoading type="balls" />
<BreadCrumb title="Delivery Information" />
<div className="row"  style={{marginTop:10}}>
 <div className="col-md-8 ">
<div className="card">
<div className='card-body'>
<h5 class="card-title">Delivey Information</h5>
<form onSubmit={handleSubmit}>
<div>
<div className="row">
<div className="col-md-6">
<div className="form-outline" >
  <input type="text" id="fullnameid" value={first_name} onChange={e =>dispatch(changDevFormField({prop: 'first_name', value: e.target.value}))} name="first_name" style={{border:"1px solid #ddd"}} className="form-control form-control-lg" />
  <label className="form-label" for="fullnameid">Enter First Name</label>
</div>
</div>
<div className="col-md-6">
<div className="form-outline" >
  <input type="text" id="fulllast" value={last_name} onChange={e =>dispatch(changDevFormField({prop: 'last_name', value: e.target.value}))} name="last_name" style={{border:"1px solid #ddd"}} className="form-control form-control-lg" />
  <label className="form-label" for="fulllast">Enter Last Name</label>
</div>
</div>
</div>
<br/>
<div className="row">
<div className="col-md-6">
<div className="form-outline" >
  <input type="email" id="formControlLg" value={email} onChange={e =>dispatch(changDevFormField({prop: 'email', value: e.target.value}))} name="email" style={{border:"1px solid #ddd"}} className="form-control form-control-lg" />
  <label className="form-label" for="formControlLg">Enter Email</label>
</div>
</div>

<div className="col-md-6">
<div className="form-outline" >
  <input type="tel" id="phoneid" value={phone} onChange={e =>dispatch(changDevFormField({prop: 'phone', value: e.target.value}))} name="phone" style={{border:"1px solid #ddd"}} className="form-control form-control-lg" />
  <label className="form-label" for="phoneid">Enter Phone Number</label>
</div>
</div>
</div>
<br/>
<div className="form-outline" >
  <input type="text" name="address" value={address} id="formControlLg" onChange={e =>dispatch(changDevFormField({prop: 'address', value: e.target.value}))} style={{border:"1px solid #ddd"}} className="form-control form-control-lg" />
  <label className="form-label" for="formControlLg">Address</label>
</div>
<br/>
<div className="form-outline" >
  <textarea type="text" id="noteid" value={note} name="note" onChange={e =>dispatch(changDevFormField({prop: 'note', value: e.target.value}))} style={{border:"1px solid #ddd"}} className="form-control form-control-lg" />
  <label className="form-label" for="noteid">Note</label>
</div>

</div>
<br/>
{isSubmitting?(
  <center>
  <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Submitting...</span>
</div>
</center>
):<button type="submit" disabled={isSubmitting|| !email || !phone || !first_name || !last_name} className="btn btn-success">Proceed to complete Payment</button>}
</form>
</div>
        </div>
        </div>

        <div className="col-md-4">
        <div className="card">
            <div className="card-body" >
<h5><Link to="/cart"><i className="fa fa-arrow-back"></i>Edit Cart</Link></h5>
{cart && cart.length>0 &&( 
    <div>
    <div style={{overflow:"auto"}}>
    <table className="table table-responsive">
    <thead>
    <tr>
    <th scope="col">Image</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      

    </tr>
  </thead>
  <tbody>
  {cart.map((item,index)=>(
    <CartSummary index={index} item={item} />  
  ))}

  </tbody>
    </table>

    </div>
    <div className="alert alert-primary">
    <span>Total Amount:
    <CurrencyFormat value={cart.map(item => item.price*item.quantity).reduce((prev, next) => prev + next)}  displayType={'text'} thousandSeparator={true} prefix={'₦'} />
    </span>
    </div>
</div>
  
)}
            </div>
        </div>


        </div>
        </div>

       

        </div>
    )
}

export default DeliveryInfo;