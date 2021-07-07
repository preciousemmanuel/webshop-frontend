import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import { useSelector ,useDispatch} from "react-redux";
import { getProducts } from "../redux/actions/product_action";
import ReactLoading from 'react-loading';


const Home=()=>{
    const {products,isFetching,fetchingError}=useSelector((state)=>state.product);
    console.log("dsda",products)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    
    return(
        <div className="col-md-10 offset-md-1 my-10" style={{marginTop:10}}>
<BreadCrumb title="Products" />
{isFetching && (
<center>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</center>)}
<ReactLoading type="Balls"  height={50} width={50}/>
<div className="row">
{products && products.length>0 && products.map(product=>(
  <ProductCard product={product} />
))}
</div>
{/* <Carousel /> */}
        </div>
        
    )
}

export default Home;