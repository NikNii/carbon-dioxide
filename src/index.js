// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Loading from './Loading';

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
                        <p>Nunc sed placerat massa. Etiam ultrices, magna vel faucibus lobortis, lacus dolor fermentum diam, at cursus dui nibh nec erat. In scelerisque vestibulum lorem, id venenatis mi sodales sed. Nullam feugiat libero lorem, non consequat tellus ultrices sed. Nulla quis nunc at orci iaculis molestie a et velit. Nulla sit amet tempus tellus. Suspendisse aliquet eu dui vitae rutrum. Maecenas cursus auctor dolor sed rhoncus. Proin vestibulum dapibus felis, a dignissim nisl mollis auctor. Curabitur diam enim, eleifend sed turpis et, pulvinar mollis dolor. Ut ut lectus rutrum, dictum lectus faucibus, maximus est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque posuere mauris vitae velit scelerisque, cursus rutrum magna tempor. Nullam cursus, metus vel dignissim tempor, sapien augue accumsan elit, ut luctus nulla velit varius nulla.</p>
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