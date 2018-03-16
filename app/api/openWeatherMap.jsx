var axios = require('axios');

// Contant is a variable that can't be altered
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5f8f172a0581bb64f340614bc19bd968&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        // Query string building below
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                // throw new Error(res.data.message);
                throw new Error('Unable to fetch weather for that location');
            } else {
                return res.data;
            }
        }, function (res) {
            // throw new Error(res.data.message);
            throw new Error('Unable to fetch weather for that location');
        });
    }
}

// My Open Weather API KEY: 5f8f172a0581bb64f340614bc19bd968
