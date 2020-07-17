import React from 'react';


import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Cards.css'
const card = props =>{
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="img1" className="card-img-top"/>
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title">{props.cardTitle}</h4>
                <p className="card-text text-secondary">
                    {props.cardText}
                </p>
                <a href={props.linkAddress} className="btn btn-outline-success">View</a>
            </div>
        </div>
        
    );
};

export default card;