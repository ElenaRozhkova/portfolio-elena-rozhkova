import './Techs.css';

function Techs() {
  return (
    <>
      <section className="techs content" id="technologie">
        <h3 className="numbered-heading">Technologien</h3>
        {/*<h2 className="techs__title content">7 technologies</h2>
        <p className="techs__subtitle content big-text">During this frontend engineering course we learned the following technologies applied in the final project.</p>
*/}
        <ul className="techs__items content">
          <li className="techs__item">Wordpress</li>
          <li className="techs__item">HTML5</li>
          <li className="techs__item">CSS3</li>
          <li className="techs__item">JS6</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </section>
    </>
  );
}

export default Techs;