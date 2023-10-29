import React from 'react';
import IMG1 from '../../assets/xcrypto.png';
import IMG2 from '../../assets/hedwig.png';
import IMG3 from '../../assets/tv.png';
import IMG4 from '../../assets/yelp.png';
import IMG5 from '../../assets/anmldtcn.png';
import IMG6 from '../../assets/pngpog.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Xcrypto',
      img: IMG1,
      description:
         'A data-driven web application, functioning as an all-encompassing cryptocurrency encyclopedia',
      technologies: 'Coingecko API | React | Chakra UI',
      link: 'http://xcrypto-liart.vercel.app/',
      github: 'https://github.com/prakhar12330/xcrypto',
    },
    {
      id: 2,
      title: 'Yelp Camp',
      img: IMG4,
      description:
        'A platform for users to create and review campgrounds',
      technologies: 'React | Node | MongoDB | REST API',
      link: 'https://yelpcamp-dwzt.onrender.com/',
      github: 'https://github.com/prakhar12330/Yelp-Camp',
    },
    {
      id: 3,
      title: 'Hedwig Twirl',
      img: IMG2,
      description: 'A Full Stack Chatting App that utilizes Socket.io for real-time communication.',
      technologies: 'React | Node | MongoDB | Socket.io',
      link: 'https://github.com/prakhar12330/Hedwig-s-Twirl',
      github: 'https://github.com/prakhar12330/Hedwig-s-Twirl',
    },
    {
      id: 4,
      title: 'WSN Animal Intrusion Detection System',
      img: IMG5,
      description:
        'A WSN application for animal intrusion detection and crop protection.This project is under development',
      technologies: 'IoT | Deep Learning',
      link: 'https://www.kaggle.com/prakharsingh12330/animal-detection-g126/edit',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 5,
      title: 'TV Show Search',
      img: IMG3,
      description:
        'This is a demo web app that allows you to type the name of a tv show in the search bar and get back the poster images of those tv shows',
      technologies: 'HTML | JavaScript | CSS | API | Axios ',
      link: 'https://github.com/prakhar12330/TV-Show-Search',
      github: 'https://github.com/prakhar12330/TV-Show-Search',
    },
    
    {
      id: 6,
      title: 'Ping Pong',
      img: IMG6,
      description:
        'This is a score keeper build with HTML, CSS and Javascript.',
      technologies: 'JavaScript | HTML | CSS',
      link: 'https://github.com/prakhar12330/Ping-Pong-Score-Keeper',
      github: 'https://github.com/prakhar12330/Ping-Pong-Score-Keeper',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Project Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
