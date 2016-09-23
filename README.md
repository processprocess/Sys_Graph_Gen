## How to build it!

## Set Up Environment
- `webpack.config.js` :  Config the task runner so it knows what files go in... and what should come out, i.e. `bundle.js`
  - You must either write this yourself... or copy it from a previous project
- `package.json` : Setting dependencies for the project... and the `npm run dev` script
  - npm:  service which manages all the node package.  A node package, is some JS code I can use in my project
    - To get to this state:
      - 'npm init'
        - Answer all the questions
      - `npm install --save babel-core babel-loader babel-preset-es2015 babel-preset-react`
      - `npm install --save react react-dom`
      - `npm install --save superagent`
      - `npm install --save webpack webpack-dev-server`
      - `npm install --save-dev eslint`
      - `npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
  - Add the run dev script to the package.json scripts
    -`"dev": "webpack-dev-server --inline --hot --progress --colors"`
- `.eslintrc`
```json
{
  "extends": "airbnb",
  "env": { "browser": true }
}
```
### Side Note: if you use the `eslint --init` command, you can omit some of the npm installing (any of the installs starting with `eslint`) and the creation of the .eslintrc file, as this command already uses those command.s



---

### Build your working environment
- `mkdir src`
- `mkdir src/static`
- `mkdir src/components`
- `mkdir src/static/stylesheets`
- `touch src/index.jsx`
- `touch src/components/app.jsx`
- `touch src/static/stylesheets/styles.css`
- `touch src/static/index.html`

### Set up HTML:
- normal html scaffold
- link your stylesheet
- Connect the JS:
```
<div id="root"></div>
<script src="bundle.js"></script>
```

---


App.jsx
```jsx
import React from 'react';

const propTypes = {
  message: React.PropTypes.string.isRequired,
};

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="container">
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;

```

---

index.jsx
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App message="Great Job... Passing this prop" />, document.querySelector('#root'));
```

---


## Stage One!
- In this stage we will implement an APP, POSTLIST and POST components
- Since all components in this app will need to know about `posts`...
  - We decided to keep `posts` in the APP's state
  - We will pass these `posts` down to all the child components


---

./components/App.jsx
```jsx
import React from 'react';
import request from 'superagent';
import PostList from './PostList.jsx';

const propTypes = {
  message: React.PropTypes.string.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.httpGetPosts();
  }
  httpGetPosts() {
    const url = 'https://meerkats-e16d1.firebaseio.com/posts.json';
    request.get(url)  // go to API get
           .then((response) => {  // When the response is received...
             const postsData = response.body;  // Grab the data
             const posts = Object.keys(postsData).map((id) => {  // conver their data.... into nice clean objects
               const individualPostData = postsData[id];  // grabbing indiviudal data record
               return {  // ... and making it NICE!
                 id,  // <- same as   id: id
                 author: individualPostData.author,
                 content: individualPostData.content,
               };
             });
             this.setState({ posts });
           });
  }
  render() {
    return (
      <div className="container">
        <h1>{this.props.message}</h1>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;

```


---

./components/PostList.jsx
```jsx
import React from 'react';
import Post from './Post.jsx';

const propTypes = {
  posts: React.PropTypes.array.isRequired,
};

class PostList extends React.Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {  // for each of the posts... give an li
      return (
        <li key={idx}>
          <Post content={post.content} author={post.author} />
        </li>
      );
    });
    // Place all the lis in the Postlists elemtns
    return (
      <ul>
        {postElements}
      </ul>
    );
  }
}

PostList.propTypes = propTypes;

export default PostList;
```


---

./components/Post.jsx
```jsx
import React from 'react';

const propTypes = {
  content: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
};

class Post extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.content}</h1>
        <p>{this.props.author}</p>
      </div>
    );
  }
}

Post.propTypes = propTypes;

export default Post;
```



---

## Stage 2
- implement ability to create a new post


---
