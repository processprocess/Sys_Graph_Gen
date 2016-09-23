// We will be using this file to write a utility function, which is reusable across our application if need be, we can also call this a helper. This utility function will check to see if our user is logged in and redirect if the user is not logged in
const React = require('react'),
      firebase = require('../../firebase.config.js');

function requireAuth(nextState, replace) {
  if (firebase.auth().currentUser === null) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

module.exports = requireAuth;
