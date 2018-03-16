var React = require('react');

var WeatherMessage = ({temp, location, country}) => {
    return (
        <div>
            <h1 className="text-center weather">{temp}&deg;</h1>
            <h5 className="text-center location">{location}</h5>
            <h5 className="text-center location">{country}</h5>
        </div>
    );   
};

module.exports = WeatherMessage;