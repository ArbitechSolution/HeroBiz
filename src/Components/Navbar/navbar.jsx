import React from 'react'
import './navbar.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import heroCarouselImg from '../../assets/hero-carousel/hero-carousel-3.svg'

const Navbar = () => {
  return (
    <>
<section className='navBar    ' id='navBar'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light  ">
  <div class="container   ">
    <a class="navbar-brand" href="#">
      <h1 className='brandname'>HeroBiz<span className='brandnamedot'>.</span></h1>
      
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
      {/* <li className="nav-item dropdown">
          <a className="nav-link active "  data-bs-toggle='dropdown'   id='dropdownMenuLink'   aria-expanded="false">Home 
          <span><i className="bi bi-chevron-down data-bs-toggle"></i></span>
          </a>
          <ul className='dropdown-menu ' aria-labelledby='dropdownMenuLink'>
            <li><a href="#" className='dropdown-item active'>Home 1- index.html</a></li>
            <li><a href="#" className='dropdown-item'>Home 2- index-2.html</a></li>
            <li><a href="#" className='dropdown-item'>Home 3- index-3.html</a></li>
            <li><a href="#" className='dropdown-item'>Home 4- index-4.html</a></li>
          </ul>
          
          
        </li> */}
        
        <li class="nav-item">
          <a class="nav-link" href="#aboutUs">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
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
</section>
<section className='hero-animated bg-light p-0 m-0' id='hero-animated'  data-aos="zoom-out" data-aos-duration="3000">
  <div className="container" >
    <div className="row m-0  " >
      <div className="col text-center" >
        <img src={heroCarouselImg} alt="" className='img-fluid animated '  />
        <div className="col pt-5">
        <h2>Welcome to <span style={{color:"#0EA2BD"}}>HeroBiz</span></h2>
        <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
        <div className="col d-flex justify-content-center align-items-center">
        <a className='btn-get-started'>Get Started</a>
        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className='btn-watch-video'><i class="bi bi-play-circle ms-lg-5 ms-md-4 ms-sm-3"></i>
        <span className='watch-video '>Watch Video</span></a>
        </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section className='featured-services bg-light' id='featured-services' >
  <div className="container" >
    <div className="row py-5">
      <div className="col-lg-3 col-md-6">
        <div className="service-item " >
          <div className="icon">
          <i class="bi bi-activity"></i>
          </div>
          <h4>Lorem Ipsum </h4>
          <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="service-item">
          <div className="icon">
          <i class="bi bi-bounding-box-circles"></i>
          </div>
          <h4>Sed ut perspici </h4>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="service-item">
          <div className="icon">
          <i class="bi bi-calendar4-week icon"></i>
          </div>
          <h4>Magni Dolores</h4>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 ">
        <div className="service-item position-relative">
          <div className="icon">
          <i class="bi bi-broadcast"></i>
          </div>
          <h4>Nemo Enim </h4>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Navbar