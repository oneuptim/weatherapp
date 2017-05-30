var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error!'
        };
    },

    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        var {title, message} = this.props;
        // Make sure to add the above line- destructuring the components.
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal=''>
               <h4>{title}</h4>
               <p>{message}!</p>
               <button className="button expand" data-close=''>Close</button>
            </div>
        );
    }
});

module.exports = ErrorModal;