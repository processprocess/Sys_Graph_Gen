import React from 'react';
import request from 'superagent';
import PostList from './PostList.jsx';
import Post from './Post.jsx';
import firebase from '../../firebase.config.js';

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
    this.getUser()
    setTimeout(() => {
      this.httpGetPosts();
    }, 300);
  }

  getUser() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            currentUser: user.uid,
          });
          console.log(this.state.currentUser);
        }
      });
  }

  httpGetPosts() {
    const url = `https://crudtest-342a3.firebaseio.com/posts/${this.state.currentUser}.json`;
    // const url = `https://crudtest-342a3.firebaseio.com/${this.state.currentUser}/posts.json`;
    // const url = 'https://crudtest-342a3.firebaseio.com/posts.json';
    request.get(url)
           .then((response) => {
             const postsData = response.body;



             let posts = [];
             if (postsData) {
               posts = Object.keys(postsData).map((id) => {
                 const individualPostData = postsData[id];
                 return {
                   id,
                   ElBackgroundColor: individualPostData.ElBackgroundColor,
                   ElBorderWidth: individualPostData.ElBorderWidth,
                   ElAnimationDuration: individualPostData.ElAnimationDuration,
                   content: individualPostData.content,
                   LineCount: individualPostData.LineCount,
                 };
               });
             }
             this.setState({ posts });
           });
  }
  handlePublish({ id, content, ElBackgroundColor, ElAnimationDuration, ElBorderWidth, LineCount }) {
    if (id) {
      this.httpUpdatePost({ id, content, ElBackgroundColor, ElAnimationDuration, ElBorderWidth, LineCount });
    } else {
      this.httpPublishPost({ content, ElBackgroundColor, ElAnimationDuration, ElBorderWidth, LineCount });
    }
  }
  httpDeletePost(id) {
    const url = `https://crudtest-342a3.firebaseio.com/posts/${this.state.currentUser}/${id}.json`;
    // const url = `https://crudtest-342a3.firebaseio.com/${this.state.currentUser}/posts/${id}.json`;
    // const url = `https://crudtest-342a3.firebaseio.com/posts/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, content, ElBackgroundColor, ElBorderWidth, ElAnimationDuration, LineCount }) {
    const url = `https://crudtest-342a3.firebaseio.com/posts/${this.state.currentUser}/${id}.json`;
    // const url = `https://crudtest-342a3.firebaseio.com/${this.state.currentUser}/posts/${id}.json`;
    // const url = `https://crudtest-342a3.firebaseio.com/posts/${id}.json`;
    request.patch(url)
           .send({ content, ElBackgroundColor, ElBorderWidth, ElAnimationDuration, LineCount })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ content, ElBackgroundColor, ElBorderWidth, ElAnimationDuration }) {
    const url = `https://crudtest-342a3.firebaseio.com/posts/${this.state.currentUser}.json`;
    // const url = 'https://crudtest-342a3.firebaseio.com/posts.json';
    request.post(url)
           .send({ content, ElBackgroundColor, ElBorderWidth, ElAnimationDuration, LineCount: 0 })
           .then(() => {
             this.httpGetPosts();
           });
  }
  render() {
    return (
      <div className="container">

        <div className="wrapper1">
          <div id="header">
            <button id="newPostButton" onClick={this.handlePublish}>New Row</button>
          </div>
          {/* <Post handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} /> */}
          <PostList handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} posts={this.state.posts} />
        </div>

        {/* <div className="wrapper1">
          <div id="header">
            <button id="newPostButton" onClick={this.handlePublish}>new post</button>
          </div>
          <PostList handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} posts={this.state.posts} />
        </div> */}

      </div>
    );
  }
}

export default App;





//background color
//set speed
//set width
//set direction
//make entire block rotate














//
