import React from 'react';
import './Skills.css';
import { Grid } from '@material-ui/core';

const skills = props =>(
    <div className = "skills__header">
        
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <div className = "item">
                    <h2>Education</h2>
                    <h3>School:</h3>
                    <p>University of Guelph</p>
                    <h3>Major:</h3>
                    <p>Bachelor of Computing, Computer Science (Co-op)</p>     
                    <h3>Minor:</h3>
                    <p>University of Guelph</p>
                </div>    
            </Grid>

            <Grid item xs={12} sm={4}>
                <div className = "item">
                    <h2>Skills</h2>
                    <h3>Programming:</h3>
                    <p>Java, C/C++, HTML/CSS, JavaScript, ReactJS, C#, Python</p>
                    <h3>Back-End/Devops:</h3>
                    <p>Git, Make, JSON, FireBase, XML, Azure Devops, Ticketing Systems</p>
                </div>
            </Grid>

            <Grid item xs={12} sm={4}>
                <div className = "item">
                    <h2>Experience</h2>
                    <h3>Full-Stack Developer Co-op - PerkinElmer:</h3>
                    <p>Implemented cloud based web-solutions for clinical products</p>
                    <h3>Project Managment/UI Co-op - University of Guelph (CCS):</h3>
                    <p>Facilitated the merger of IAR and BFPO department and implemented a new website</p>
                    <h3>Field Service Technician - Bell Canada:</h3>
                    <p>Installed Fibre Optic homephone, Tv, and internet</p>
                </div>
            </Grid>

        </Grid>

        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <div className = "item">
                    <h2>Tools</h2>
                    <h3>Programming Tools</h3>
                    <p>vsCode, Visual Studio, Andriod Studio, pyCharm</p>
                    <h3>Programming Tools</h3>
                    <p>Windows, Linux, MacOs</p>
                </div>
            </Grid>

            <Grid item xs={12} sm={4}>
                <div className = "item">
                    <h2>Interests</h2>
                    <h3>Full-Stack Development</h3>
                    <h3>Project Managment</h3>
                    <h3>Website Accessibility</h3>
                    <h3>Personal Fitness</h3>
                </div>
            </Grid>

            <Grid item xs={12} sm={4}>
                <div className = "item">
                    <h2>Extra-Curriculars</h2>
                    <h3>Delta Hacks - 2020</h3>
                    <h3>ConUHacks - 2019</h3>
                    <h3>Google Flutter Workshop - 2019</h3>
                    <h3>Android Dev Summit - 2018</h3>
                </div>
            </Grid>

        </Grid>
        

    </div>
);

export default skills;