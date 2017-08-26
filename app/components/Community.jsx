var React = require('react');
var PostList = require('PostList');

var Community = React.createClass({
  getInitialState: function () {
    return {
      posts: [
        {id: 1,
        title: 'Post1',
        content: 'Content1',
        user: 'User',
        date: 'Date'
        }, {
          id: 2,
          title: 'Post2',
          content: 'Content2',
          user: 'User',
          date: 'Date'
        }
      ]
    };
  },

  render: function () {
    var {posts} = this.state;

    return (
      <div>
        <PostList posts={posts}/>
      </div>
    )
  }
});

module.exports = Community;

// var React = require('react');
// var {Link, IndexLink} = require('react-router');
// var Post = require('Post');
//
// var Community = (props) => {
//     return (
//       <div>
//         <div>
//           <h3>Community Component</h3>
//         </div>
//         <div>
//           <table>
//             <thread>
//               <tr>
//                 <th width="200">Table Header</th>
//               </tr>
//             </thread>
//             <tbody>
//               <tr>
//                 <td>
//                   <div class="media-object">
//                     <div class="media-object-section">
//                       <div class="thumbnail">
//                         <img src= "assets/img/media-object/avatar-1.jpg"/>
//                         <p>Image</p>
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <Post title="Title" content="content" user="user" date="date"/>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div class="media-object">
//                     <div class="media-object-section">
//                       <div class="thumbnail">
//                         <img src= "assets/img/media-object/avatar-1.jpg"/>
//                         <p>Image</p>
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                     <h3>Post2</h3>
//                     <p>Post content</p>
//                     <p>user</p>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div class="media-object">
//                     <div class="media-object-section">
//                       <div class="thumbnail">
//                         <img src= "assets/img/media-object/avatar-1.jpg"/>
//                         <p>Image</p>
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                     <h3>Post3</h3>
//                     <p>Post content</p>
//                     <p>user</p>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div class="media-object">
//                     <div class="media-object-section">
//                       <div class="thumbnail">
//                         <img src= "assets/img/media-object/avatar-1.jpg"/>
//                         <p>Image</p>
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                     <h3>Post4</h3>
//                     <p>Post content</p>
//                     <p>user</p>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     )
// };
//
// module.exports = Community;
