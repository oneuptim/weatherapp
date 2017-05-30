var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (        
        <div className="row">
             <Nav/>
            <div className="large-3 columns">Stuff</div>
            <div className="large-6 columns">
           
            {/*<h2>Main Component</h2>*/}
            {props.children}
        </div>
            <div className="large-3 columns">Stuff</div>
        </div>
    )    
}

module.exports = Main;