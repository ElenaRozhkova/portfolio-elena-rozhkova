import './AboutMe.css';
import photo from '../../../images/myphoto.jpg';

function AboutMe() {
    return (
        <>
            <section className="aboutme content" id="aboutme">
                <h2 className="numbered-heading">Über mich</h2>
                <div className="aboutme__content">
                    <div className="aboutme__info">
                        <div>
                            <p className="big-text">
                                Hallo, ich bin Elena!
                                Seit 2015 fasziniert mich die Welt der Webentwicklung – und seitdem habe ich meine Leidenschaft für Design und Programmierung ständig weiterentwickelt.</p>
                            <p className="big-text">Ich liebe es, visuell ansprechende und benutzerfreundliche Oberflächen zu gestalten, die nicht nur gut aussehen, sondern auch intuitiv funktionieren. Für mich ist Webentwicklung die perfekte Mischung aus Kreativität und Logik – eine Herausforderung, der ich mich mit Begeisterung stelle.</p>
                            {/*  <p className="big-text">Here are a few technologies I’ve been working with recently:</p>/*}
                        </div>
                        <div className="aboutme__links">
                            {/*  <a href="https://www.facebook.com/elena.kuzmina.397" className="aboutme__link">Facebook </a>
                            <a href="https://github.com/ElenaRozhkova" className="aboutme__link">Github </a>*/}
                        </div>
                    </div>
                    <img className="aboutme__photo" src={photo} alt="myphoto" />
                </div>
            </section>
        </>
    );
}

export default AboutMe;