import './Promo.css';
import logo from '../../../images/pic__COLOR_landing-logo.png';
import Lebenslauf from '../../../images/Lebenslauf.pdf';

function Promo() {
  const one = <h1>Hallo, mein Name ist</h1>;
  const two = <h2 className="big-heading">Elena Rozhkova</h2>;
  const three = <h3 className="big-heading">Webentwicklerin</h3>;
  const four = (
    <>
      <p className="big-text">
        Meine Leidenschaft liegt in der Schaffung innovativer und benutzerfreundlicher digitaler Lösungen. Mit weitreichenden Kenntnissen in Frontend-Technologien wie
        <span> React</span>,
        <span> JavaScript (ES6)</span>,
        <span> HTML5 </span>
        und
        <span> CSS3 </span>
        sowie
        Backend-Erfahrung mit
        <span> Node.js</span> und <span> Datenbanken</span>, entwickle ich hochwertige Webanwendungen
        .
      </p>
    </>
  );
  const five = (
    <a
      style={{ textDecoration: 'none' }}
      className=""
      href={Lebenslauf}
      target="_blank"
      rel="noopener noreferrer"
    > <button className='menu__button'>Lebenslauf</button>
    </a>
  );

  const items = [one, two, three, four, five];
  return (
    <>
      <section className="promo root__cover ">
        <div className="content ">
          <p className="promo__text promo__text_pos_center">
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </p>

          <img src={logo} alt="logo" className="promo__image promo__image_type_logo" /></div>

      </section >
    </>
  );
}

export default Promo;