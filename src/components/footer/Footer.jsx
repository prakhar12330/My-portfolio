import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Prakhar-Singh</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        {/* <li><a href="#experience">Skills</a></li> */}
        <li><a href="#portfolio">Projects</a></li>
        {/* <li><a href="#testimonials">Experience</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/prakhar-singh-652a32208/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/prakhar12330" target="_blank" rel="noreferrer" ><FaGithub /></a>
        <a href="https://leetcode.com/prakhar12330/" target="_blank" rel="noreferrer" ><SiLeetcode /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
