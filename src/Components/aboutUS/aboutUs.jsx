import React from 'react'
import './aboutUs.css'
// import onFocusVideoBgImg from '../../' 


import aboutImg from '../../assets/about.jpg'
import clientImg1 from '../../assets/clients/client-1.png'
import clientImg2 from '../../assets/clients/client-2.png'
import clientImg3 from '../../assets/clients/client-3.png'
import clientImg4 from '../../assets/clients/client-4.png'
import clientImg5 from '../../assets/clients/client-5.png'
import clientImg6 from '../../assets/clients/client-6.png'
import clientImg7 from '../../assets/clients/client-7.png'
import clientImg8 from '../../assets/clients/client-8.png'
import ctaImg from '../../assets/cta.jpg'

const AboutUs = () => {
  return (
    <>
    <section className='aboutUs' id='aboutUs' data-aos="fade-up"
    data-aos-duration="3000">
      <div className="container" >
        <div className="row  ">
          <div className="col">
          <div className="section-header d-flex flex-column justify-content-center align-items-center ">
          <h2>About Us</h2>
          <p>Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga.</p>
          </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="aboutBg-img">
                <img src={aboutImg} className='img-fluid about-img' alt="aboutImg not found" />
                {/* <img src={aboutImg} alt="" /> */}
              </div>
            </div>
            <div className="col-lg-7 pt-lg-5 ps-5">
              <h4>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h4>
              <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Saepe fuga</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Voluptates</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Corrupti</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <p>
    Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
    
    <h6><span><i class="bi bi-check"></i></span>Repudiandae rerum velit modi et officia quasi facilis</h6>
    <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
    <h6><span><i class="bi bi-check"></i></span>Incidunt non veritatis illum ea ut nisi</h6>
    <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
    <h6><span><i class="bi bi-check"></i></span>
Omnis ab quia nemo dignissimos rem eum quos..</h6>
    <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>
    
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
    
    <h6><span><i class="bi bi-check"></i></span>Repudiandae rerum velit modi et officia quasi facilis</h6>
    <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
    <h6><span><i class="bi bi-check"></i></span>Incidunt non veritatis illum ea ut nisi</h6>
    <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
    <h6><span><i class="bi bi-check"></i></span>
Omnis ab quia nemo dignissimos rem eum quos..</h6>
    <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
    
    <h6><span><i class="bi bi-check"></i></span>Repudiandae rerum velit modi et officia quasi facilis</h6>
    <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
    <h6><span><i class="bi bi-check"></i></span>Incidunt non veritatis illum ea ut nisi</h6>
    <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
    <h6><span><i class="bi bi-check"></i></span>
Omnis ab quia nemo dignissimos rem eum quos..</h6>
    <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p></div>
</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <section className='brandLogos' id='brandLogos'>
<div className="container">
  <div className="row">
    <div className="col">
      
    </div>
  </div>
</div>
    </section>

    <section className='clients' id='clients'>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
    <div className="container" data-aos="zoom-out" data-aos-duration="3000">
      <div className="row my-5">
        <div className="col-2">
        <img src={clientImg1} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg2} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg3} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg4} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg5} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg6} class="d-block w-75 img-fluid" alt="..." />
        </div>
      </div>
    </div>
     
    </div>
    <div class="carousel-item" data-bs-interval="3000">
    <div className="container">
      <div className="row my-5">
        <div className="col-2">
        <img src={clientImg2} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg3} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg4} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg5} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg6} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg7} class="d-block w-75 img-fluid" alt="..." />
        </div>
      </div>
    </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
    <div className="container">
      <div className="row my-5">
        <div className="col-2">
        <img src={clientImg3} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg4} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg5} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg6} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg7} class="d-block w-75 img-fluid" alt="..." />
        </div>
        <div className="col-2">
        <img src={clientImg8} class="d-block w-75 img-fluid" alt="..." />
        </div>
      </div>
    </div>
    </div>
  </div>
</div>    

    </section>

<section className='cta' id='cta'>
  <div className="container cta_bg px-5 my-5" data-aos="zoom-out" data-aos-duration="3000">
    <div className="row">
      <div className="col-lg-8">
        <h3 className='pt-5 mt-5'>Alias sunt quas 
        Cupiditate oluptas hic minima</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href='#' className='cta_Btn'>Call To Action</a>
      </div>
      <div className="col-lg-4">
        <img src={ctaImg} alt="" className='img-fluid rounded-3 ' style={{marginTop:"30px"}}  />
      </div>
    </div>
  </div>
</section>

<section className='onFocus' id='onFocus'>
  <div className="container-fluid p-0 " data-aos="fade-up" data-aos-duration="3000">
    <div className="row g-0">
      <div className="col-lg-6">
<div className="onFocusVideoBgImg img-fluid min-vh-100 position-relative">
<a href="https://youtu.be/LXb3EKWsInQ">
  <span><i class="bi bi-play text-white"></i></span>
</a>
</div>
      </div>
      <div className="col-lg-6 content ">
        <div className="onFocusContentBgImg min-vh-100 p-5 ">
<h3>Voluptatem dignissimos provident quasi corporis</h3>
<p>
<em style={{fontStyle: 'italic'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      </em>
                    </p>
                    

                    <p>
                      <span class="bi bi-check-circle-fill"></span>Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      <span class="bi bi-check-circle-fill"></span>Duis aute
                      irure dolor in reprehenderit in voluptate velit.
                    </p>
                    <p>
                      <span class="bi bi-check-circle-fill"></span> Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate trideta
                      storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default AboutUs