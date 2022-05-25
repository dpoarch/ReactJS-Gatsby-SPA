import * as firebase from 'firebase/app';

import 'firebase/auth';

// Place Firebase configuration here...
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth;
  }
}

export default new Firebase();