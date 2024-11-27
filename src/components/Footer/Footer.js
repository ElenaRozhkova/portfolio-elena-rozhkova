import './Footer.css';
import IconLinkedin from './LinkedIn';
import IconGitHub from './github';
import IconXing from './xing'

function Footer() {
    return (
        <footer className="footer content">
            <div className="footer__title"></div>
            <div className="footer__links">
                <p className="footer__copyright"> &copy; {new Date().getFullYear()}</p>
                <nav className="menu menu_type_mobile">
                    <a href="https://www.linkedin.com/in/elena-rozhkova-42456ba9/" target="_blank" className="footer__link" >
                        <IconLinkedin /></a>
                    <a href="https://www.xing.com/profile/Elena_Rozhkova3/web_profiles" target="_blank" className="footer__link" >
                        <IconXing />
                    </a>
                    <a href="https://github.com/ElenaRozhkova" target="_blank" className="footer__link" >
                        <IconGitHub />
                    </a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;