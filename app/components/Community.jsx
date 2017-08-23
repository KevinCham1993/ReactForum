var React = require('react');
var {Link, IndexLink} = require('react-router');

var Community = (props) => {
  return (
    <div>
      <div>
        <h3>Community Component</h3>
      </div>
      <div>
        <table>
          <thread>
            <tr>
              <th width="200">Table Header</th>
            </tr>
          </thread>
          <tbody>
            <tr>
              <td>
                  <h3>Post1</h3>
                  <p>Post content</p>
                  <p>user</p>
              </td>
            </tr>
            <tr>
              <td>
                  <h3>Post2</h3>
                  <p>Post content</p>
                  <p>user</p>
              </td>
            </tr>
            <tr>
              <td>
                  <h3>Post3</h3>
                  <p>Post content</p>
                  <p>user</p>
              </td>
            </tr>
            <tr>
              <td>
                  <h3>Post4</h3>
                  <p>Post content</p>
                  <p>user</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

module.exports = Community;
