var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Categories = require('Categories');
var Colleges = require('Colleges');
var Community = require('Community');
var LoginPage = require('LoginPage');
var Post = require('Post');
var NewPost = require('NewPost')

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="categories" component={Categories}/>
      <Route path="colleges" component={Colleges}/>
      <Route path="community" component={Community}/>
      <Route path="loginpage" component={LoginPage}/>
      <Route path="post" component={Post}/>
      <Route path="newpost" component={NewPost}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
