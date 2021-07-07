import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { Link } from 'react-router-dom';

const NavBar=()=>{
 const {cart}=useSelector((state)=>state.cart);
    console.log("cart",cart)
return(
   
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="container-fluid">
    
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
      <Link class="navbar-brand mt-2 mt-lg-0" to="/">
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
          height="15"
          alt=""
          loading="lazy"
        />
      </Link>
      
   <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search Product"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fas fa-search"></i>
      </span>
    </form>
     
    </div>
   
    <div class="d-flex align-items-center">
    
      <Link class="text-reset me-3" to="/cart">
        <i class="fas fa-shopping-cart"></i>
        {cart && cart.length>0 &&(
          <span class="badge rounded-pill badge-notification bg-danger">{cart.length}</span>
        )}
         
      </Link>

    
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
      
      </ul>

     
      <a
        class="dropdown-toggle d-flex align-items-center hidden-arrow"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
          class="rounded-circle"
          height="25"
          alt=""
          loading="lazy"
        />
      </a>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
      </ul>
    </div>
   
  </div>
  
</nav>

)
}

export default NavBar;
