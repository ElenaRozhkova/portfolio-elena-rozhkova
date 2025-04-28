import './Portfolio.css';
import pfeil from '../../../images/pfeil.svg';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <>
      <section className="portfolio content" id="portfolio">
        <div className="numbered-heading">Portfolio</div>
        <ul className="portfolio__projects">

          <a href="https://raven51.de/" className="portfolio__project" target='_blank'>
            <div className="portfolio__title">Raven51: Recruiting-Agentur</div>
            <img src={pfeil} alt="pfeil" className="portfolio__link" />
          </a>
          <a href="https://deesdanceclub.de/" className="portfolio__project" target='_blank'>
            <div className="portfolio__title">Dee's Dance Club: Tanzschule</div>
            <img src={pfeil} alt="pfeil" className="portfolio__link" />
          </a>
          <a href="https://marions-events.de/" className="portfolio__project" target='_blank'>
            <div className="portfolio__title">Marion's Events: Eventmanagement-Plattform</div>
            <img src={pfeil} alt="pfeil" className="portfolio__link" />
          </a>
          {/* <Link to="/movies" style={{ textDecoration: 'none' }} className="portfolio__project" target='_blank'>
            <div className="portfolio__title">Single Page Application mit Verwendung einer API zum Abrufen von Filmdaten</div>
            <img src={pfeil} alt="pfeil" className="portfolio__link" />
          </Link>
          {/**/}
          <a href="https://fuldaer-genussfestival.de/" className="portfolio__project" target='_blank'>
            <div className="portfolio__title">Fuldaer Genussfestival: Event-Website</div>
            <img src={pfeil} alt="pfeil" className="portfolio__link" />
          </a>
          <a href="https://jobs.lavatio-gruppe.de/" className="portfolio__project" target='_blank'>
            <div className="portfolio__title">Lavatio Karriereportal – Stellenangebote & Bewerbung</div>
            <img src={pfeil} alt="pfeil" className="portfolio__link" />
          </a>

          <a href="https://web-magazin.vercel.app/" className="portfolio__project" target='_blank'>
            <div className="portfolio__title">Web Magazin App – Moderne Frontend-Lösungen mit Next.js & React</div>
            <img src={pfeil} alt="pfeil" className="portfolio__link" />
          </a>

          <a href="https://elenarozhkova.github.io/chat-app/" className="portfolio__project" target='_blank'>
            <div className="portfolio__title">Realtime Chat App with React, Node.js, Socket.io and MongoDB</div>
            <img src={pfeil} alt="pfeil" className="portfolio__link" />
          </a>
          {/*<a href="https://elenarozhkova.github.io/How-To-Learn-Yandex/" className="portfolio__project" target='_blank'>
            <div className="portfolio__title">How to Learn: Animierte Website</div>
            <img src={pfeil} alt="pfeil" className="portfolio__link" />
          </a>*/}


        </ul>
      </section>
    </>
  );
}

export default Portfolio;