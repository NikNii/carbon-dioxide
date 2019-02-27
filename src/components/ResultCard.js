import React from 'react';
import '../stylesheet.css'

const ResultCard = (props) => {
    // const {iconName} = themeConfig[overallWeather] 

    return (
        <div className="card">
            <h3>{props.location} {props.year}</h3>
            <div className="mainData">
                <p className="emission">Emissions: {props.emissions}</p>
                <p className="population">Population: {props.population}</p>
                <p className="relativeData">Emissions per person: {props.emissions/props.population}</p>

            </div>
        </div>
    )
    
};

ResultCard.defaultProps = {
    location: 'Finland',
    year: 2014,
    emissions: 47300.633,
    population: 5461512,
}

export default ResultCard;