// This file will handle the register component, this component will register a user in our firebase system and also creat a user in our DB

import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import { withRouter } from 'react-router'

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: 'NOPASSREQUIRED',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const { username , password } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(`${username}@test.com`, password)
      .catch((err) => {
        console.log(err);
        console.log(this.params);
      })
      .then((user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({first_name: '', last_name: '', email: username})
      })
      .then(() => {
        // this.props.router.push('/#')
        this.props.router.push('/App')
      })
  }

  render() {
    return (
      <div className="RegisterOrLogin">
        <div>
          <p className='registerProject'>Name Your Project</p>
          {/* <p>Remember it so you can look at it later<br /></p> */}
          <input className="userNameForm" name="username" onChange={this.handleChange} type="text" placeholder="username" />
        </div>
        {/* <div>
          <input className="PasswordForm" name="password" onChange={this.handleChange} type="password" placeholder="password" />
        </div> */}
        <button className="StartProjectButton" onClick={this.handleSubmit}>Start Project!</button>
        <button a href="/" className="buttonDelete"> <a href="/" >Close This Window</a></button>
        {/* <a href="/" CloseWindowButton>Sign Out</a> */}
      </div>
    );
  }
}





//
