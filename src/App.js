import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./page/about";
import Contact from "./page/contact";
import NavBar from './page/header';
import Footer from './page/footer';
import Home from './page/home';
import Blog from "./page/blog";
import Login from "./page/login";
import SignIn from "./page/signin";
import BlogDetails from "./page/blogDetails";


function App() {

  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('mode', mode);
  }, [mode]);


  return (
    <>
      <Router>
        <NavBar
          mode={mode}
          setMode={setMode}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />

          <Route path='/Blog' element={<Blog />} />
          <Route path='/BlogDetails' element={<BlogDetails />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signin' element={<SignIn />} />
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
