import React from 'react'
import "./LeftHeader.scss"
import sunflower from "../../../Assets/sunflower.png"

const LeftHeader = () => {
    return (
        <div className="left-header">
            <div className="content">
                <div className="messsage">
                    <h1 className="heading">Keep your plants happy with<br/>our <span className="usp">AI powered</span> suite for<br/> your garden
                    <img className="flower"
                     src={sunflower} height="35px" alt=""/></h1>
                </div>
                <div className="cta">
                    <button className="cta-button">Start Now</button>
                    <span className="cta-help">Need help? Contact us now!</span>
                </div>
            </div>
        </div>
    )
}

export default LeftHeader
