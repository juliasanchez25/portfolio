import React from "react";

const Navbar = () => {
    return (
        <div className="navbar-area">
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
