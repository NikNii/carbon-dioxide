import React from 'react';
import './stylesheet.css'


const Loading = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

Loading.defaultProps = {
    message: 'Loading..'
}

export default Loading;
