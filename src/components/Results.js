import React from 'react';
import '../stylesheet.css'

import ResultCard from './ResultCard';


const Results = (props) => {
    // const {iconName} = themeConfig[overallWeather] 
    // {this.state.emData[0].lastupdated}
    return (
        <div>
            <p className="updateInfo">Last updated: 2019-01-30</p>
            <ul>
                <li><ResultCard/></li>
                <li><ResultCard/></li>
                <li><ResultCard/></li>
                <li><ResultCard/></li>
                <li><ResultCard/></li>
            </ul>
        </div>
        
    )
    
};

Results.defaultProps = {
    results: [],
}

export default Results;