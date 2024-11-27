import './NavTab.css';

function NavTab() {
  return (
    <>
      <ul className="navigator">
        <li className="navigator__item navigator__item1"> <a href="#aboutproject" className="navigator_color_white">Über mich</a></li>
        <li className="navigator__item navigator__item2"> <a href="#technologie" className="navigator_color_white">Technologien</a></li>
        <li className="navigator__item navigator__item3"> <a href="#aboutme" className="navigator_color_white">Student</a></li>
      </ul>
    </>
  );
}

export default NavTab;
