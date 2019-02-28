import React from 'react';
import '../stylesheet.css'

import ResultCard from './ResultCard';


const Results = (props) => {
    console.log('props in results! ', props);
    console.log('pop[1]', props.results.pop[1][0].country.value)
    if (!props.results.emDone & !props.results.popDone) {
        return null;
    }
    // const resultCards = props.results.pop[1].map((result) => {
    //     return (
    //         // <li></li>
    //         <li>
    //             <ResultCard 
    //                 location={props.results.pop[1][{result}].country.value}
    //                 year={props.results.pop[1][{result}].date}
    //                 // emissions={props.results.emission[1][0].value}
    //                 // population={props.results.pop[1][{result}].value}
    //             />
    //         </li>
    //     )
                
    // })
    let resultCards = [];
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
                {/* <li>
                    <ResultCard 
                            location={props.results.pop[1][0].country.value}
                            year={props.results.pop[1][0].date}
                            emissions={props.results.emission[1][0].value}
                            population={props.results.pop[1][0].value}
                    />
                </li> */}
                {resultCards}
            </ul>
        </div>
        
    )
    
};

Results.defaultProps = {
    results: [],
}

export default Results;