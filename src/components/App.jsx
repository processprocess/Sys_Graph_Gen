import React from 'react';
import request from 'superagent';
import PostList from './PostList.jsx';
import Post from './Post.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.handlePublish = this.handlePublish.bind(this);
    this.httpUpdatePost = this.httpUpdatePost.bind(this);
    this.httpPublishPost = this.httpPublishPost.bind(this);
    this.httpDeletePost = this.httpDeletePost.bind(this);
  }
  componentDidMount() {
    this.httpGetPosts();
  }
  httpGetPosts() {
    const url = 'https://crudtest-342a3.firebaseio.com/posts.json';
    request.get(url)  // go to API get
           .then((response) => {  // When the response is received...
             const postsData = response.body;  // Grab the data
             let posts = [];
             if (postsData) {
               posts = Object.keys(postsData).map((id) => {
                 const individualPostData = postsData[id];
                 return {
                   id,
                   ElBackgroundColor: individualPostData.ElBackgroundColor,
                   content: individualPostData.content,
                   likeCount: individualPostData.likeCount,
                 };
               });
             }
             this.setState({ posts });
           });
  }
  handlePublish({ id, content, ElBackgroundColor, likeCount }) {
    if (id) {
      this.httpUpdatePost({ id, content, ElBackgroundColor, likeCount });
      // this.setState({ saved: true })
    } else {
      // this.setState({ saved: true })
      this.httpPublishPost({ content, ElBackgroundColor, likeCount });
    }
  }
  httpDeletePost(id) {
    const url = `https://crudtest-342a3.firebaseio.com/posts/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, content, ElBackgroundColor, likeCount }) {
    const url = `https://crudtest-342a3.firebaseio.com/posts/${id}.json`;
    request.patch(url)
           .send({ content, ElBackgroundColor, likeCount })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ content, ElBackgroundColor }) {
    const url = 'https://crudtest-342a3.firebaseio.com/posts.json';
    request.post(url)
           .send({ content, ElBackgroundColor, likeCount: 0 })
           .then(() => {
             this.httpGetPosts();
           });
  }
  render() {
    return (
      <div className="container">
        <div id="header">
          <button id="newPostButton" onClick={this.handlePublish}>new post</button>
        </div>
        <PostList handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} posts={this.state.posts} />
        {/* <Post handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} /> */}
      </div>
    );
  }
}

export default App;
