var React = require('react');

var NewPost = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var postText = this.refs.postText.value;

    if (postText.length > 0) {
      this.refs.postText.value = '';
      this.props.onNewPost(postText);
    } else {
      this.refs.postText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="postText" placeholder="What do you want to post?"/>
          <button className="button expanded">New Post</button>
        </form>
      </div>
    )
  }
});

module.exports = NewPost;
