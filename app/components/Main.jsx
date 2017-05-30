var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (        
        <div>
             <Nav/>
       
        <div className="row">
            <div className="large-3 columns">.</div>
            <div className="large-6 columns">
            {props.children}
        </div>
            <div className="large-3 columns">.</div>
        </div>
         </div>
    )    
}

module.exports = Main;