import React from 'react'
import './navTabs.css'
import modinestImg from '../../assets/hero-carousel/hero-carousel-2.svg'
const NavTabs = () => {
  return (
    <>
   
<div className="container">

   <ul class="nav nav-pills red  row mb-3 " id="pills-tab" role="tablist">
   
  <li class="nav-item col-lg-2 " role="presentation">
    <a class="nav-link active text-center modinest" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"  role="tab" aria-controls="pills-home" aria-selected="true">
    <span><i class="bi bi-binoculars "></i></span>
    <h4>Modinest</h4>
    </a>
  </li>
  
  
  <li class="nav-item col-lg-2" role="presentation">
    <a class="nav-link text-center Undaesenti " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
    <span><i class="bi bi-box-seam"></i></span>
    <h4>Undaesenti</h4>
    </a>
  </li>
  <li class="nav-item col-lg-2" role="presentation">
    <a class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
    <span><i class="bi bi-brightness-high"></i></span>
    <h4>Pariatur</h4>
    </a>
  </li>
  {/* <li class="nav-item col-lg-2 a" role="presentation">
    <button class="nav-link  " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  
  <li class="nav-item col-lg-2" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item col-lg-2" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li> */}
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h3 >Modinest</h3>
          <p className='modinest-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <p>
          <span class="bi bi-check-circle-fill"></span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
          <span class="bi bi-check-circle-fill"></span>Duis aute irure dolor in reprehenderit in voluptate velit.
          </p>
          <p>
          <span class="bi bi-check-circle-fill"></span> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
          </p>
          <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="col-lg-4">
          <img src={modinestImg} alt="" className='img-fluid' />
        </div>
      </div>
    </div>
  </div>




  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h3 >Undaesenti</h3>
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <p>
          <span class="bi bi-check-circle-fill"></span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
          <span class="bi bi-check-circle-fill"></span>Duis aute irure dolor in reprehenderit in voluptate velit.
          </p>
          <p>
          <p>
          <span class="bi bi-check-circle-fill"></span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.
          </p>
          <p></p>
          <span class="bi bi-check-circle-fill"></span> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="col-lg-4">
          <img src={modinestImg} alt="" className='img-fluid' />
        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h3 className='modinest-heading'>Modinest</h3>
          <p className='modinest-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <p>
          <span class="bi bi-check-circle-fill"></span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
          <span class="bi bi-check-circle-fill"></span>Duis aute irure dolor in reprehenderit in voluptate velit.
          </p>
          <p>
          <span class="bi bi-check-circle-fill"></span> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="col-lg-4">
          <img src={modinestImg} alt="" className='img-fluid' />
        </div>
      </div>
    </div>
  </div>
</div>

</div>



    </>
  )
}

export default NavTabs