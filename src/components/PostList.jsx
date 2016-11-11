import React from 'react';
import Post from './Post.jsx';

class PostList extends React.Component {

  componentDidMount(){
    console.log(this.props.posts.length);
    // console.log(this.props.handlePublish({id:null}));

    // this.props.posts.length === 0 ?
    // setTimeout(() => {
    //   // this.httpGetPosts();
    //   this.props.handlePublish({id:null})
    // }, 400)
    //
    // : null
  }
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      // console.log(this.props.posts.length);
      // this.props.posts.length == 0 ? this.props.handlePublish() : null;
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

export default PostList;




//move all buttons to top
















//
