import React from 'react'
import logo from "../../Assets/logo.png"
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" className="logo" />
                <menu>
                    <ul>
                        <li>Features</li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                </menu>
            <button>Join now</button>
        </nav>
    )
}

export default Navbar
