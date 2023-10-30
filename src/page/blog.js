import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import WOW from 'wowjs';

import { Link } from "react-router-dom";


import blogImg1 from'../Assets/blog/blog-img1.jpg'
import blogImg2 from'../Assets/blog/blog-img2.jpg'
import blogImg3 from'../Assets/blog/blog-img3.jpg'


function Blog() {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);

    
  return (
    <div className="container py-115">
      <div className="row">
            <div className="col-lg-12">
                <div className="section-content">
                    <h2 className="section-title mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">User Benefit</h2>
                    <div className="title-btm-border mb-3 wow animate__animated animate__fadeInUp"  data-wow-delay="0.3s"></div>
                </div>
            </div>
        </div>
          <div className="row g-5 justify-content-center py-60">
          <div className="col-lg-4 col-md-6">
                <div className="nws-card_body wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                    <div className="card-img">
                        <Link to='/BlogDetails'>
                            <img src={blogImg1} alt="blog-cover-img" />
                        </Link>
                    </div>
                    <div className="card-item">
                        <div className="date">
                            <p><i className="fa-solid fa-calendar-days"></i> March 4, 2023</p>
                        </div>
                        <div className="nws-title pt-3">
                        <Link to='/BlogDetails'><h4>Creating Engaging Content: A Guide for Digital</h4></Link>
                        </div>
                        <div className="py-2">
                          <Link className="btn btn--base" to='/BlogDetails'>Read More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>  
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="nws-card_body wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                    <div className="card-img">
                        <Link to='/BlogDetails'>
                            <img src={blogImg2} alt="blog-cover-img" />
                        </Link>
                    </div>
                    <div className="card-item">
                        <div className="date">
                            <p><i className="fa-solid fa-calendar-days"></i> March 4, 2023</p>
                        </div>
                        <div className="nws-title pt-3">
                        <Link to='/BlogDetails'><h4>Creating Engaging Content: A Guide for Digital</h4></Link>
                        </div>
                        <div className="py-2">
                        <Link className="btn btn--base" to='/BlogDetails'>Read More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>  
                    </div>
                </div>
            </div>


            <div class="col-lg-4 col-md-6">
                <div class="nws-card_body wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                    <div class="card-img">
                        <Link to='/BlogDetails'>
                            <img src={blogImg3} alt="blog-cover-img" />
                        </Link>
                    </div>
                    <div class="card-item">
                        <div class="date">
                            <p><i class="fa-solid fa-calendar-days"></i> March 4, 2023</p>
                        </div>
                        <div class="nws-title pt-3">
                        <Link to='/BlogDetails'><h4>Creating Engaging Content: A Guide for Digital</h4></Link>
                        </div>
                        <div class="py-2">
                          <Link class="btn btn--base" to='/BlogDetails'>Read More <i class="fa-solid fa-arrow-right"></i></Link>
                        </div>  
                    </div>
                </div>
            </div>
          </div>
          {/* pagination */}
          <div class="row">
            <div class="col-lg-12 justify-content-end d-flex">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </div>

  );
}

export default Blog;
