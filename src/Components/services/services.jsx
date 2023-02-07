import React from "react";
import "./services.css";
import servicesCard_Img1 from "../../assets/services-1.jpg";
import servicesCard_Img2 from "../../assets/services-2.jpg";
import servicesCard_Img3 from "../../assets/services-3.jpg";
import servicesCard_Img4 from "../../assets/services-4.jpg";
import servicesCard_Img5 from "../../assets/services-5.jpg";
import servicesCard_Img6 from "../../assets/services-6.jpg";
import testimonials_Img1 from '../../assets/testimonials/testimonials-1.jpg';
import testimonials_Img2 from '../../assets/testimonials/testimonials-2.jpg';
import testimonials_Img3 from '../../assets/testimonials/testimonials-3.jpg';
import testimonials_Img4 from '../../assets/testimonials/testimonials-4.jpg';
import testimonials_Img5 from '../../assets/testimonials/testimonials-5.jpg';


const Services = () => {
  return (
    <>
    <section className="services" id="services">
      <div className="container my-5" data-aos="fade-up" data-aos-duration="3000">
        <div className="row ">
          <div className="col text-center">
            <h2 className="section-heading ">Our Services</h2>
            <p className="section-headContent">
              Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam
              occaecati dssumenda quas ut ad dolores adipisci aliquam.
            </p>
          </div>

          {/* servives card */}
          <div className="row ">
            <div className="col-lg-4 ">
              <div className="servicesCardImg_Container ">
                <img
                  src={servicesCard_Img1}
                  alt=" servicesCard_Img not found "
                  className="img-fluid servicesCard_Img  "
                />

                <div className="service_card">
                  <span>
                    <i class="bi bi-activity"></i>
                  </span>
                  <h5>Nesciunt Mete</h5>
                  <p>
                    Provident nihil moinus qui Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Blanditiis omnis
                    exercitationem
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="servicesCardImg_Container ">
                <img
                  src={servicesCard_Img2}
                  alt=" servicesCard_Img not found "
                  className="img-fluid servicesCard_Img  "
                />

                <div className="service_card">
                  <span>
                  <i class="bi bi-broadcast"></i>
                  </span>
                  <h5>Esole Commodi</h5>
                  <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="servicesCardImg_Container ">
                <img
                  src={servicesCard_Img3}
                  alt=" servicesCard_Img not found "
                  className="img-fluid servicesCard_Img   "
                />

                <div className="service_card">
                  <span>
                  <i class="bi bi-bounding-box-circles"></i>
                  </span>
                  <h5>Ledo Market</h5>
                  <p>
                  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="servicesCardImg_Container ">
                <img
                  src={servicesCard_Img4}
                  alt=" servicesCard_Img not found "
                  className="img-fluid servicesCard_Img  "
                />

                <div className="service_card">
                  <span>
                    <i class="bi bi-easel"></i>
                  </span>
                  <h5>Asperiorers Commidit</h5>
                  <p>
                    Provident nihil moinus qui Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Blanditiis omnis
                    exercitationem
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="servicesCardImg_Container ">
                <img
                  src={servicesCard_Img5}
                  alt=" servicesCard_Img not found "
                  className="img-fluid servicesCard_Img  "
                />

                <div className="service_card">
                  <span>
                  <i class="bi bi-calendar-week"></i>
                  </span>
                  <h5>Velit Doremaqio</h5>
                  <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="servicesCardImg_Container ">
                <img
                  src={servicesCard_Img6}
                  alt=" servicesCard_Img not found "
                  className="img-fluid servicesCard_Img   "
                />

                <div className="service_card">
                  <span>
                  <i class="bi bi-chat-left-text"></i>
                  </span>
                  <h5>Dolario Archeitecto</h5>
                  <p>
                  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="testimonials" id="testimonials">
    <div className="testimonialsBg_Img ">
      <div className="container-fluid"  >
        <div className="row">
          <div className="col">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="3000">
          <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="container">
    <div className="row">
      <div className="col  min-vh-100 d-flex  flex-column justify-content-center align-items-center text-center">
      <div className="testimonialsImg_box d-flex justify-content-center ">
      <img src={testimonials_Img1} class="d-block rounded-circle " alt="testimonials_Img not found" />
      </div>
      <h5>Soul Godmann</h5>
      <p>Ceo & Founder</p>
  <div className="d-flex justify-content-center">
  <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
  </div>
      <p className="mt-3" >
    
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla iure ut consequatur omnis aspernatur in esse saepe sit quidem fugit rerum quod nostrum, aliquam quo porro, corporis est quisquam sapiente! "</p>
    </div>
    </div>
    </div>
    </div>
    <div class="carousel-item ">
    <div className="container">
    <div className="row">
      <div className="col  min-vh-100 d-flex  flex-column justify-content-center align-items-center text-center">
      <div className="testimonialsImg_box d-flex justify-content-center ">
      <img src={testimonials_Img2} class="d-block rounded-circle " alt="testimonials_Img not found" />
      </div>
      <h5>Soul Godmann</h5>
      <p>Ceo & Founder</p>
  <div className="d-flex justify-content-center">
  <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
  </div>
      <p className="mt-3" >
    
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla iure ut consequatur omnis aspernatur in esse saepe sit quidem fugit rerum quod nostrum, aliquam quo porro, corporis est quisquam sapiente! "</p>
    </div>
    </div>
    </div>
    </div>

    <div class="carousel-item ">
    <div className="container">
    <div className="row">
      <div className="col  min-vh-100 d-flex  flex-column justify-content-center align-items-center text-center">
      <div className="testimonialsImg_box d-flex justify-content-center ">
      <img src={testimonials_Img3} class="d-block rounded-circle " alt="testimonials_Img not found" />
      </div>
      <h5>Jena Karlis</h5>
      <p>Store Owner</p>
  <div className="d-flex justify-content-center">
  <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
  </div>
      <p className="mt-3" >
    
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla iure ut consequatur omnis aspernatur in esse saepe sit quidem fugit rerum quod nostrum, aliquam quo porro, corporis est quisquam sapiente! "</p>
    </div>
    </div>
    </div>
    </div>

    <div class="carousel-item ">
    <div className="container">
    <div className="row">
      <div className="col  min-vh-100 d-flex  flex-column justify-content-center align-items-center text-center">
      <div className="testimonialsImg_box d-flex justify-content-center ">
      <img src={testimonials_Img4} class="d-block rounded-circle " alt="testimonials_Img not found" />
      </div>
      <h5>Matt Bradon</h5>
      <p>Freelancer</p>
  <div className="d-flex justify-content-center">
  <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
  </div>
      <p className="mt-3" >
    
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla iure ut consequatur omnis aspernatur in esse saepe sit quidem fugit rerum quod nostrum, aliquam quo porro, corporis est quisquam sapiente! "</p>
    </div>
    </div>
    </div>
    </div>
    <div class="carousel-item ">
    <div className="container">
    <div className="row">
      <div className="col  min-vh-100 d-flex  flex-column justify-content-center align-items-center text-center">
      <div className="testimonialsImg_box d-flex justify-content-center ">
      <img src={testimonials_Img5} class="d-block rounded-circle " alt="testimonials_Img not found" />
      </div>
      <h5>John Larson</h5>
      <p>Enterpreneur</p>
  <div className="d-flex justify-content-center">
  <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
      <span><i class="bi bi-star-fill"></i></span>
  </div>
      <p className="mt-3" >
    
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla iure ut consequatur omnis aspernatur in esse saepe sit quidem fugit rerum quod nostrum, aliquam quo porro, corporis est quisquam sapiente! "</p>
    </div>
    </div>
    </div>
    </div>








    {/* <div class="carousel-item">
      <img src={testimonials_Img2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={testimonials_Img3} class="d-block w-100" alt="..." />
    </div> */}
  </div>
</div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className="pricing" id="pricing">
    <div className="container py-5">
      <div className="row">
        <div className="col ">
        <h2>Our Pricing</h2>
      <p>Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga.</p>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default Services;
