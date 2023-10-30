

import { useEffect } from "react";
import WOW from 'wowjs';

import userThumb1 from '../Assets/user/user1.png'

import userThumb2 from '../Assets/user/user2.png'

import userThumb3 from '../Assets/user/user3.png'
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';


function TestemonilSection() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };

  return (

    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-content">
            <h2 className="section-title mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">Client Say</h2>
            <div className="title-btm-border mb-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s"></div>
          </div>
        </div>
      </div>
      <div className="row gy-4">
        <Carousel
          responsive={responsive}
          itemClass="carousel-item-padding"
          showDots={false}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          <div className="col-lg-12">
            <div class="testimonial-card">
              <div class="content">
                <p class="discription">“ The passage experienced a surge in popularity during the serts when Letraiton their dry-transfer again during Continually repurpose proactive bandwidth whereas “</p>
              </div>
              <div class="user-info">
                <div class="user-thumb">
                  <img src={userThumb1} alt="..." />
                  <span class="tag">
                    <i class="fa-solid fa-quote-right"></i>
                  </span>
                </div>
                <div class="user-description">
                  <h6 class="user-name">Leslie Alexander</h6>
                  <p class="user-title">Web Developer</p>
                </div>
                <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div class="testimonial-card">
              <div class="content">
                <p class="discription">“ The passage experienced a surge in popularity during the serts when Letraiton their dry-transfer again during Continually repurpose proactive bandwidth whereas “</p>
              </div>
              <div class="user-info">
                <div class="user-thumb">
                  <img src={userThumb2} alt="..." />
                  <span class="tag">
                    <i class="fa-solid fa-quote-right"></i>
                  </span>
                </div>
                <div class="user-description">
                  <h6 class="user-name">Leslie Alexander</h6>
                  <p class="user-title">Web Developer</p>
                </div>
                <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div class="testimonial-card">
              <div class="content">
                <p class="discription">“ The passage experienced a surge in popularity during the serts when Letraiton their dry-transfer again during Continually repurpose proactive bandwidth whereas “</p>
              </div>
              <div class="user-info">
                <div class="user-thumb">
                  <img src={userThumb3} alt="..." />
                  <span class="tag">
                    <i class="fa-solid fa-quote-right"></i>
                  </span>
                </div>
                <div class="user-description">
                  <h6 class="user-name">Leslie Alexander</h6>
                  <p class="user-title">Web Developer</p>
                </div>
                <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div class="testimonial-card">
              <div class="content">
                <p class="discription">“ The passage experienced a surge in popularity during the serts when Letraiton their dry-transfer again during Continually repurpose proactive bandwidth whereas “</p>
              </div>
              <div class="user-info">
                <div class="user-thumb">
                  <img src={userThumb1} alt="..." />
                  <span class="tag">
                    <i class="fa-solid fa-quote-right"></i>
                  </span>
                </div>
                <div class="user-description">
                  <h6 class="user-name">Leslie Alexander</h6>
                  <p class="user-title">Web Developer</p>
                </div>
                <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div class="testimonial-card">
              <div class="content">
                <p class="discription">“ The passage experienced a surge in popularity during the serts when Letraiton their dry-transfer again during Continually repurpose proactive bandwidth whereas “</p>
              </div>
              <div class="user-info">
                <div class="user-thumb">
                  <img src={userThumb3} alt="..." />
                  <span class="tag">
                    <i class="fa-solid fa-quote-right"></i>
                  </span>
                </div>
                <div class="user-description">
                  <h6 class="user-name">Leslie Alexander</h6>
                  <p class="user-title">Web Developer</p>
                </div>
                <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div class="testimonial-card">
              <div class="content">
                <p class="discription">“ The passage experienced a surge in popularity during the serts when Letraiton their dry-transfer again during Continually repurpose proactive bandwidth whereas “</p>
              </div>
              <div class="user-info">
                <div class="user-thumb">
                  <img src={userThumb2} alt="..." />
                  <span class="tag">
                    <i class="fa-solid fa-quote-right"></i>
                  </span>
                </div>
                <div class="user-description">
                  <h6 class="user-name">Leslie Alexander</h6>
                  <p class="user-title">Web Developer</p>
                </div>
                <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div class="testimonial-card">
              <div class="content">
                <p class="discription">“ The passage experienced a surge in popularity during the serts when Letraiton their dry-transfer again during Continually repurpose proactive bandwidth whereas “</p>
              </div>
              <div class="user-info">
                <div class="user-thumb">
                  <img src={userThumb1} alt="..." />
                  <span class="tag">
                    <i class="fa-solid fa-quote-right"></i>
                  </span>
                </div>
                <div class="user-description">
                  <h6 class="user-name">Leslie Alexander</h6>
                  <p class="user-title">Web Developer</p>
                </div>
                <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>

        </Carousel>


      </div>
    </div>
  );
}

export default TestemonilSection;
