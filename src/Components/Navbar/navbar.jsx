import React from 'react'
import './navbar.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import heroCarouselImg from '../../assets/hero-carousel/hero-carousel-3.svg'

const Navbar = () => {
  return (
    <>
<section className='navBar' id='navBar'>
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
      <li class="nav-item dropdown ">
          <a class="nav-link active  " href="#" data-bs-toggle='dropdown '  role='button' id='dropdownMenuLink'>Home 
          <span><i class="bi bi-chevron-down"></i></span>
          </a>
          <ul className='dropdown-menu ' aria-labelledby='dropdownMenuLink'>
            <li><a href="" className='dropdown-item active'>Home 1- index.html</a></li>
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
</section>
<section className='hero-animated' id='hero-animated'>
  <div className="container">
    <div className="row ">
      <div className="col text-center">
        <img src={heroCarouselImg} alt="" className='img-fluid animated ' />
        <div className="col">
        <h2>Welcome to <span style={{color:"#0EA2BD"}}>HeroBiz</span></h2>
        <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
        <div className="col d-flex justify-content-center align-items-center">
        <a className='btn-get-started'>Get Started</a>
        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className='btn-watch-video'><i class="bi bi-play-circle"></i>
        <span className='watch-video '>Watch Video</span></a>
        </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section className='featured-services' id='featured-services'>
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="service-item">
          <div className="icon">
          <i class="bi bi-activity"></i>
          </div>
          <h4>Lorem Ipsum </h4>
          <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="service-item">
          <div className="icon">
          <i class="bi bi-bounding-box-circles"></i>
          </div>
          <h4>Sed ut perspici </h4>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="service-item">
          <div className="icon">
          <i class="bi bi-calendar4-week icon"></i>
          </div>
          <h4>Magni Dolores</h4>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
        </div>
      </div>
      <div className="col-lg-3 a">
        <div className="service-item">
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