import React from 'react';
import './stylesheet.css'

const ResultCard = (props) => {
    // const {iconName} = themeConfig[overallWeather] 

    return (
        <div className="card">
            <h3>Place Name</h3>
            <div className="mainData">
                <p className="location">Location</p>
                <p className="emission">X</p>
            </div>
        </div>
    )
    
};

export default ResultCard;