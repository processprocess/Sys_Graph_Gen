import React from 'react';
import Post from './Post.jsx';

class PostList extends React.Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      return (
        <li key={idx}>
          <Post
            handleDelete={this.props.handleDelete}
            handlePublish={this.props.handlePublish}
            content={post.content}
            ElBackgroundColor={post.ElBackgroundColor}
            likeCount={post.likeCount}
            id={post.id}
          />
        </li>
      );
    });
    return (

      //top controller for each

      <ul>
        {postElements}
      </ul>
    );
  }
}

export default PostList;




//move all buttons to top
















//
