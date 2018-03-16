var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
            location: 'San Jose',
            temp: '82',
            country: 'USA',
        }
    },
    handleSearch: function (location) {
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function (data) {
            that.setState({
                location: location,
                temp: data.main.temp,
                country: data.sys.country,
                isLoading: false
            });
        }, function (e) {
            console.log(e, '<=== EEEE')
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
            // alert(errorMessage);
        });
    },

    render: function () {
        var {isLoading, temp, location, country, errorMessage} = this.state;

        function renderMessage()  {
            if (isLoading) {
              return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location && country) {
              return <WeatherMessage location={location} temp={temp} country={country}/>;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage} />
                )
            }
        }

        return (
            <div>
                <br/>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                <br/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
