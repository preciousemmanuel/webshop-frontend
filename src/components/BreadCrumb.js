import React from "react";
import { Link } from "react-router-dom";


const BreadCrumb=({title})=>(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
        <li class="breadcrumb-item active"><a href="#">{title}</a></li>
        
      </ol>
    </nav>
  </div>
</nav>
)

export default BreadCrumb;