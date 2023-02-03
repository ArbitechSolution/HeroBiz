import React from 'react'
import './aboutUs.css'

import aboutImg from '../../assets/about.jpg'

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
    </>
  )
}

export default AboutUs