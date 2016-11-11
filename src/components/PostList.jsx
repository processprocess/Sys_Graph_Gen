import React from 'react';
import Post from './Post.jsx';

export default class PostList extends React.Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      return (
        <div key={idx}>
          <Post
            handleDelete={this.props.handleDelete}
            handlePublish={this.props.handlePublish}
            ElBackgroundColor={post.ElBackgroundColor}
            ElAnimationDuration={post.ElAnimationDuration}
            ElBorderWidth={post.ElBorderWidth}
            LineCount={post.LineCount}
            RowCount={this.props.posts.length}
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




//move all buttons to top
















//
