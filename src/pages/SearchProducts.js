import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { getSearchProducts } from "../redux/actions/product_action";



const SearchProducts=()=>{
    let params=useParams();
    const {searchProducts,isFetching,fetchingError}=useSelector((state)=>state.product);
    console.log("dsda",searchProducts)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getSearchProducts(params.search))
    },[dispatch])

    
    return(
        <div className="col-md-10 offset-md-1 my-10" style={{marginTop:10}}>
<BreadCrumb title="Search Products" />
<div className="alert alert-primary">You search for {params.search &&params.search}</div>
{isFetching && (
<center>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</center>)}

<div className="row">
    {searchProducts && searchProducts<1 && (
        <center ><h4>No product found for this search</h4></center>
    )}
{searchProducts && searchProducts.length>0 && searchProducts.map(product=>(
  <ProductCard product={product} />
))}
</div>
{/* <Carousel /> */}
        </div>
        
    )
}

export default SearchProducts;