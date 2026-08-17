import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__container">

                <Link to="/" className="navbar__logo">
                    WebBuilder
                </Link>

                <nav className="navbar__links" aria-label="Main navigation">
                    <a href="#features">Features</a>
                    <a href="#templates">Templates</a>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#pricing">Pricing</a>
                </nav>

                <div className="navbar__actions">
                    <Link
                        to="/login"
                        className="navbar__login"
                    >
                        Log in
                    </Link>

                    <Link
                        to="/signup"
                        className="navbar__signup"
                    >
                        Sign Up
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default Navbar;