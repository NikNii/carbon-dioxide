// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Loading from './Loading';
import ResultCard from './ResultCard';

class App extends React.Component{
    state = {
        today: new Date().getDay(),
        time: new Date().toLocaleTimeString(),
        lat: null, lng: null,
        errorMessage: ''
};
    
    componentDidMount(){
           this.getCoords();
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
                        <p>CO<sub>2</sub> Emissions</p>
                    </div>
                    <div className="content">
                        <form className="locationForm">
                            <label>
                                <input type="text" className="searchBar" placeholder="Example: Helsinki, Turku, London"></input>
                            </label>
                            <input type="submit" className="searchButton" value="Search" />
                            <label>
                                <input type="checkbox" className="capitalSearch" name="capital" value="true" /><p className="checkText">Show per capita</p>
                            </label>
                        </form>
                        <div className="resultArea">
                        <h2>Results</h2>
                            <ul>
                                <li><ResultCard/></li>
                                <li><ResultCard/></li>
                                <li><ResultCard/></li>
                                <li><ResultCard/></li>
                                <li><ResultCard/></li>

                            </ul>
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

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));