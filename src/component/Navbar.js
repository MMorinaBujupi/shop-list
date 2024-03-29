import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand fw-blod fs-4" href="#">YOUR SHOP</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to= "/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/products">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to = "/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="buttons-login">
    <NavLink to="/login" className="btn btn-outline-dark ms-2">
        <i className="fa fa-sign-in me-1"></i>Login</NavLink>
      </div>
     < div className="buttons-login">
    <NavLink to= "register" className="btn btn-outline-dark ms-2">
        <i className="fa fa-user-plus me-1"></i>Register</NavLink>
      </div>
    </div>
  </div>
</nav>

    );
}
export default Navbar