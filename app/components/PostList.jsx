var React = require('react');
var Post = require('Post');

var PostList = React.createClass({
  render: function () {
    var {posts} = this.props;
    var renderPosts = () => {
      return posts.map((post) => {
        return (
          <Post key={post.id} {...post}/>
        );
      });
    };

    return (
      <div>
        {renderPosts()}
      </div>
    )
  }
});

module.exports = PostList;
