import React, { useState, useEffect } from 'react';
import './Main.css';
import { Link } from 'react-scroll';
import Promo from './Promo/Promo';
import AboutMe from './AboutMe/AboutMe';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Header from './../Header/Header';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import CustomLogo from './CustomLogo/CustomLogo';

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="root">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header>
            <CustomLogo />
            <nav className="menu__header">
              <ul className="menu__header-navigator">
                <li className="navigator__item">
                  <Link
                    className="navigator_color_white"
                    to="aboutme"
                    smooth={true}
                    duration={3000}
                    offset={-70}
                  >
                    Über mich
                  </Link>
                </li>
                <li className="navigator__item">
                  <Link
                    className="navigator_color_white"
                    to="technologie"
                    smooth={true}
                    duration={1000}
                    offset={-70}
                  >
                    Technologien
                  </Link>
                </li>
                <li className="navigator__item">
                  <Link
                    className="navigator_color_white"
                    to="portfolio"
                    smooth={true}
                    duration={1000}
                    offset={-70}
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
              <a
                style={{ textDecoration: 'none' }}
                className="menu__item menu__item_dark"
                href="mailto:elenaroschkowa@gmx.de"
                rel="noopener noreferrer"
              >
                <button className="menu__button">
                  E-Mail senden
                </button>
              </a>
            </nav>
            <div className="side__right">
              <div className="side__right-email">
                <a href="mailto:elenaroschkowa@gmx.de">
                  elenaroschkowa@gmx.de
                </a>
              </div>
            </div>
          </Header>
          <section id="promo"><Promo /></section>
          <section id="aboutme"><AboutMe /></section>
          <section id="technologie"><Techs /></section>
          <section id="portfolio"><Portfolio /></section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Main;
