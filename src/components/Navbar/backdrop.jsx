import React from 'react';
import "./backdrop.scss";
import background from "../../assets/backdropBackground.png"

const Backdrop = ({show}) => {
    return (
        <div className="backdrop"
             style={{backgroundImage:`url(${background})`}}
             onClick={show}>
        </div>
    );
};

export default Backdrop;