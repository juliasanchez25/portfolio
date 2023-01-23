import { useState } from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navbar ? 'navbar-area nav-active' : 'navbar-area'}>
            <h2>Logo</h2>
            <div className="nav-container">
                <div className="nav-item"><a href="">Portfolio</a></div>
                <div className="nav-item"><a href="">Skills</a></div>
                <div className="nav-item"><a href="">About me</a></div>
            </div>
            <a href=""><button>Contact</button></a>
        </div>
    );
};

export default Navbar;
