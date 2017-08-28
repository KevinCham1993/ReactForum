var React = require('react');
var {Link, IndexLink} = require('react-router');

var Categories = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Categories:</h1>
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

module.exports = Categories;
