import React, { Component } from 'react';

import Card from'./Cards';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Grid } from '@material-ui/core';

import './Cards.css';
import img1 from '../../assets/Homely.jpg';
import img2 from '../../assets/HealthPort.jpg';
import img3 from '../../assets/PersonalTwo.jpg';
import img4 from '../../assets/irpSite.jpg';
import img5 from '../../assets/internationalSite.jpg';
import img6 from '../../assets/dnd.jpg';
import img7 from '../../assets/SVG.jpg';



const CardFeed =props=> {
    
        return(
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card imgsrc={img7} cardTitle="SVG Image Editor - Full-Stack Class Project" 
                        cardText="In my Full-Stack Development class I created an application that allows
                         users to upload and edit SVG images. I created a C library that parses and manipulates
                          the XML in the SVG image. The web GUI interface was created with HTML/CSS and the functionality
                           to interact with the C library was done using JavaScript, jQuery, and Ajax." linkAddress ="https://github.com/KevinWhit/SVG-Editor-2750"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card imgsrc={img2} cardTitle="Health Port - Full-Stack Application"
                         cardText="At the hackathon ConUHacks at Concordia University, I created this application in
                        24 hours, with two other people. Being all of ours first hackathon we were able
                         to demo our website that allowed users to book appointments for their various
                          health care providers. It kept track of your appointments and sent text message
                           reminders. It was built using HTML/CSS, NodeJS, MongoDB, and Twillo API." linkAddress="https://devpost.com/software/healthport"/>
                    </Grid>


                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card imgsrc={img3} cardTitle="Personal Website - React Web-Application" 
                        cardText="I created this personal website to showcase my interests, skills, projects, 
                        and provide employers with a way to contact me. I utilized modular design and best practices
                         to create a well designed production level coded website. I researched UI/UX design principals
                          to make a coherent, AODA compliant, responsive, and attractive site. It is built with ReactJS and CSS." linkAddress="/"/>
                    </Grid>

                </Grid>


                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card imgsrc={img4} cardTitle="IRP University of Guelph - Co-op Work Project" 
                        cardText="For my first Co-op workterm I worked at the University of Guelph,
                         doing Front-End Development and Project Management. I was soley responsible
                          for collecting requirements, turning requirements into user stories, and developing the site.
                          I facilitated the merging of the BFPO and IAR departments to create one unified site.
                          All pages were AODA compliant meeting AA compliance as outlined in WCAG 2.0. I built it with
                          HTML, Drupal, and managed the project with Azure DevOps." linkAddress="/guelphWorkTermReport"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card imgsrc={img5} cardTitle="International Guelph Landing Page - Co-op Work Project"
                         cardText="During my first Co-op workterm at the University of Guelph I was tasked with
                          creating a revamp of the Landing Page for the International Guelph Website.
                           I utilized UI/UX design principals to create a AODA compliant, responsive, attractive design.
                            I used WireFrame.cc, HTML and Drupal to create the page.
                         " linkAddress="https://www.uoguelph.ca/international"/>
                    </Grid>


                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card imgsrc={img6} cardTitle="DND Level Generator - OOP Java Class Project" 
                        cardText="In my Object Oriented class we created four assignments that built off each other. The first one 
                        was general logic to randomly create Dungeon and Dragon rooms, the second was to create an entire level by putting the rooms together, 
                        the third was to refactor and write Junit tests, and the fourth was to put it all toegther and create a graphical interface. I untilized 
                        OO concepts to create well designed classes and methods such as single-responsibility, polymorphism, and abstract classes. I 
                        used JavaFX to create the interface." linkAddress ="https://github.com/KevinWhit/2430-DND-Project"/>
                    </Grid>

                </Grid>


                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card imgsrc={img1} cardTitle="Homely - Android Application" 
                        cardText="At the hackathon DeltaHacks at McMaster University, I created this
                        application in 24 hours, with one other person. After successfully
                         managing our limited time, we demoed our application that allowed users
                         to geolocate homeless people and correctly contact the appropriate charity
                          based on the needs of the individual. It was build using Android Studio, 
                          FireBase, Google Maps API, and Java." linkAddress = "https://devpost.com/software/homely-c42in8"
                        />
                    </Grid>

                </Grid>
            </div>
        );
    
}
export default CardFeed;