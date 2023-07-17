import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUq9Um8HzXCjF988vc-CTvJLYJxXnNLyk",
  authDomain: "todo-app-1021d.firebaseapp.com",
  projectId: "todo-app-1021d",
  storageBucket: "todo-app-1021d.appspot.com",
  messagingSenderId: "543912563453",
  appId: "1:543912563453:web:65e470b50391bd14c16494",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
