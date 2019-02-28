import React from 'react';
import '../stylesheet.css'

const ResultCard = (props) => {
    // const {iconName} = themeConfig[overallWeather] 

    return (
        <div className="card">
            <h3>{props.location} in {props.year}</h3>
            <ul className="mainData">
                <li className="emission">Emissions:  <p>{props.emissions}</p></li>
                <li className="population">Population:  <p> {props.population}</p> </li>
                <li className="relativeData">Emissions per person: <p> {props.emissions/props.population}</p> </li> 

            </ul>
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