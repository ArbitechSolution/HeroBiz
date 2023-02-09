import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="row py-5">
            <div className="col ">
              <h3 className="text-center">Contact Us</h3>
              <p className="col-9 mx-auto text-center">
                Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam
                occaecati dssumenda quas ut ad dolores adipisci aliquam.
              </p>
            </div>
            <div className="row py-lg-5 py-3">
              <div className="col-lg-4">
                <div className="card-box p-5 mb-5">
                  <div className="card-content">
                    <h5>Get in touch</h5>
                    <p>
                      Et id eius voluptates atque nihil voluptatem enim in
                      tempore minima sit ad mollitia commodi minus.
                    </p>
                    <div className="info-item d-flex ">
                      <span>
                        <i className="bi bi-geo-alt me-3"></i>
                      </span>
                      <div className="">
                        <h5>Location:</h5>
                        <p>A108 Adam Street, New York, NY 535022</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-content pt-4">
                    <div className="info-item d-flex ">
                      <span>
                        <i className="bi bi-envelope me-3"></i>
                      </span>
                      <div className="">
                        <h5>Email:</h5>
                        <p>info@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-content pt-4">
                    <div className="info-item d-flex ">
                      <span>
                        <i className="bi bi-phone me-3"></i>
                      </span>
                      <div className="">
                        <h5>Call:</h5>
                        <p>+1 5589 55488 55</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="col-lg-8 ">
                <div className="d-md-flex  ">
                <div className="col-md-6 pe-md-3 col-12">
                <form >
                
                <input type="text" id="fname" name="fname"  placeholder='Your Name' className='w-100 input mb-4' />
               
                
                </form>
                </div>
                <div className="col-md-6 ps-md-3 col-12">
                <form >
                
                <input type="text" id="fname" name="fname"  placeholder='Your Email' className='w-100 mb-4 input' />
               
                
                </form>
                </div>
                </div>
                <div className=" col-12 mb-4">
                <form >
                
                <input type="text" id="fname" name="fname"  placeholder='Subject' className='w-100 input' />
               
                
                </form>
                </div>
                <div className=" col-12 mb-4">
                <form >
                
                
                <textarea name="text" id="text" cols="30" rows="15" placeholder="Message" className="w-100 p-3"></textarea>
                
                </form>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="contact-btn ">
                    <a href="#">Send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer" id="footer">
        <div className="bg">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-3 mb-3 ">
              <div className="footer-item  ">
                <h3>HEROBIZ</h3>
                <p>A108 Adam Street
NY 535022, USA Street
NY 535022, USA</p>
<p className="contact-no">Phone:<span> +1 5589 55488 55</span></p>
<p className="email">Email:<span>info@example.com</span></p>
              </div>

            </div>
            <div className="col-lg-3 mb-3">
              <h6 className="text-white">Useful Links</h6>
              <hr className="mb-3"></hr>
             
              <div className="useful-links ">
                <p><span><i className="bi bi-chevron-right"></i></span>Home</p>
                <p><span><i className="bi bi-chevron-right"></i></span>
About us</p>
                <p><span><i className="bi bi-chevron-right"></i></span>
Services</p>
                <p><span><i className="bi bi-chevron-right"></i></span>Terms of service</p>
                <p><span><i className="bi bi-chevron-right"></i></span>Privacy policy</p>
              </div>
              
            </div>
            <div className="col-lg-3 mb-3 ">
              <h6 className="text-white">Our Services</h6>
              <hr className="mb-3"></hr>
             
              <div className="useful-links ">
                <p><span><i className="bi bi-chevron-right"></i></span>Web Design</p>
                <p><span><i className="bi bi-chevron-right"></i></span>
                Web Development</p>
                <p><span><i className="bi bi-chevron-right"></i></span>

                Product Management</p>
                <p><span><i className="bi bi-chevron-right"></i></span>Marketing</p>
                <p><span><i className="bi bi-chevron-right"></i></span>Graphic Design</p>
              </div>
              
            </div>
            <div className="col-lg-3 mb-3 ">
              <h6 className="text-white">Our Newsletter</h6>
              <hr className="mb-3"></hr>
             
              <div className="newsletter-content">
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna
<form >
<div className="d-flex">
  <input type="text" id="fname" name="fname" className="input mt-3 rounded-3"/>
  {/* <input type="text" id="fname" name="fname" className="input mt-3 rounded-3 "/> */}
  
  </div>
</form>
</p>
              </div>
              
            </div>
          </div>
        </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
