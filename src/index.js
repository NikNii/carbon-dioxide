// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Loading from './components/Loading';
import Results from './components/Results';
import SearchBar from './components/SearchBar';

class App extends React.Component{
    state = {
        emData: [],
        population: [
            {lastupdated: '2019-02-28'},
            [{
                country: {id:'1A', value: 'Placeholder Country'},
                date: '9999',
                value: '9001'
            }]
            
        ],
        popDone: false,
        emDone: false,
        countries: [],
        activeSearch: false,
        localCity: '',
        searchIndex: 0,
        today: new Date().getDay(),
        time: new Date().toLocaleTimeString(),
        lat: null, lng: null,
        errorMessage: ''
};
    
    componentDidMount(){
           this.getCoords();
           this.getEm();
           

    }
    async getCoords(){
        await window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, 
                                        lng: position.coords.longitude}),
            error =>    this.setState({ errorMessage:error.message }).then(()=> {
            })
        );
        console.log('Coordinates examined!')
    }
    async getLocation(lat, lng){
        // if(this.state.weatcherCheck){
            const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast', {
                        params: {   lat: lat,
                                    lon: lng,
                                    units: 'metric',
                                    appid: 'bd792b4f514e82a2468853df8a863379'}
                        });
            this.setState({ localCity: response.data.city,});
            console.log('Location found: ', this.state.localCity)
        // }
    }
    async getPop(){
        const response = await axios.get('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL', {
            params: {
                format: 'json',
                per_page: 30000, // max amount = 15576, as of 27.02.2019. 15k = 40 years of data.
            }

        });
        console.log('Population fetched!');
        this.setState({ population: response.data,
                        popDone: true });
        let  resultCards = [];
        for (let i=0; i < this.state.emData[1].length; i++) {
            resultCards = resultCards.concat(this.state.emData[1][i].country.value);
        }
        this.setState({ countries: resultCards });
        this.getLocation(this.state.lat, this.state.lng);
    }
    async getEm(){
        
        const response2 = await axios.get('http://api.worldbank.org/v2/country/all/indicator/EN.ATM.CO2E.KT', {
            params: {
                format: 'json',
                per_page: 30000, // max amount = 15576, as of 27.02.2019. 15k = 40 years of data.
            }

        });
        console.log('Emissions fetched!');
        // console.log('render results: ' this.state.);
        this.setState({ emData: response2.data,
                        emDone: true });

        this.getPop();
    }
    getComparisonCountries(){
        let  countryIndexes = [];
        for (let i=0; i < this.state.emData[1].length; i++) {
            countryIndexes = countryIndexes.concat(this.state.emData[1][i].country.value);
        }
        this.setState({ countries: countryIndexes });
    }
    onSearchSubmit = async (term) => {
        const response = await this.state.countries.findIndex((value) => {
            return term === value;
        });
        console.log('onSearchSubmit found this!: ', response);
        this.setState({ 
            activeSearch: true,
            searchIndex: response });

    }

    renderContent(){
        const Search = () => (
        <div className="content">
            <SearchBar onSubmit={this.onSearchSubmit} />
            <div className="resultArea">
            {!(this.state.emDone & this.state.popDone)&&
                <Loading message={'Fetching data, please wait'}/>
            }
            {this.state.activeSearch &&
                <div>
                    <Results results={{ 
                        index: this.state.searchIndex,
                        pop: this.state.population,
                        emission: this.state.emData,
                        popDone: this.state.popDone,
                        emDone: this.state.emDone
                        }}/>
                </div>
            }
            </div>
        </div>
        )

        const Local = () => (
            <div className="content">
                {!(this.state.emDone & this.state.popDone)&&
                    <Loading message={'Fetching data, please wait'}/>
                }
                <div className="localExcuse">
                    <p>You're in <h2>{this.state.localCity.name}, {this.state.localCity.country}</h2> </p>
                    <p>Due to the lack of time on my behalf, I didn't have time to figure out how to change OpenWeatherApi's country code to match World Bank's code. Or alternatively use some other method altogether.</p>
                </div>
                
            </div>
        )

        const Compare = () => (
            <div className="content">
                {!(this.state.emDone & this.state.popDone)&&
                    <Loading message={'Fetching data, please wait'}/>
                }
                {(this.state.emDone&this.state.popDone)&&
                <div className= "compareResults">
                    <div className="firstResults">
                    <Results results={{ 
                        index: this.state.searchIndex,
                        pop: this.state.population,
                        emission: this.state.emData,
                        popDone: this.state.popDone,
                        emDone: this.state.emDone,
                        indxChange: 59,
                        }}/>
                    </div>
                    <div className="secondResults">
                    <Results results={{ 
                        index: this.state.searchIndex,
                        pop: this.state.population,
                        emission: this.state.emData,
                        popDone: this.state.popDone,
                        emDone: this.state.emDone,
                        indxChange: 59,
                    }}/>
                    </div>
                </div>
                }
            </div>
        )
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
                        <div className="co">
                            <p>CO<sub>2</sub> Emissions</p>
                            
                        </div>
                        
                    </div>
                    <Router>
                        <div>
                            <div className="navBar">
                                <ul className="navButtons">
                                    <li>
                                        <Link to="/">Search</Link>
                                    </li>
                                    <li>
                                        <Link to="/local">Local CO<sub>2</sub></Link>
                                    </li>
                                    <li>
                                        <Link to="/compare">Compare</Link>
                                    </li>
                                </ul>
                            </div>   

                            <Route exact path="/" component={Search} />
                            <Route exact path="/local" component={Local} />
                            <Route exact path="/compare" component={Compare} />


                        </div>
                    </Router>

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