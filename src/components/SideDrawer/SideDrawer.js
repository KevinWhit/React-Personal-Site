import React from 'react';

import './SideDrawer.css'
import { Link } from 'react-router-dom';


const sideDrawer = props =>{
    let drawerClasses ='side-drawer';
    if(props.show){
        drawerClasses ='side-drawer open';
    }
    return (
        <nav className={drawerClasses}> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Skills">About Me</Link></li>
                {/* <li><Link to="/Contact">Contact</Link></li> */}
            </ul>
        </nav>
    );
};

export default sideDrawer;