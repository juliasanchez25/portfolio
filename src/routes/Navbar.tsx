import { useState, useEffect } from "react";

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
                <div className="nav-item"><a href="">History</a></div>
                <div className="nav-item"><a href="">Characters</a></div>
                <div className="nav-item"><a href="">More</a></div>
            </div>
            <a href=""><button>naosei</button></a>
        </div>
    );
};

export default Navbar;
