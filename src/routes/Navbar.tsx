import { useState, useEffect } from "react";

const Navbar = () => {
    const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.scrollY >= 10) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed);

    return (
        <div className={fix ? "navbar-area fixed" : "navbar-area"}>
            <h2>Logo</h2>
            <div className="nav">
                <div className="nav-item"><a href="">History</a></div>
                <div className="nav-item"><a href="">Characters</a></div>
                <div className="nav-item"><a href="">More</a></div>
            </div>
            <a href=""><button>naosei</button></a>
        </div>
    );
};

export default Navbar;
