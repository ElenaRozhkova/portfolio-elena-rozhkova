import React, { useState, useEffect } from 'react';
import './Main.css';
import { Link } from 'react-scroll';
import Anime, { anime } from 'react-anime';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from './../Header/Header';

import logo from '../../images/logo__COLOR_main-1.svg';
import Lebenslauf from '../../images/Lebenslauf.pdf';
import Hero from './Hero/Hero';
import CustomLogo from './CustomLogo/CustomLogo';

function Main({ loggedIn }) {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 7500); // 6000ms delay + 1500ms duration

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="root">
      <Header>
        <CustomLogo />
        <nav className="menu__header ">
          <ul className="menu__header-navigator ">
            <Anime
              easing="easeInSine"
              duration={1200}
              delay={anime.stagger(250, { start: 10 })}
              translateY={[30, 0]}
              opacity={[0, 1]}
            >

              <li className="navigator__item navigator__item1">
                <Link className="navigator_color_white"
                  to="aboutme"
                  smooth={true}
                  duration={1000} // Adjust duration for slower scrolling
                  offset={-70} // Optional: Adjust for fixed headers
                >
                  Über mich
                </Link>
              </li>
              <li className="navigator__item navigator__item2">
                <Link className="navigator_color_white"
                  to="technologie"
                  smooth={true}
                  duration={1000} // Adjust duration for slower scrolling
                  offset={-70} // Optional: Adjust for fixed headers
                >
                  Technologien
                </Link>
              </li>
              <li className="navigator__item navigator__item3">
                <Link className="navigator_color_white"
                  to="portfolio"
                  smooth={true}
                  duration={1000} // Adjust duration for slower scrolling
                  offset={-70} // Optional: Adjust for fixed headers
                >
                  Portfolio
                </Link>
              </li>
            </Anime>
          </ul>
          <a
            style={{ textDecoration: 'none' }}
            className="menu__item menu__item_dark"
            href='mailto:elenaroschkowa@gmx.de'
            rel="noopener noreferrer"
          >
            <button className="menu__button">
              E-Mail senden
            </button>
          </a>
        </nav>
        <div className='side__right'>
          <div className='side__right-email'>
            <a href='mailto:elenaroschkowa@gmx.de'>elenaroschkowa@gmx.de</a>
          </div>
        </div>
      </Header>
      <Promo />
      <AboutMe />
      <Techs />
      <Portfolio />
    </div>
  );
}

export default Main;