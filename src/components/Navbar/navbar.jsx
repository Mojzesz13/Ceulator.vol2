import React, {useState} from 'react';

import Toolbar from "./toolbar";
import SideDrawer from "./sideDrawer";
import Backdrop from "./backdrop";


const Navbar = () => {
    const[sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen)
    }

    let sideDrawer;
    let backdrop;

    if(sideDrawerOpen) {
        sideDrawer = <SideDrawer show={drawerToggleClickHandler}/>
        backdrop = <Backdrop show={drawerToggleClickHandler}/>
    }

    return (
        <div>
            <Toolbar show={drawerToggleClickHandler}/>
            {sideDrawer}
            {backdrop}
        </div>
    );
};

export default Navbar;