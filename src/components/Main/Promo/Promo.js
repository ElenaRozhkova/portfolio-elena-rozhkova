import './Promo.css';
import React from 'react';
import logo from '../../../images/pic__COLOR_landing-logo.png';
import Lebenslauf from '../../../images/Lebenslauf.pdf';
import Anime, { anime } from 'react-anime';

function Promo() {
  const items = [
    <h1 key="1">Hallo, mein Name ist</h1>,
    <h2 key="2" className="big-heading">Elena Rozhkova</h2>,
    <h3 key="3" className="big-heading">Webentwickler</h3>,
    <p key="4" className="big-text">
      Meine Leidenschaft liegt in der Schaffung innovativer und benutzerfreundlicher digitaler Lösungen. Mit weitreichenden Kenntnissen in Frontend-Technologien wie
      <span> React</span>, <span> JavaScript (ES6)</span>, <span> HTML5 </span> und
      <span> CSS3 </span> sowie Backend-Erfahrung mit <span> Node.js</span> und <span> Datenbanken</span>,
      entwickle ich hochwertige Webanwendungen.
      Zusätzlich setze ich moderne und ansprechende Webseiten mit WordPress um und verbinde dabei Flexibilität mit einem effizienten Content-Management.
    </p>,
    <a key="5" style={{ textDecoration: 'none' }} href={Lebenslauf} target="_blank" rel="noopener noreferrer">
      <button className="menu__button">Lebenslauf</button>
    </a>
  ];

  return (
    <section className="promo root__cover">
      <div className="content">
        <div className="promo__text promo__text_pos_center">
          <Anime
            opacity={[0, 1]}
            translateY={[70, 0]} // Чуть больше смещение для более плавного появления
            scale={[0.98, 1]}   // Меньшее масштабирование для плавности
            easing="easeOutSine" // Более мягкая кривая анимации
            duration={2000}      // Больше времени для появления
            delay={anime.stagger(300, { start: 500 })} // Больше интервал между элементами
          >
            {items}
          </Anime>
        </div>
        <Anime
          opacity={[0, 1]}
          translateY={[30, 0]} // Лёгкий подъём логотипа
          scale={[0.95, 1]}
          easing="easeOutSine"
          duration={1800}
          delay={2500} // Логотип появляется после текста
        >
          <img src={logo} alt="logo" className="promo__image promo__image_type_logo" />
        </Anime>
      </div>
    </section>
  );
}

export default Promo;
