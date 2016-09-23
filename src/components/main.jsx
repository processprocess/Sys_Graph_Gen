// This will be our Main component, it will render all of the child components, it will also know if the user is logged in by saving it to state.

import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';

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
    console.log(this.props.params.email)
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !== null),

        });
      });
    }, 200);
  }

  signOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('user signed out')
      })
  }

  loggedInLinks() {
    if(!this.state.loggedIn){
      return (
        <div>
          <Link to="/login" id="login">Login /</Link>
          <Link to="/register" id="register">Register</Link>
        </div>
      )
    } else {
      return (
        <div id="sign-out">
          {/* <p>test</p> */}
          <p>{this.props.params.email}</p>
          <a href="#" onClick={this.signOut}>Sign Out</a>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div id="main-nav">
          <h1>MAIN COMPONENT</h1>
          {
            this.loggedInLinks()
          }
        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
