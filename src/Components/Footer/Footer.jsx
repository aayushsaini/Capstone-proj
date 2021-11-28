import React from 'react'
import "./Footer.scss"
import image from "../../Assets/bigcta.png"
import leaf7 from "../../Assets/Path5.png"
import leaf8 from "../../Assets/Path7.png"
import leaf9 from "../../Assets/Path8.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={leaf7} className="leaf7" alt="" />
            <img src={leaf8} className="leaf8" alt="" />
            <div className="cta">
                <img src={image} alt="" />
                <span>Let's get started with your<br />New garden management suite for FREE!<br/>
                <button>Sign up now</button>
                </span>
            </div>
            <img src={leaf9} className="leaf9" alt="" />
        </div>
    )
}

export default Footer
