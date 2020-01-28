import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Survey from './Survey';
import result from "./result";
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyC0NLKZKtVCwniKC4Vi-9-CwKlWBmJLqlE",
	authDomain: "surveyapp-d2704.firebaseapp.com",
	databaseURL: "https://surveyapp-d2704.firebaseio.com",
	projectId: "surveyapp-d2704",
	storageBucket: "surveyapp-d2704.appspot.com",
	messagingSenderId: "151818756478",
	appId: "1:151818756478:web:5f0d86eb2ae396494cd32f",
	measurementId: "G-3G7TDPMVZP"
};
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
