import './Header.css';

function Header(props) {
  return (
    <>
      <header className="header content">
        {props.children}
      </header>
    </>
  );
}

export default Header;