import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import './style.css';
function Navbar() {

    return (
        <header>
            <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/DavidSiqueiradosSantos/DSMovie.git">
                    <div className="dsmovie-concat-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/David556</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;