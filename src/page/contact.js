import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import WOW from 'wowjs';



function Contact() {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);


  return (
    <div className="py-115">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className="section-content">
                    <h2 className="section-title mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">User Benefit</h2>
                    <div className="title-btm-border mb-3 wow animate__animated animate__fadeInUp"  data-wow-delay="0.3s"></div>
                </div>
            </div>
        </div>
        <div className="row gy-4 py-80">
            <div className="col-lg-6 justify-content-center d-flex flex-column">
                <div className="get-in-touch-box wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                    <div className="get-in-touch-thumb">
                        <img src="assets/images/common/get-intouch.png" alt="contact-thumb" />
                    </div>
                    <div className="get-in-content mb-4">
                        <h3 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">Get In Touch</h3>
                        <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">Thank you for visiting our website! We would love to hear from you and assist you with any questions, feedback, or inquiries you may have.</p>
                    </div>
                    <div className="info-item mb-4">
                        <h6 className="title wow animate__animated animate__fadeInUp" data-wow-delay="0.6s"><i className="fa-solid fa-phone"></i> Phone</h6>
                        <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.7s"><a href="tel:+8800000000000">+880 0000 000 000</a></p>
                    </div>
                    <div className="info-item mb-4">
                        <h6 className="title wow animate__animated animate__fadeInUp" data-wow-delay="0.8s"><i className="fa-regular fa-envelope"></i> Email</h6>
                        <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.9s"><a href="mailto:wstacksltd@gmail.com">wstacksltd@gmail.com</a></p>
                    </div>
                    <div className="info-item mb-4">
                        <h6 className="title wow animate__animated animate__fadeInUp" data-wow-delay="01s"><i className="fa-regular fa-clock"></i> We are Available 24/7</h6>
                        <p className="wow animate__animated animate__fadeInUp" data-wow-delay="1.1s">Any time you can talk us.</p>
                    </div>
                    <div className="info-item">
                        <h6 className="title wow animate__animated animate__fadeInUp" data-wow-delay="01s"><i className="fa-solid fa-location-dot"></i> Address</h6>
                        <p className="wow animate__animated animate__fadeInUp" data-wow-delay="1.1s">31 house,Road-20,Sector-11,Uttara,Dhaka-1230</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="get-in-touch wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                    <h3 className="get-in-touch-title">Let's Talk</h3>
                    <div className="contact-form">
                        <form>
                            <div className="mb-4">
                            <div className="form-group wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                <input type="email" autocomplete="off" placeholder=" "  className="form--control" />
                                <label className="form--label">Name</label>
                            </div>
                            </div>
                            <div className="mb-4">
                            <div className="form-group wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                <input type="email" autocomplete="off" placeholder=" "  className="form--control" />
                                <label className="form--label">Email</label>
                            </div>
                            </div>
                            <div className="mb-4">
                            <div className="form-group wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                <input type="email" autocomplete="off" placeholder=" "  className="form--control" />
                                <label className="form--label">Subject</label>
                            </div>
                            </div>
                            <div className="mb-4">
                                <div className="form-group wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                    <textarea className="form--control" placeholder=""></textarea>
                                    <label className="form--label">Message</label>
                                </div>
                            </div>
                            <button className="btn btn--base"><i className="fa-regular fa-paper-plane"></i> Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="map-section">
        <div className="map-box">
            <iframe loading="lazy" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom"></iframe>
        </div>
    </div>
    </div>
  );
}

export default Contact;
