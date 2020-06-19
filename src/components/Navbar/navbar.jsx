import React, {useState} from 'react';

import Toolbar from "./toolbar";
import SideDrawer from "./sideDrawer";
import Backdrop from "./backdrop";

const Navbar = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(prevState => (!prevState) )
    }

    const backDropClickHandler = () => {
        setSideDrawerOpen(false)
    }

    let backdrop;

    if (sideDrawerOpen) {
        backdrop = <Backdrop hide={backDropClickHandler}/>
    }

    return (
        <div>
            <Toolbar show={drawerToggleClickHandler}/>
            <SideDrawer show={sideDrawerOpen}/>
            {backdrop}
        </div>
    );
};

export default Navbar;