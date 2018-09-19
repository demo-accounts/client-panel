import { createStore, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";
import rootReducer from "./reducers";
// reducers
//@todo
const firebaseConfig = {
  apiKey: "AIzaSyBkn2-4WAl_u6cyx-czAsUJtwl9T2wbyr8",
  authDomain: "reactclientpanel-896d2.firebaseapp.com",
  databaseURL: "https://reactclientpanel-896d2.firebaseio.com",
  projectId: "reactclientpanel-896d2",
  storageBucket: "reactclientpanel-896d2.appspot.com",
  messagingSenderId: "671153207404"
};
// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
//Init firebase instance
firebase.initializeApp(firebaseConfig);
//Init firestore
const firestore = firebase.firestore();
//to get rid of that error in the console : next 2 lines 
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
