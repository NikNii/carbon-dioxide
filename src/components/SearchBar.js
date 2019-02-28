import React from 'react';
import '../stylesheet.css';

import Results from './Results';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="locationForm">
                <label>
                    <input 
                        type="text" 
                        className="searchBar" 
                        placeholder="Example: Finland, Sweden" 
                        value={this.state.term} 
                        onChange={(e) => {console.log(e.target.value);this.setState({ term: e.target.value })}}/>
                </label>
                <input type="submit" className="searchButton" value="Search" />
                <label>
                    <input type="checkbox" className="capitalSearch" name="capital" value="true" />
                    <p className="checkText">Show per capita</p>
                </label>
            </form>
        )
    };
}

export default SearchBar;