import React from "react";
import "./services.css";
import servicesCard_Img1 from "../../assets/services-1.jpg";
import servicesCard_Img2 from "../../assets/services-2.jpg";
import servicesCard_Img3 from "../../assets/services-3.jpg";
import servicesCard_Img4 from "../../assets/services-4.jpg";
import servicesCard_Img5 from "../../assets/services-5.jpg";
import servicesCard_Img6 from "../../assets/services-6.jpg";
import testimonials_Img1 from "../../assets/testimonials/testimonials-1.jpg";
import testimonials_Img2 from "../../assets/testimonials/testimonials-2.jpg";
import testimonials_Img3 from "../../assets/testimonials/testimonials-3.jpg";
import testimonials_Img4 from "../../assets/testimonials/testimonials-4.jpg";
import testimonials_Img5 from "../../assets/testimonials/testimonials-5.jpg";

const Services = () => {
  return (
    <>
      <section
        className="services "
        id="services"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container my-5">
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
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC
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
                      is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
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
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC
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
                      is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
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
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="carousel"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="4"
                      aria-label="Slide 5"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="container">
                        <div className="row">
                          <div className="col  min-vh-100 d-flex  flex-column justify-content-center align-items-center text-center">
                            <div className="testimonialsImg_box d-flex justify-content-center ">
                              <img
                                src={testimonials_Img1}
                                class="d-block rounded-circle "
                                alt="testimonials_Img not found"
                              />
                            </div>
                            <h5>Soul Godmann</h5>
                            <p>Ceo & Founder</p>
                            <div className="d-flex justify-content-center">
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </div>
                            <p className="mt-3">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Nulla iure ut consequatur omnis
                              aspernatur in esse saepe sit quidem fugit rerum
                              quod nostrum, aliquam quo porro, corporis est
                              quisquam sapiente! "
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item ">
                      <div className="container">
                        <div className="row">
                          <div className="col  min-vh-100 d-flex  flex-column justify-content-center align-items-center text-center">
                            <div className="testimonialsImg_box d-flex justify-content-center ">
                              <img
                                src={testimonials_Img2}
                                class="d-block rounded-circle "
                                alt="testimonials_Img not found"
                              />
                            </div>
                            <h5>Soul Godmann</h5>
                            <p>Ceo & Founder</p>
                            <div className="d-flex justify-content-center">
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </div>
                            <p className="mt-3">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Nulla iure ut consequatur omnis
                              aspernatur in esse saepe sit quidem fugit rerum
                              quod nostrum, aliquam quo porro, corporis est
                              quisquam sapiente! "
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item ">
                      <div className="container">
                        <div className="row">
                          <div className="col  min-vh-100 d-flex  flex-column justify-content-center align-items-center text-center">
                            <div className="testimonialsImg_box d-flex justify-content-center ">
                              <img
                                src={testimonials_Img3}
                                class="d-block rounded-circle "
                                alt="testimonials_Img not found"
                              />
                            </div>
                            <h5>Jena Karlis</h5>
                            <p>Store Owner</p>
                            <div className="d-flex justify-content-center">
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </div>
                            <p className="mt-3">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Nulla iure ut consequatur omnis
                              aspernatur in esse saepe sit quidem fugit rerum
                              quod nostrum, aliquam quo porro, corporis est
                              quisquam sapiente! "
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item ">
                      <div className="container">
                        <div className="row">
                          <div className="col  min-vh-100 d-flex  flex-column justify-content-center align-items-center text-center">
                            <div className="testimonialsImg_box d-flex justify-content-center ">
                              <img
                                src={testimonials_Img4}
                                class="d-block rounded-circle "
                                alt="testimonials_Img not found"
                              />
                            </div>
                            <h5>Matt Bradon</h5>
                            <p>Freelancer</p>
                            <div className="d-flex justify-content-center">
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </div>
                            <p className="mt-3">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Nulla iure ut consequatur omnis
                              aspernatur in esse saepe sit quidem fugit rerum
                              quod nostrum, aliquam quo porro, corporis est
                              quisquam sapiente! "
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item ">
                      <div className="container">
                        <div className="row">
                          <div className="col  min-vh-100 d-flex  flex-column justify-content-center align-items-center text-center">
                            <div className="testimonialsImg_box d-flex justify-content-center ">
                              <img
                                src={testimonials_Img5}
                                class="d-block rounded-circle "
                                alt="testimonials_Img not found"
                              />
                            </div>
                            <h5>John Larson</h5>
                            <p>Enterpreneur</p>
                            <div className="d-flex justify-content-center">
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                              <span>
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </div>
                            <p className="mt-3">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Nulla iure ut consequatur omnis
                              aspernatur in esse saepe sit quidem fugit rerum
                              quod nostrum, aliquam quo porro, corporis est
                              quisquam sapiente! "
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing min-vw-100 bg-light" id="pricing">
        <div className="container bg-light ">
          <div className="row py-5">
            <div className="col d-flex flex-column   align-items-center text-center  ">
              <h2>Our Pricing</h2>
              <p>
                Architecto nobis eos vel nam quidem vitae temporibus voluptates
                qui hic deserunt iusto omnis nam voluptas asperiores sequi
                tenetur dolores incidunt enim voluptatem magnam cumque fuga.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="pricing-box ">
                <div className="pricing-headBgImg">
                  <div className="pricingHead-item d-flex flex-column align-items-center justify-content-center   ">
                    <h3>Free Plan</h3>
                    <h4>
                      <sup>$</sup>0
                      <span>
                        <sub> / month</sub>
                      </span>
                    </h4>
                  </div>
                </div>
               
                <div className="row  ">
                  <div className="col">
                    <div className="pricing-item-body">
                      <p>
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Quam adipiscing vitae proin
                      </p>
                      <p>
                        
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Nec feugiat nisl pretium
                      </p>
                      <p>
                        
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Nulla at volutpat diam uteera
                      </p>
                      <p>
                        
                        <span>
                          <i class="bi bi-x x-icon"></i>
                        </span>
                        <span style={{ textDecoration: "line-through" }}>
                          
                          Massa ultricies mi quis hen
                        </span>
                      </p>
                      <p>
                        
                        <span>
                          <i class="bi bi-x x-icon"></i>
                        </span>
                        <span style={{ textDecoration: "line-through" }} >
                          
                         Pharetra massa
                        massa ultra
                        </span>
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col d-flex justify-content-center">
                    <div className="pricing-btn-box">
                      <a href="#" className="pricing-btn">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-box pricing-box2 ">
                <div className="pricing-headBgImg">
                  <div className="pricingHead-item d-flex flex-column align-items-center justify-content-center   ">
                    <h3>Business Plan</h3>
                    <h4>
                      <sup>$</sup>29
                      <span>
                        <sub> /month</sub>
                      </span>
                    </h4>
                  </div>
                </div>
               
                <div className="row  ">
                  <div className="col">
                    <div className="pricing-item-body">
                      <p>
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Quam adipiscing vitae proin
                      </p>
                      <p>
                        
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Nec feugiat nisl pretium
                      </p>
                      <p>
                        
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Nulla at volutpat diam uteera
                      </p>
                      <p>
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Massa ultricies mi quis hen
                      </p>
                      <p>
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Massa ultricies mi quis hen
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col d-flex justify-content-center">
                    <div className="pricing-btn-box">
                      <a href="#" className="pricing-btn">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-box ">
                <div className="pricing-headBgImg">
                  <div className="pricingHead-item d-flex flex-column align-items-center justify-content-center   ">
                    <h3>Developer Plan</h3>
                    <h4>
                      <sup>$</sup>49
                      <span>
                        <sub> /month</sub>
                      </span>
                    </h4>
                  </div>
                </div>
               
                <div className="row  ">
                  <div className="col">
                    <div className="pricing-item-body">
                      <p>
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Quam adipiscing vitae proin
                      </p>
                      <p>
                        
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Nec feugiat nisl pretium
                      </p>
                      <p>
                        
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Nulla at volutpat diam uteera
                      </p>
                      <p>
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Massa ultricies mi quis hen
                      </p>
                      <p>
                        <span>
                          <i class="bi bi-dot"></i>
                        </span>
                        Pharetra massa massa ultra
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col d-flex justify-content-center">
                    <div className="pricing-btn-box">
                      <a href="#" className="pricing-btn">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq " id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5">
            <div className="faq-head">
              <h6>Frequently Asked <span className="faq-heading-bold">Questions</span></h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
            </div>
            
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
    
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <span><i class="bi bi-question-circle me-3"></i></span>
      Non consectetur a erat nam at lectus urna duis? 
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <span><i class="bi bi-question-circle me-3"></i></span>
      Feugiat scelerisque varius morbi enim 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <span><i class="bi bi-question-circle me-3"></i></span>
        Lorem ipsum dolor sit amet consectetur, adipisicing 
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingfour">
    
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
      <span><i class="bi bi-question-circle me-3"></i></span>
      Non consectetur a erat nam at lectus urna duis? 
      </button>
    </h2>
    <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingfive">
    
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
      <span><i class="bi bi-question-circle me-3"></i></span>
      Letraset sheets containing Lorem Ipsum passages
      </button>
    </h2>
    <div id="flush-collapsefive" class="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
    </div>
  </div>
</div>
            </div>
            <div className="col-lg-6">
              <div className="faq-side-img">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
