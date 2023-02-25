import React from 'react';
import Home from "./pages/home.js";
import Bios from "./pages/bios.js";
import About from "./pages/about.js";
import Everyone from "./pages/everyone.js";
import NotFound from "./pages/notfound.js";
import Services from "./pages/services.js";

//Logos are sourced from --> https://uxwing.com/tag/social-media-icons/
import fb from "./images/icons/fb.png";
import twitter from "./images/icons/twitter.png";
import insta from "./images/icons/insta.png";
import mail from "./images/icons/mail.png"

//Styling
import "./style/app.scss";
import "./style/header.scss"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './style/navigation.css';

export default function Navigation() {

  return (
    <>
    <div className='contain'>
      <h1 className='header'>Care Karaoke</h1>
    </div>
      <div className={`navbar`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="services-link">
              Services
                <ul className="services-dropdown">
                  <li><Link to="/services/0">Weddings</Link></li>
                  <li><Link to="/services/1">Karaoke</Link></li>
                  <li><Link to="/services/2">DS</Link></li>
                  <li><Link to="/services/3">Corporation</Link></li>
                  <li><Link to="/services/4">Events</Link></li>
                  <li><Link to="/services/5">Parties</Link></li>
                </ul>
          </li>
          <li className="services-link">
                <Link to="/bios">Bios</Link>    
                <ul className="services-dropdown">
                  <li><Link to="/bios/0">Danny</Link></li>
                  <li><Link to="/bios/1">Jackson</Link></li>
                  <li><Link to="/bios/2">Abraham</Link></li>
                  <li><Link to="/bios/3">Nikki</Link></li>
                  <li><Link to="/bios/4">Terri</Link></li>
                  <li><Link to="/bios/5">Maxine</Link></li>
                  <li><Link to="/bios/6">Ashton</Link></li>
                  <li><Link to="/bios/7">Jeff</Link></li>
                  <li><Link to="/bios/8">Shay</Link></li>
                  <li><Link to="/bios/9">Carly</Link></li>
                </ul>
          </li>
          <li><Link to="/about">About Us</Link></li>
          <div className='social-media-container'>
            <div >
              <a className="logo" href={"https://www.facebook.com"}>
                <img alt="facebook" src={fb} /> 
              </a>
              <a className="logo" href={"https://twitter.com"}>
                <img alt="twitter" src={twitter} /> 
              </a>
              <a className='logo' href={"https://www.instagram.com"}>
                <img alt="insta" src={insta} /> 
              </a>
              <a className='logo' href={"https://mail.google.com/mail/u/0/#inbox?compose=new"}>
                <img alt="mail" src={mail} /> 
              </a>
            </div>
            <div>
              <h3>773-773-7773</h3>
            </div>
          </div>
        </ul>
      </div>
      <div className="tabcontent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/bios/:id" element={<Bios />} />
          <Route path="/about" element={<About />} />
          <Route path="/bios" element={<Everyone />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
