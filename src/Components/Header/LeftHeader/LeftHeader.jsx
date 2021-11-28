import React from 'react'
import "./LeftHeader.scss"
import sunflower from "../../../Assets/sunflower.png"
import leaf1 from "../../../Assets/Path8.png"

const LeftHeader = () => {
    return (
        <div className="left-header">
            <div className="content">
                <div className="messsage">
                    <h1 className="heading">Keep your plants happy with<br/>our <span className="usp">AI powered</span> suite for<br/> your garden
                    <img className="flower"
                     src={sunflower} height="40px" alt=""/></h1>
                </div>
                <div className="cta">
                    <button className="cta-button">Start Now</button>
                    <span className="cta-help">Need help? Contact us now!</span>
                </div>
            </div>
            <img src={leaf1} alt="" className="leaf1" />
        </div>
    )
}

export default LeftHeader
