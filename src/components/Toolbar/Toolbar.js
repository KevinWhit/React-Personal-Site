import React from 'react';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">Kevin Whitlock</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Skills">About Me</Link></li>
                    {/* <li><Link to="/Contact">Contact</Link></li> */}
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
    
