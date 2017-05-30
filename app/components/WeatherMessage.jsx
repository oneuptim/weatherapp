var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h5 className="text-center">{location}</h5>
            <h1 className="text-center">{temp}&deg;</h1>
        </div>
    );   
};

module.exports = WeatherMessage;