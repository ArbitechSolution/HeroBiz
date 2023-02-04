import React from "react";
import "./navTabs.css";
import featuresImg1 from "../../assets/features-1.svg";
import featuresImg2 from "../../assets/features-2.svg";
import featuresImg3 from "../../assets/features-3.svg";
import featuresImg4 from "../../assets/features-4.svg";
import featuresImg5 from "../../assets/features-5.svg";
import featuresImg6 from "../../assets/features-6.svg";
const NavTabs = () => {
  return (
    <>
      <section className="features" id="features">
        <div className="container"  data-aos="fade-up" data-aos-duration="3000">
          <ul
            class="nav nav-pills red  row mb-3 "
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item col-lg-2 col-md-4 col-6 " role="presentation">
              <a
                class="nav-link active text-center "
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <span>
                  <i class="bi bi-binoculars "></i>
                </span>
                <h4>Modinest</h4>
              </a>
            </li>

            <li class="nav-item col-lg-2 col-md-4 col-6" role="presentation">
              <a
                class="nav-link text-center  "
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <span>
                  <i class="bi bi-box-seam"></i>
                </span>
                <h4>Undaesenti</h4>
              </a>
            </li>

            <li class="nav-item col-lg-2 col-md-4 col-6" role="presentation">
              <a
                class="nav-link"
                id="pills-pariatur-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-pariatur"
                role="tab"
                aria-controls="pills-pariatur"
                aria-selected="false"
              >
                <span>
                  <i class="bi bi-brightness-high"></i>
                </span>
                <h4>Pariatur</h4>
              </a>
            </li>

            <li class="nav-item col-lg-2 col-md-4 col-6" role="presentation">
              <a
                class="nav-link  "
                id="pills-nostrum-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-nostrum"
                aria-controls="pills-home"
                aria-selected="true"
                role="tab"
              >
                <span>
                  <i class="bi bi-command "></i>
                </span>
                <h4>Nostrum</h4>
              </a>
            </li>

            <li class="nav-item col-lg-2 col-md-4 col-6 " role="presentation">
              <a
                class="nav-link "
                id="pills-Adipiscing-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Adipiscing"
                role="tab"
                aria-controls="pills-Adipiscing"
                aria-selected="false"
              >
                <span>
                  <i class="bi bi-easel"></i>
                </span>
                <h4>Adipiscing</h4>
              </a>
            </li>

            <li class="nav-item col-lg-2 col-md-4 col-6" role="presentation">
              <a
                class="nav-link"
                id="pills-reprehit-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-reprehit"
                role="tab"
                aria-controls="pills-reprehit"
                aria-selected="false"
              >
                <span>
                  <i class="bi bi-map"></i>
                </span>
                <h4>Reprehit</h4>
              </a>
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="container "  data-aos="fade-up" data-aos-duration="5000">
                <div className="row">
                  <div className="col-lg-8 order-lg-1 order-2 ">
                    <h3>Modinest</h3>
                    <p>
                   
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      
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
                  <div className="col-lg-4 order-lg-2 order-1">
                    <img src={featuresImg1} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 order-lg-1 order-2">
                    <h3>Undaesenti</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                      <p>
                        <span class="bi bi-check-circle-fill"></span>Provident
                        mollitia neque rerum asperiores dolores quos qui a.
                        Ipsum neque dolor voluptate nisi sed.
                      </p>
                      <span class="bi bi-check-circle-fill"></span> Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate trideta
                      storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="col-lg-4 order-lg-2 order-1">
                    <img src={featuresImg2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-pariatur"
              role="tabpanel"
              aria-labelledby="pills-pariatur-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 order-lg-1 order-2">
                    <h3>Pariatur</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                      <span class="bi bi-check-circle-fill"></span> Provident
                      mollitia neque rerum asperiores dolores quos qui a. Ipsum
                      neque dolor voluptate nisi sed.
                    </p>
                  </div>
                  <div className="col-lg-4 order-lg-2 order-1">
                    <img src={featuresImg3} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-nostrum"
              role="tabpanel"
              aria-labelledby="pills-nostrum-tab"
            >
              <div className="container">
                <div className="row">
                <div className="col-lg-4 order-lg-2">
                    <img src={featuresImg4} alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-8 order-lg-1 ">
                    <h3>Nostrum</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                      <span class="bi bi-check-circle-fill"></span> Provident
                      mollitia neque rerum asperiores dolores quos qui a. Ipsum
                      neque dolor voluptate nisi sed.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-Adipiscing"
              role="tabpanel"
              aria-labelledby="pills-Adipiscing-tab"
            >
              <div className="container">
                <div className="row">
                <div className="col-lg-4 order-lg-2 order-1">
                    <img src={featuresImg5} alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-8 order-lg-1 order-2">
                  
                    <h3>Adipiscing</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                      <span class="bi bi-check-circle-fill"></span> Provident
                      mollitia neque rerum asperiores dolores quos qui a. Ipsum
                      neque dolor voluptate nisi sed.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-reprehit"
              role="tabpanel"
              aria-labelledby="pills-reprehit-tab"
            >
              <div className="container">
                <div className="row">
                <div className="col-lg-4 order-lg-2 order-1">
                    <img src={featuresImg6} alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-8 order-lg-1 order-2">
                    <h3>Reprehit</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                      <span class="bi bi-check-circle-fill"></span>Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate trideta
                      storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  {/* <div className="col-lg-4">
                    <img src={featuresImg6} alt="" className="img-fluid" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTabs;
