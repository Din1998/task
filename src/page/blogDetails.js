import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import WOW from 'wowjs';
import { Link } from "react-router-dom";
import blogImg1 from'../Assets/blog/blog-img1.jpg'

function BlogDetails() {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);

    
  return (
    <div className="container py-115">
          <div className="row pt-4 gy-5 justify-content-center">
              <div className="col-lg-8">
                  <div className="blog-details">
  
                      <div className="blog-item">
                          <div className="blog-item__thumb">
                              <img src={blogImg1} alt="blog-img" />
                          </div>
                          <div className="blog-item__content pt-3">
                              <ul className="text-list inline">
                                  <li className="text-list__item"> <span className="text-list__item-icon"><i className="fas fa-calendar-alt"></i></span> 09 Jun 2023</li>
                              </ul>
                          </div>
                      </div>
                     <div className="blog-details__content">
                          <h3 className="blog-details__title">Photoshop Create Path From Image.</h3>
                          <p className="blog-details__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quibipsum dolor sit amet consectetur adipisicing elit. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quibusdam. Lorem ipsum orem ipsum dolor sit amet consectetur adipisicing elit. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quibusdam.</p>
                          <blockquote>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quibusdam ea aut officiis iure officia nostrum quas, molestias minus. Molestiae blanditiis doloribus dolor vel ex quibusdam, explicabo distinctio tenetur nam nostrum corrupti vero, pariatur consectetur eveniet odio aliquid quos fuga nihil deserunt! Corporis quisquam, magnam doloremque fugit quasi, quae quo totam error sunt, ab nostrum similique velit laudantium iure quas.
                          </blockquote>
                          <p className="blog-details__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quiLorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quibusdam. Lorem it. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque excepturi cupiditate soluta nisi aperiam illum maxime dolorum. Impedit, quibusdam.</p>
  
                          <div className="blog-details__share mt-4 d-flex align-items-center flex-wrap mb-4">
                              <h5 className="social-share__title mb-0 me-sm-3 me-1 d-inline-block">Share This :</h5>
                              <ul className="social-list blog-details">
                                  <li className="social-list__item"><a href="https://www.facebook.com" className="social-list__link"><i className="fab fa-facebook-f"></i></a> </li>
                                  <li className="social-list__item"><a href="https://www.twitter.com" className="social-list__link"> <i className="fab fa-twitter"></i></a></li>
                                  <li className="social-list__item"><a href="https://www.linkedin.com" className="social-list__link"> <i className="fab fa-linkedin-in"></i></a></li>
                                  <li className="social-list__item"><a href="https://www.pinterest.com" className="social-list__link"> <i className="fab fa-instagram"></i></a></li>
                              </ul>
                          </div>
                     </div>
                  </div>
              </div>
  
              <div className="col-lg-4">
                 
                <div className="blog-sidebar-wrapper">
                    <div className="blog-sidebar">
                        <h5 className="blog-sidebar__title"> Search </h5>
                        <div className="search-box w-100">
                            <form>
                                <div className="form-group pwow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                    <input type="email" autocomplete="off" placeholder=" "  className="form--control mb-3" />
                                    <label className="form--label">Search</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="blog-sidebar">
                        <h5 className="blog-sidebar__title"> New Article</h5>
                        <div className="latest-blog">
                            <div className="latest-blog__thumb">
                                <a href="blog-details.html"> <img src={blogImg1} alt="" /></a>
                            </div>
                            <div className="latest-blog__content">
                                <h6 className="latest-blog__title"><a href="blog-details.html">Sound Everyday Rutine For Your Lorem ipsum dolor sit amet.</a></h6>
                                <span className="latest-blog__date">June 23 202</span>
                            </div>
                        </div>
                        <div className="latest-blog">
                            <div className="latest-blog__thumb">
                                <a href="blog-details.html"> <img src={blogImg1} alt="" /></a>
                            </div>
                            <div className="latest-blog__content">
                                <h6 className="latest-blog__title"><a href="blog-details.html">Lorem ipsum dolor sit amet.</a></h6>
                                <span className="latest-blog__date">June 23 202</span>
                            </div>
                        </div>
                        <div className="latest-blog">
                            <div className="latest-blog__thumb">
                                <a href="blog-details.html"> <img src={blogImg1} alt="" /></a>
                            </div>
                            <div className="latest-blog__content">
                                <h6 className="latest-blog__title"><a href="blog-details.html">Lorem ipsum dolor sit amet.</a></h6>
                                <span className="latest-blog__date">June 23 202</span>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
          </div>
      </div>

  );
}

export default BlogDetails;
