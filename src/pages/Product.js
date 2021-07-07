import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import CartSummary from "../components/CartSummary";
import CurrencyFormat from "react-currency-format";
import { useSelector ,useDispatch} from "react-redux";
import { getProduct } from "../redux/actions/product_action";
import { toast } from 'react-toastify';
import { Link,useHistory ,useParams} from 'react-router-dom';
import { addToCart } from "../redux/actions/cart_action";

const Product=()=>{
  const history=useHistory();
  const {productid}=useParams();
    const {product,isFetchingSingle}=useSelector((state)=>state.product);
console.log(product);
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getProduct(productid))
},[dispatch])

const handleAddToCart=()=>{
    dispatch(addToCart(product))
    console.log("dsdsds")
    toast.success("Product added to cart",{position:"top-center"});

}

    return(
        <div className="col-md-10 offset-md-1 my-10" style={{marginTop:10}}>
         
         {isFetchingSingle && (
<center>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</center>)}
<BreadCrumb title={product.name} />

<div className="row" style={{marginTop:10}}>
<div className="well col-md-8" >
<div style={{width: 500,
    minHeight: 200,
    maxHeight: "auto",
    float: "left",
    margin: 3,
    padding: 3}}>
    <center>
    <img
    style={{maxHeight:"100%",height:"auto"}}
      src={`${process.env.REACT_APP_SERVER_URI}/uploads/${product.main_image}`}
      className="img-fluid"
    />
    </center>
    
    </div>
    <div style={{width:"200px"}}>
    <div
  id="carouselBasicExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

    
    <div class="carousel-item">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

 
    <div class="carousel-item">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
 
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>

   </div>
<div className="well col-md-4" >
    <p>{product.description}</p>
    <p className="card-text"><CurrencyFormat value={product.price}  displayType={'text'} thousandSeparator={true} prefix={'₦'} /></p>
    <button onClick={()=>handleAddToCart()} className="btn btn-primary">Add to cart</button>
    
</div>
</div>

        </div>
    )
}

export default Product;