import React from 'react';
import Post from './Post.jsx';

class PostList extends React.Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      return (
        <div key={idx}>
          <Post
            handleDelete={this.props.handleDelete}
            handlePublish={this.props.handlePublish}
            content={post.content}
            ElBackgroundColor={post.ElBackgroundColor}
            ElAnimationDuration={post.ElAnimationDuration}
            ElBorderWidth={post.ElBorderWidth}
            LineCount={post.LineCount}
            id={post.id}
          />
        </div>
      );
    });
    return (
      <div>
        {postElements}
      </div>
    );
  }
}

export default PostList;




//move all buttons to top
















//
