import React from 'react';
import './Home.css';
import img1 from '../assets/email.png';
import img2 from '../assets/linkedin.png';
import pdf from '../assets/KevinWhitlockResumeUpdated.pdf';
import { Link } from 'react-router-dom';


const home = props =>{
    return(
    <div className="home__header">


        <div className="container">
            <div className="sub-container">

                <p className ="intro__text">Hello! My name is</p>
                <p className = "name__text">Kevin Whitlock</p>
                <p className="lead__text">A Software Developer and Student <br/>based in Guelph, ON, Canada</p> 

            </div>
        </div>

        <div className="container">
            <div className="sub-container">
                <a href="mailto:kwhitloc@uoguelph.ca">
                    <img className="email" src={img1}/>
                </a>
                <a href="https://www.linkedin.com/in/kevin-whitlock-4188b918a/">
                    <img className="link" src={img2}/>
                </a>
            </div>

            <div className="sub-container">
                
            </div>
        </div>

        <div className="container">
            <div className="sub-container">
            <Link to="/Skills"><button className ="button" >About Me</button></Link>
                
                <a href={pdf} download="Kevin Witlock Resume">
                    <button className ="button2">Resume</button>
                </a>
            </div>


        </div>

    </div>
    );
};

export default home;