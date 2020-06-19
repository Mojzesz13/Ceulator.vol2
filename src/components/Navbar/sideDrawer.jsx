import React from 'react';
import "./sideDrawer.scss";
import background from "../../assets/sideDrawerBackground.jpg"

const SideDrawer = ({show}) => {

    let drawerClasses = "sideDrawerContainer";

    if(!show){
        console.log({show})
        drawerClasses = "sideDrawerContainer open";
    }

    return (
        <div className={drawerClasses} style={{backgroundImage:`url(${background})`}}>
            <ul>
                <li><a href="/">test 1</a></li>
                <li><a href="/">test 2</a></li>
                <li><a href="/">test  13</a></li>
            </ul>
        </div>
    );
};

export default SideDrawer;