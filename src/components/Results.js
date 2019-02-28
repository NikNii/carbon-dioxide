import React from 'react';
import '../stylesheet.css'

import ResultCard from './ResultCard';


const Results = (props) => {
    if (!props.results.emDone & !props.results.popDone) {
        return null;
    }

    // This makes the lists for the comparison view.
    let resultCards = [];
    if (props.results.indxChange===59){
        let k = 4
        for (let i = 0; i < 47; i++) {
            resultCards.push(
                <li>
                    <h2>{i+1}</h2>
                    <ResultCard 
                            location={props.results.pop[1][k].country.value}
                            year={props.results.pop[1][k].date}
                            emissions={props.results.emission[1][k].value}
                            population={props.results.pop[1][k].value}
                    />
                </li>
            )
            k += 59;
          }
    }

    // This makes the list from the search result
    let k = props.results.index;
    console.log(props.results.pop[1][k].country.value);
    for (let i = 0; i < 59; i++) {
        resultCards.push(
            <li>
                <ResultCard 
                        location={props.results.pop[1][k].country.value}
                        year={props.results.pop[1][k].date}
                        emissions={props.results.emission[1][k].value}
                        population={props.results.pop[1][k].value}
                />
            </li>
        )
        k++;
      }
    return (
        <div>
            <h2>Results</h2>
            <p className="updateInfo">Last updated: {props.results.emission[0].lastupdated}</p>
            <ul>
                {resultCards}
            </ul>
        </div>
        
    )
    
};

Results.defaultProps = {
    results: [],
    index: 0,
    indxChange: 1,
}

export default Results;