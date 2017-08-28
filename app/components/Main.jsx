var React = require('react');
var Nav = require('Nav');
var Announcement = require('Announcement');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns small-11 medium-10 large-10">
          {props.children}
        </div>
        <div className="columns small-1 medium-2 large-2">
          <Announcement/>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
