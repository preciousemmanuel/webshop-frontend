import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector ,useDispatch} from "react-redux";
import { addToCart } from "../redux/actions/cart_action";
import { toast } from 'react-toastify';
import { Link,useHistory} from 'react-router-dom';

const ProductCard=({product})=>{
const dispatch=useDispatch();
const history=useHistory();
const handleAddToCart=()=>{
    dispatch(addToCart(product))
    console.log("dsdsds")
    toast.success("Product added to cart",{position:"top-center"});

}


    return(
      
        <div className="card col-md-4" style={{marginLeft:7}}>
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
  <div style={{width: "100%",
    minHeight: 100,
    maxHeight: "auto",
    float: "left",
    margin: 3,
    padding: 3}}>
    <center>
      <Link to={`product/${product.id}`}>
    <img
    style={{maxHeight:"100%",height:"auto"}}
      src={`${process.env.REACT_APP_SERVER_URI}/uploads/${product.main_image}`}
      className="img-fluid"
    />
    </Link>
    </center>
    
    </div>
    <Link to={`product/${product.id}`}>
      <div className="mask" ></div>
    </Link>
  </div>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">
     {product.description&& product.description.length>50?product.description.substring(0,50):product.description}

    </p>
    <p className="card-text"><CurrencyFormat value={product.price}  displayType={'text'} thousandSeparator={true} prefix={'₦'} /></p>
    <button onClick={()=>handleAddToCart()} className="btn btn-primary">Add to cart</button>
  </div>
</div>

    )
}

export default ProductCard;