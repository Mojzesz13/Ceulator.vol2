import React from 'react';
import "./toolbar.scss";
import hamburger from "../../assets/onion1.png";
import tlo from "../../assets/navBackground";

const Toolbar = (props) => {
    return (
        <header className="toolbar" style={{backgroundImage: "url(" + tlo + ")"}}>
            <nav className="toolbarNavigation">
                <div><img className="hamburger" src={hamburger} alt="onion"/></div>
                <div className="toolbarLogo"><a href="/">Cebulator</a></div>
                <div className="spacer"/>
                <div className="toolbarItems">
                    <ul>
                        <li><a href="/">1</a></li>
                        <li><a href="/">2</a></li>
                        <li><a href="/">13</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Toolbar;