var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Categories:</h1>
      <p>Here are the categories of lessons!</p>
      <ol>
        <li>
          <Link to="/">Data Science</Link>
        </li>
        <li>
          <Link to="/">Computer Science</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
