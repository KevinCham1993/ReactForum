var React = require('react');
var {Link, IndexLink} = require('react-router');

var Colleges = (props) => {
  return (
    <div>
      <h1 className="text-center">Colleges:</h1>
      <p>Courses from different universities are here!</p>
      <ol>
        <li>
          <Link to="/">National University of Singapore</Link>
        </li>
        <li>
          <Link to="/">Nanyang Technological University</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Colleges;
