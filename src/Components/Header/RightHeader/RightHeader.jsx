import React from 'react';
import headerImg from "../../../Assets/main.png";
import "./RightHeader.scss"

const RightHeader = () => {
    return (
        <div className="right-header">
            <img src={headerImg} width="95%" alt="" />
        </div>
    )
}

export default RightHeader
