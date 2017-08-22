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
            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
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
            <input type="search" placeholder="Search"/>
          </li>
          <li>
            <button type="button" className="button">Search</button>
          </li>
          <li>
            <button type="button" className="btn btn-info log">Log In</button>
          </li>
          <li>
            <button type="button" className="btn btn-danger log">Log Out </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
