// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Loading from './components/Loading';
import Results from './components/Results';

class App extends React.Component{
    state = {
        emData: [],
        population: [],
        today: new Date().getDay(),
        time: new Date().toLocaleTimeString(),
        lat: null, lng: null,
        errorMessage: ''
};
    
    componentDidMount(){
           this.getCoords();
           this.getData();
    }
    async getData(){
        const response = await axios.get('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL', {
            params: {
                format: 'json',
                per_page: 30000, // max amount = 15576, as of 27.02.2019. 15k = 40 years of data.
            }

        });
        console.log(response);
        this.setState({ population: response.data });
        const response2 = await axios.get('http://api.worldbank.org/v2/country/all/indicator/EN.ATM.CO2E.KT', {
            params: {
                format: 'json',
                per_page: 30000, // max amount = 15576, as of 27.02.2019. 15k = 40 years of data.
            }

        });
        console.log(response2);
        this.setState({ emData: response2.data });
    }
    async getCoords(){
        await window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, 
                                        lng: position.coords.longitude}),
            error =>    this.setState({ errorMessage:error.message })
        );
    }
    renderContent(){
        // Checks whether there's an error
        if(this.state.errorMessage && !this.state.lat && !this.state.lng){
            return <div>
                <Loading message={this.state.errorMessage}/>
            </div>
        }
        // Checks if the location has been received
        if(!this.state.errorMessage && this.state.lat && this.state.lng){
            // this.getWeather(this.state.lat, this.state.lng);
            return (
                <div className="container">
                    <div className="toolbar">
                        <div className="co"><p>CO<sub>2</sub> Emissions</p></div>
                    </div>
                    <div className="content">
                        <form className="locationForm">
                            <label>
                                <input type="text" className="searchBar" placeholder="Example: Helsinki, Turku, London" />
                            </label>
                            <input type="submit" className="searchButton" value="Search" />
                            <label>
                                <input type="checkbox" className="capitalSearch" name="capital" value="true" />
                                <p className="checkText">Show per capita</p>
                            </label>
                        </form>
                        <div className="resultArea">
                            <h2>Results</h2>
                            <Results />
                        </div>
                    </div>
                </div>
            )
            
        }
        // If neither of the above work:
        // It renders a "loading" window until the user accepts the location request
        return <div><Loading message="Please accept the location request.."/></div>
    }
    
    render(){
        return (
            <div className="app">
                {this.renderContent()}
            </div>
        )
    }
        
    
};

ReactDOM.render(<App />, document.querySelector('#root'));