// This will be our Main component, it will render all of the child components, it will also know if the user is logged in by saving it to state.

import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';
// import { withRouter } from 'react-router';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    }
    this.signOut = this.signOut.bind(this);
  }

  componentWillMount() {
    // console.log(user)
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !== null),
        });
        // this.getUser();
      });
    }, 200);
  }


  // getUser() {
  //   // console.log('test')
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({
  //         currentUser: user.uid,
  //       });
  //       console.log(user.uid);
  //     }
  //   });

    // var ref = firebase.auth("https://crudtest-342a3.firebaseio.com");
    // var authData = ref.getAuth();
    // if (authData) {
    //   console.log("Authenticated user with uid:", authData.uid);
    // }

    // let theUser = firebase.auth().currentUser.uid
    // console.log(theUser);
    // console.log('test');
  // }

  signOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('user signed out')
      })
  }

  loggedInLinks() {
    if(!this.state.loggedIn){
      // this.props.router.push('/App')
      return (
        <div id="enterLinks">
          <Link to="/login" id="login">Login</Link>
          <Link to="/register" id="register">Register</Link>
          {/* <a href="/App" id="sign-out" onClick={this.signOut}>Sign Out</a> */}
        </div>
      )
    } else {
      return (
        <div>
          {/* <p>test</p> */}
          {/* <p>{this.props.params.email}</p> */}
          <a href="/" id="sign-out" onClick={this.signOut}>Sign Out</a>
          {/* <a href="#" id="sign-out" onClick={this.signOut}>Sign Out</a> */}
        </div>
      );
    }
  }

  render() {
    const { App, RegisterOrLogin } = this.props
    return (
      <div>
        <div id="main-nav">
          {/* <h1 id="mainHeader">SYS/GRAF/GEN</h1> */}
          {/* <p>systematic graphic generator</p> */}
          {
            this.loggedInLinks()
          }
        </div>
        <div id="main-content">
          {this.props.children}
        </div>

        <div>
          {App}
        </div>
        <div>
          {RegisterOrLogin}
        </div>

      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
