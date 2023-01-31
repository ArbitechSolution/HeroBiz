import React from 'react'
import './navbar.css'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <h1 className='brandname'>HeroBiz<span className='brandnamedot'>.</span></h1>
      
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown homedpDown">
          <a class="nav-link " href="#" data-bs-toggle='dropdown'  role='button' id='dropdownMenuLink'>Home 
          <span><i class="bi bi-chevron-down"></i></span>
          </a>
          <ul className='dropdown-menu ' aria-labelledby='dropdownMenuLink'>
            <li><a href="" className='dropdown-item'>Home 1- index.html</a></li>
            <li><a href="" className='dropdown-item'>Home 2- index-2.html</a></li>
            <li><a href="" className='dropdown-item'>Home 3- index-3.html</a></li>
            <li><a href="" className='dropdown-item'>Home 4- index-4.html</a></li>
          </ul>
          
          
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mega Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">DropDown</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
        
      </ul>
      </div>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar