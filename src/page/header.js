
import {useState,useEffect,useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faSun,faBars,faSignIn} from '@fortawesome/free-solid-svg-icons'
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../Assets/logo/logo.png'
import logoDark from '../Assets/logo/dark-logo.png'
import { NavLink,Link } from "react-router-dom";

import userThumb from'../Assets/user/user1.png'

function NavBar({ mode,setMode}) {

// sticky header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 80) {
        header.classList.add('fixed-header');
      } else {
        header.classList.remove('fixed-header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // sidenav
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleDarkModeClick = () => {
    setMode('dark');
  };

  const handleLightModeClick = () => {
    setMode('light');
  };

  // language dropdown
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageRef = useRef(null);

  const handleLanguageClick = () => {
    setIsLanguageDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div className="header-main-area">
        <div className="header" id="header">
          <div className="container position-relative">
            <div className="row">
              <div className="header-wrapper">
                <button className="ham__menu"onClick={handleShow}>
                     <FontAwesomeIcon 
                        icon={faBars} 
                        />
                  </button>
                <div className="header-menu-wrapper align-items-center d-flex">
                  <div className="logo-wrapper">
                    <Link to='/' id="normal-logo" 
                      className={`normal-logo ${mode === 'dark' ? 'hidden' : ''}`}>
                      <img src={logo} alt="logo" />
                    </Link>
                    <Link to='/'  id="dark-logo"
                      className={`dark-logo ${mode === 'dark' ? '' : 'hidden'}`}>
                     <img src={logoDark} alt="logo" />
                    </Link>
                   
                   
                  </div>
                </div>
                <div className="menu-wrapper">
                  <ul className="main-menu">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/About'>About</NavLink></li>
                    <li><NavLink to='/Blog'>Blog</NavLink></li>
                    <li><NavLink to='/Contact'>Contact</NavLink></li>
                  </ul>
                </div>
                <div className="menu-right-wrapper">
                  <ul>
                    <li className="login-registration-list__item">
                      <span className="login-registration-list__icon">
                      </span>
                      <NavLink className="login-registration-list__link" to='/Login'><FontAwesomeIcon icon={faSignIn}/> Login</NavLink>
                      
                    </li>
                    
                    <li>
                      <div className="light-dark-btn-wrap ms-1" id="light-dark-checkbox" >
                      <FontAwesomeIcon 
                        icon={faMoon} 
                        className={`mon-icon ${mode === 'dark' ? 'show' : ''}`} 
                        onClick={handleDarkModeClick}
                        />
                      <FontAwesomeIcon 
                        icon={faSun} 
                        className={`sun-icon ${mode === 'light' ? '' : 'show'}`}
                        onClick={handleLightModeClick}
                      />
                       
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* offcanvas */}
      <Offcanvas show={show} onHide={handleClose}>


      <Offcanvas.Header closeButton>
        <div className="logo">
            <div className="header-menu-wrapper align-items-center d-flex">
            <div className="logo-wrapper">
                <a href="/"
                  id="normal-logo" 
                  className={`normal-logo ${mode === 'dark' ? 'hidden' : ''}`}
                >
                  <img src={logo} alt="logo" />
                </a>
                <a href="/" 
                  id="dark-logo"
                  className={`dark-logo ${mode === 'dark' ? '' : 'hidden'}`}
                  >
                  <img src={logoDark} alt="logo" />
                </a>
              </div>
            </div>
          </div>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <div className="user-info">
              <div className="user-thumb">
                <a href="#">
                  <img src={userThumb} alt="user-thumb" />
                </a>
              </div>
              <a href="#">
                <h4>Anonymous Alex</h4>
              </a>
            </div>
            <ul className="side-Nav">
            <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
              <li>
                <NavLink to='/'> <i className="fa-solid fa-house"></i> Home</NavLink>
              </li>
              <li>
              <NavLink to='/About'><i className="fa-solid fa-circle-info"></i>About</NavLink>
                
              </li>
              <li>
              <NavLink to='/Blog'><i className="fa-regular fa-newspaper"></i> Blog</NavLink>
              </li>
              <li>
              <NavLink to='/Contact'><i class="fa-solid fa-phone"></i> Contact</NavLink>
              </li>
              <li>
              <NavLink to='/Login'><i class="fa-solid fa-right-to-bracket"></i> Login</NavLink>
              </li>
              <li>
              <NavLink to='/Signup'><i class="fa-solid fa-user-plus"></i> Signup</NavLink>
              </li>
            </ul>
        </Offcanvas.Body>
        </Offcanvas>
    </div>
  );
}

export default NavBar;
