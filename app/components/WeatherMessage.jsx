var React = require('react');
var WeatherMessage = React.createClass({
    render: function () {
        var {temp, location} = this.props;
        return (
            <div>
            <h5>It is currently {temp}&deg; in {location}</h5>
            </div>
        );
    }
});

module.exports = WeatherMessage;