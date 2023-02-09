import React from 'react'
import './blog.css'
import blogImg1 from '../../assets/blog/blog-1.jpg'
import blogImg2 from '../../assets/blog/blog-2.jpg'
import blogImg3 from '../../assets/blog/blog-3.jpg'
import blogImg4 from '../../assets/blog/blog-4.jpg'
import blogImg5 from '../../assets/blog/blog-5.jpg'
import blogImg6 from '../../assets/blog/blog-6.jpg'


const Blog = () => {
  return (
    <>
    
    <section className='blog' id='blog'>
      <div className="container">
        <div className="row">
          <div className="col text-center">
<h3>Blog</h3>
<p className='recent-post'>Recent posts form our Blog</p>
          </div>
        </div>
        <div className="row py-sm-3 py-lg-5">
          <div className="col-lg-4">
          <div className="blog-box">
            <div className="blogImg-box">
            
             <figure> <img src={blogImg1} alt="blog Image not Found" className='img-fluid rounded-3  blog-writer-img' /></figure>
              
              <p><span className='blog-box-date'>Tue, December 12</span><span className='blog-writer-name'> /Julia Parker</span></p>
              <p className='post-title'>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</p>
              <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi cupiditate exercitationem qui magni est...</p>
              <a href="#" class="read-more "><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            
        
            
            </div>
            
          </div>
          </div>

          <div className="col-lg-4">
          <div className="blog-box">
            <div className="blogImg-box">
            
             <figure> <img src={blogImg2} alt="blog Image not Found" className='img-fluid rounded-3  blog-writer-img' /></figure>
              
              <p><span className='blog-box-date'>Tue, December 12</span><span className='blog-writer-name'> /Julia Parker</span></p>
              <p className='post-title'>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</p>
              <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi cupiditate exercitationem qui magni est...</p>
              <a href="#" class="read-more "><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            
        
            
            </div>
            
          </div>
          </div>

          <div className="col-lg-4">
          <div className="blog-box">
            <div className="blogImg-box">
            
             <figure> <img src={blogImg3} alt="blog Image not Found" className='img-fluid rounded-3  blog-writer-img' /></figure>
              
              <p><span className='blog-box-date'>Tue, December 12</span><span className='blog-writer-name'> /Julia Parker</span></p>
              <p className='post-title'>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</p>
              <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi cupiditate exercitationem qui magni est...</p>
              <a href="#" class="read-more "><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            
        
            
            </div>
            
          </div>
          </div>
         

        </div>
        
      </div>
      </section>
    </>
  )
}

export default Blog