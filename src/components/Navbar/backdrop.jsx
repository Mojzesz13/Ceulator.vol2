import React from 'react';
import "./backdrop.scss";
import background from "../../assets/backdropBackground.png"

const Backdrop = ({hide}) => {
    return (
        <div className="backdrop"
             style={{backgroundImage:`url(${background})`}}
             onClick={hide}>
        </div>
    );
};

export default Backdrop;