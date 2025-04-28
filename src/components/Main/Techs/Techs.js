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
          <li className="techs__item"> JavaScript (ES6+)</li>
          <li className="techs__item">React</li>
          <li className="techs__item">HTML5</li>
          <li className="techs__item">CSS3</li>
          <li className="techs__item">WordPress</li>
          <li className="techs__item">Node.js</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">MongoDB</li>
          <li className="techs__item"> MySQL</li>
          <li className="techs__item"> GitHub</li>
          <li className="techs__item"> Render</li>
          <li className="techs__item">Webpack</li>
          <li className="techs__item">Figma</li>
          <li className="techs__item">Postman</li>
        </ul>
      </section>
    </>
  );
}

export default Techs;