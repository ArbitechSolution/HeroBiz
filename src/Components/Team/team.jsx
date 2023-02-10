import React from "react";
import "./team.css";
import teammemberImg1 from '../../assets/team/team-1.jpg'
import teammemberImg2 from '../../assets/team/team-2.jpg'
import teammemberImg3 from '../../assets/team/team-3.jpg'

const Team = () => {
  return (
    <>
      <section className="team " id="team"   >
        <div className="container">
          <div className="row">
            <div className="col py-5 " >
            <div className="team-header d-flex flex-column justify-content-center align-items-center text-center">
              <h2>Our Team</h2>
              <p className="col-9">
                Architecto nobis eos vel nam quidem vitae temporibus voluptates
                qui hic deserunt iusto omnis nam voluptas asperiores sequi
                tenetur dolores incidunt enim voluptatem magnam cumque fuga.
                Walter White Chief Executive Officer Sarah Jhonson Product
                Manager
              </p>
              </div>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-lg-4">
            <div className="team-card">
              <img src={teammemberImg1} alt="teammemberImg1 not found" className="img-fluid rounded-3" />
              <div className="d-flex justify-content-center">
              <div className="col-11 ">
              
              <div className="imgCardContent-box text-center py-3 mb-5  ">
              <div className="social-links-icon">
                <span><i class="bi bi-twitter"></i></span>
                <span><i class="bi bi-facebook"></i></span>
                <span><i class="bi bi-instagram"></i></span>
                <span><i class="bi bi-linkedin"></i></span>
              </div>
              <h3>Walter White</h3>
              <p>Chief Executive Officer</p>
                            </div>
              </div>
</div>
            </div>
            </div>
            <div className="col-lg-4">
            <div className="team-card">
              <img src={teammemberImg2} alt="teammemberImg1 not found" className="img-fluid rounded-3" />
              <div className="d-flex justify-content-center">
              <div className="col-11 ">
              
              <div className="imgCardContent-box text-center py-3  mb-5 ">
              <div className="social-links-icon">
                <span><i class="bi bi-twitter"></i></span>
                <span><i class="bi bi-facebook"></i></span>
                <span><i class="bi bi-instagram"></i></span>
                <span><i class="bi bi-linkedin"></i></span>
              </div>
              <h3>Sarah Jhonson</h3>
              <p>Product Manager</p>
                            </div>
              </div>
</div>
</div>
            </div>
            <div className="col-lg-4">
            <div className="team-card">
            <div className="team-member">
              <img src={teammemberImg3} alt="teammemberImg1 not found" className="img-fluid rounded-3" />
              <div className="d-flex justify-content-center">
              <div className="col-11 ">
              
              <div className="imgCardContent-box text-center py-3 mb-5  ">
              <div className="social-links-icon">
                <span><i class="bi bi-twitter"></i></span>
                <span><i class="bi bi-facebook"></i></span>
                <span><i class="bi bi-instagram"></i></span>
                <span><i class="bi bi-linkedin"></i></span>
              </div>
              <h3>William Anderson</h3>
              <p>CTO</p>
                            </div>
              </div>
</div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
