var React = require('react');

var Post = React.createClass({
  render: function () {
    var {id, title, content, user, date} = this.props;
    return (
      <div>
        {id}. {title}: {content}
        {date} by {user}
      </div>
    )
  }
});

module.exports = Post;
