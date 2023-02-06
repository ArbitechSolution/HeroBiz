import React from "react";
import "./services.css";
import servicesCard_Img1 from "../../assets/services-1.jpg";
import servicesCard_Img2 from "../../assets/services-2.jpg";
import servicesCard_Img3 from "../../assets/services-3.jpg";
import servicesCard_Img4 from "../../assets/services-4.jpg";
import servicesCard_Img5 from "../../assets/services-5.jpg";
import servicesCard_Img6 from "../../assets/services-6.jpg";

const Services = () => {
  return (
    <>
    <section className="services" id="services">
      <div className="container my-5" data-aos="fade-up" data-aos-duration="3000">
        <div className="row ">
          <div className="col text-center">
            <h2 className="section-heading">Our Services</h2>
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
                  src={servicesCard_Img1}
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
    {/* <section className="reviews" id="reviews">
      <div className="container-fluid bgService_Img">
        <div className="row">
          <div className="col">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
};

export default Services;
