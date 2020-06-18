import React from 'react';
import "./toolbar.scss";
import hamburger from "../../assets/onionHamburger.png";
import background from "../../assets/navBackground";

const Toolbar = ({show}) => {
    return (
        <header className="toolbar" style={{backgroundImage: `url("${background}")`}}>
            <nav className="toolbarNavigation">
                <div><img className="hamburger" src={hamburger} alt="onion" onClick={show}/></div>
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