
var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <IndexRoute component={Weather}/>
    <Route path="about" component={About}/>
    <Route path="examples" component={Examples}/>
  </Route>
</Router>,
  document.getElementById('app')
);
    


// Two types of components 
// 1. Presentational components
// 2. Container components

// Presentational components don't maintain state- they simply display information or get users input/action
// Container components maintain state and hold child components