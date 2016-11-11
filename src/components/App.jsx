import React from 'react';
import request from 'superagent';
import PostList from './PostList.jsx';
import Post from './Post.jsx';
import firebase from '../../firebase.config.js';

export default class App extends React.Component {
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
      // console.log(this.props)
      // console.log(this.props.RowCount)
    }, 300);

    // this.props.RowCount == 0 ? this.props.handlePublish() : null;


  }


  getUser() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentUser: user.uid,
        });
      }
    });
  }

  httpGetPosts() {
    const url = `https://crudtest-342a3.firebaseio.com/posts/${this.state.currentUser}.json`;
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
                   LineCount: individualPostData.LineCount,
                 };
               });
             }
             else { this.handlePublish({}) }
             this.setState({ posts });
            //  console.log(this.state.posts.length)
           });
          //  this.state.posts.length == 0 ? this.handlePublish({}) : null;
  }
  handlePublish({ id, ElBackgroundColor, ElAnimationDuration, ElBorderWidth, LineCount }) {
    if (id) {
      this.httpUpdatePost({ id, ElBackgroundColor, ElAnimationDuration, ElBorderWidth, LineCount });
    } else {
      this.httpPublishPost({ ElBackgroundColor: 'white', ElAnimationDuration: 100, ElBorderWidth: 7, LineCount: 7 });
    }
  }
  httpDeletePost(id) {
    const url = `https://crudtest-342a3.firebaseio.com/posts/${this.state.currentUser}/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, ElBackgroundColor, ElBorderWidth, ElAnimationDuration, LineCount }) {
    const url = `https://crudtest-342a3.firebaseio.com/posts/${this.state.currentUser}/${id}.json`;
    request.patch(url)
           .send({ ElBackgroundColor, ElBorderWidth, ElAnimationDuration, LineCount })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ ElBackgroundColor, ElBorderWidth, ElAnimationDuration, LineCount }) {
    const url = `https://crudtest-342a3.firebaseio.com/posts/${this.state.currentUser}.json`;
    request.post(url)
           .send({ ElBackgroundColor, ElBorderWidth, ElAnimationDuration, LineCount })
           .then(() => {
             this.httpGetPosts();
           });
  }
  render() {
    return (
      <div>
        <div className="systemHeader">
          <h3>sys-graph-gen</h3>
        </div>
        <PostList handleDelete={this.httpDeletePost}
                  handlePublish={this.handlePublish}
                  posts={this.state.posts} />
        <button className="postControls buttonAddRow" onClick={this.handlePublish}>New Row</button>
      </div>
    );
  }
}












//
