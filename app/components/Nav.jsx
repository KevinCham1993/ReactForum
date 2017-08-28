var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar ">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>React Forum Demo</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to="/categories" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Categories</Link>
          </li>
          <li>
            <Link to="/colleges" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Colleges</Link>
          </li>
          <li>
            <Link to="/community" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Community</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <input type="search" placeholder="Search Course, Category or College"/>
          </li>
          <li>
            <button type="button" className="button">Search</button>
          </li>
          <li>
            <Link to="/loginpage">Log In</Link>
          </li>
          <li>
              |  
          </li>
          <li>
            <Link to="/">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
