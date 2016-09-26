const firebase = require('firebase');

let config = {
  apiKey: "AIzaSyCbv_yfA_0ErFEHxQzA4IeOx0El9CrbM_4",
  authDomain: "crudtest-342a3.firebaseapp.com",
  databaseURL: "https://crudtest-342a3.firebaseio.com",
  storageBucket: "crudtest-342a3.appspot.com",
  messagingSenderId: "252598359517"
};

firebase.initializeApp(config);

module.exports = firebase;
