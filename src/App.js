import React, {Component} from 'react';
import { render } from '@testing-library/react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Home from './pages/Home';
import GuelphReport from './pages/GuelphWorkTermReport';
import {Route, Link} from 'react-router-dom';


class App extends Component {
  state = {
    SideDrawerOpen: false
  };
  
  drawerToggleClickHandler =()=>{
    this.setState((prevState) =>{ 
      return {SideDrawerOpen:!prevState.SideDrawerOpen};
    });
  };

  backdropClickHandler = () =>{
    this.setState({SideDrawerOpen: false});
  };

  render(){
    let backdrop;

    if(this.state.SideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div style={{height:'100%'}}>

        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.SideDrawerOpen}/>
        {backdrop}

        <Route exact path="/" component ={Home}/>
        <Route exact path= "/Contact" component ={Contact}/>
        <Route exact path= "/Skills" component ={Skills}/>
        <Route exact path= "/Projects" component ={Projects}/>
        <Route exact path= "/GuelphWorkTermReport" component ={GuelphReport}/>

      </div>
    );
  }
}

export default App;
