import { useEffect,useState} from "react";
import WOW from 'wowjs';
import logo from '../Assets/logo/logo.png'
import logoDark from '../Assets/logo/dark-logo.png'
import { animateScroll as scroll } from 'react-scroll';

function Footer({mode}) {

  // tap to top btn function
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // reveal function
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);





  return (
    <div>
      <footer className="footer-area section-bg">
        <div className="footer-top py-115">
          <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="stay-tune-box text-center">
                <h2 className="tune-box-title mb-3">Stay With Us !</h2>
                <p  className="tune-box-subtitle mb-4"> Subscribe to our newsletter for updates, promotions, and exclusive offers. Don't miss out!</p>
                <div className="footer-subscribe-box">
                  <form>
                      <div className="tune-box-input">
                        <input className="form--control footer-input" type="text" placeholder="Email..." />
                      </div>
                      <button className="btn btn--base search-btn ms-3" type="submit">Subscribe</button>
                  </form>    
              </div> 
              </div>
            </div>
          </div>
            <div className="row justify-content-center ">
              <div className="col-xl-4 col-sm-6">
                <div className="footer-item">
                  <div className={`footer-item__logo wow animate__animated animate__fadeInUp`} data-wow-delay="0.2s">
                    <a href="index.html" className={`footer-logo-normal ${mode === 'dark' ? 'hidden' : ''}`} id="footer-logo-normal">
                      <img src={logo} alt="" />
                    </a>
                    <a href="index.html" className={`footer-logo-dark ${mode === 'dark' ? '' : 'hidden'}`} id="footer-logo-dark">
                      <img src={logoDark} alt="" />
                    </a>
                  </div>
                  <p className="footer-item__desc wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.Join them by using our services and grow your business.</p>

                  <ul className="social-list wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                    <li className="social-list__item"><a href="https://www.facebook.com" className="social-list__link"> <i className="fab fa-facebook-f"></i>
                    </a> </li>
                    <li className="social-list__item"><a href="https://www.twitter.com" className="social-list__link active"> <i className="fab fa-twitter"></i></a></li>
                    <li className="social-list__item"><a href="https://www.linkedin.com" className="social-list__link"> <i className="fab fa-linkedin-in"></i></a></li>
                    <li className="social-list__item"><a href="https://www.pinterest.com" className="social-list__link"> <i className="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-6">
                <div className="footer-item">
                  <h5 className="footer-item__title">Company</h5>
                  <ul className="footer-menu mb-4">
                  <li className="footer-menu__item"><a href="#" className="footer-menu__link">Home</a></li>
                    <li className="footer-menu__item"><a href="#" className="footer-menu__link">About Us </a></li>
                    <li className="footer-menu__item"><a href="#" className="footer-menu__link">Privacy Policy</a></li>
                    <li className="footer-menu__item"><a href="#" className="footer-menu__link">Term Of Services</a></li>
                    <li className="footer-menu__item"><a href="#" className="footer-menu__link">Refund Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-6">
                <div className="footer-item">
                  <h5 className="footer-item__title">My Account</h5>
                  <ul className="footer-menu mb-4">
                    <li className="footer-menu__item"><a href="#" className="footer-menu__link">My Account</a></li>
                    <li className="footer-menu__item"><a href="#" className="footer-menu__link">Notification</a></li>
                    <li className="footer-menu__item"><a href="#" className="footer-menu__link">My Offer</a></li>
                    <li className="footer-menu__item"><a href="#" className="footer-menu__link">My Order</a></li>
                    <li className="footer-menu__item"><a href="#" className="footer-menu__link">My Status</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
              <div className="footer-item">
                        <h5 className="footer-item__title">Contact Us !</h5>
                        <div className="footer-contact-info mb-2">
                          <i className="fa-solid fa-mobile-screen-button"></i>
                          <p><span>Call Us</span> <br /><a href="tel:+8800000000000">+880 0000 000 000</a> </p>
                        </div>    
                        <div className="footer-contact-info mb-2">
                          <i className="fa-regular fa-envelope"></i>
                          <p><span>Send Message</span> <br /><a href="mailto:wstacksltd@gmail.com">test@gmail.com</a></p>
                        </div>  
                        <div className="footer-contact-info">
                          <i className="fa-solid fa-location-arrow"></i>
                          <p><span>Address</span> <br />15205 North Kierland Blvd. Suite 100</p>
                        </div>        
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer section-bg py-3">
          <div className="container">
            <div className="row text-center gy-2">
              <div className="col-lg-12">
                <div className="bottom-footer-text"> &copy; Copyright 2023 . All rights reserved.</div>
              </div>

            </div>
          </div>
        </div>
      </footer>
      
      {/* tap to top scroll  btn*/}
      <div>
        {isVisible && (
           <div className="scroll-top scroll-top-button show" onClick={scrollToTop}>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
