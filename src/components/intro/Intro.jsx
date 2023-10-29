import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>Hello there! I'm Prakhar, a passionate and imaginative Full Stack Developer with a knack for crafting captivating digital experiences. Over the past few months, I've been on a remote adventure, wielding HTML, CSS, JavaScript, React.js, and Node.js to create everything from stunning landing pages to robust APIs. Beyond my professional pursuits, I'm a zealous problem solver who thrives on overcoming challenges. My coding journey has been punctuated by noteworthy achievements, including securing top positions in prominent coding and development hackathons. As a dedicated collaborator, I hold teamwork in high regard and firmly believe that the most remarkable outcomes emerge from the fusion of diverse perspectives. When I'm part of a team, I'm committed to cultivating a positive environment that fosters creativity and sparks innovation.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro