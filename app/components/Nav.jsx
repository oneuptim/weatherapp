var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        var location = this.refs.location.value;
        if (location > 0 ) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }

        console.log(location, 'Weather not available, not wired up...yet!');
    },

    render: function () {
        return (
        <div className="top-bar">
            <div className="top-bar-left">
                {/*Nav Stuff*/}
                <ul className="menu">
                    <li className="menu-text">
                        React Weather App
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                    </li>
                    <li>
                        <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
                    </li>
                    <li>
                        <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                {/* Search box */}
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Enter City Name" ref="location" ref="country"/></li>
                            <li><input type="submit" className="button" value="Get Weather" /></li>
                        </ul>
                    </form>
                </div>
            </div>
    );

    }
});

module.exports = Nav;