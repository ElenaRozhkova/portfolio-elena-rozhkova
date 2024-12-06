import React from "react";
import './Navigation.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo__COLOR_main-1.svg';
import menu from '../../images/menu.svg';
import NavForm from "../NavForm/NavForm";
import CustomLogo from "../Main/CustomLogo/CustomLogo";

function Navigation({ setOnForm }) {
  const [form, setForm] = React.useState(false);

  const onOpen = () => {
    setForm(!form);
    setOnForm(true);
  }

  const closeForm = () => {
    setForm(false);
    setOnForm(false);
  }

  return (
    <div className={`content navigation ${form ? "navigation_type_dark" : ""}`} >

      <CustomLogo />
      <nav className="menu__header menu__header_size menu__header_type_desktop">
        <Link to="/movies" style={{ textDecoration: 'none' }}><div className="menu__item-movies ">Movies</div></Link>
        <Link to="/saved-movies" style={{ textDecoration: 'none' }}><div className="menu__item-movies  menu__item_style_size">Saved movies</div></Link>
        {/*<Link to="/profile" style={{ textDecoration: 'none' }}><button className="menu__button-movies">
                            <div to="/profile" className="menu__item-movies menu__item_account_size">Account</div> 
                            <button className="menu__item-account_round" />
                        </button>
                    </Link>*/}
      </nav>
      <div className="menu__header_type_tablet" onClick={onOpen}>
        <img className="menu__image" src={menu} alt="menu" />
      </div>
      <NavForm form={form} closeForm={closeForm} />
    </div>
  );
}

export default Navigation;