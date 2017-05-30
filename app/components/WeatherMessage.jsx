var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h1 className="text-center weather">{temp}&deg;</h1>
            <h5 className="text-center location">{location}</h5>
        </div>
    );   
};

module.exports = WeatherMessage;