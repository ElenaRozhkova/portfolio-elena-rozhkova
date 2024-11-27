import './Main.css';

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



function Main({ loggedIn }) {

  return (
    <div className="root">
      {/*loggedIn ?*/
        <Header >
          <img src={logo} alt="" className="mainlogo" />
          {<nav className="menu__header ">
            <ul className="menu__header-navigator ">
              <li className="navigator__item navigator__item1"> <a href="#aboutme" className="navigator_color_white">Über mich</a></li>
              <li className="navigator__item navigator__item2"> <a href="#technologie" className="navigator_color_white">Technologien</a></li>
              <li className="navigator__item navigator__item3"> <a href="#portfolio" className="navigator_color_white">Portfolio</a></li>
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
          </nav>}
          <div className='side__right'>
            <div className='side__right-email'>
              <a href='mailto:elenaroschkowa@gmx.de'>elenaroschkowa@gmx.de</a>
            </div>
          </div>
        </Header> /*:
        <Header>
          <img src={logo} alt="" className="mainlogo" />
          {<nav className="menu__header">
            <Link to="/signup" className="menu__item">Sign Up</Link>
            <button className="menu__button">
              <Link to="/signin" style={{ textDecoration: 'none' }} className="menu__item menu__item_dark">Sign In</Link>
            </button>
          </nav>}
        </Header>*/
      }
      <Promo />
      <AboutMe />
      <Techs />

      <Portfolio />
    </div>
  );
}

export default Main;