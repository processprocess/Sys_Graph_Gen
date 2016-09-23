const firebase = require('firebase');

var config = {
  apiKey: "AIzaSyB1M6dsGqqzw65_dh8OJsLJLe1WdNhCRYI",
  authDomain: "authpractice-de0bd.firebaseapp.com",
  databaseURL: "https://authpractice-de0bd.firebaseio.com",
  storageBucket: "authpractice-de0bd.appspot.com",
  messagingSenderId: "81370176960"
};

firebase.initializeApp(config);

module.exports = firebase;
