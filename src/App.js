import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route ,NavLink, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import result from './result';
import Survey from './Survey';

class App extends Component{
  render() {
    return (
      <Router>
      <div className="App">
      <ul>
      <li><NavLink exact to="/" activeClassName="active">Survey</NavLink></li>
      <li><NavLink exact to="/result" activeClassName="active">Result</NavLink></li>
      </ul>
      <Switch>
      <Route path="/result" component={result} />
      <Route path="/" component={Survey}/>
      </Switch>
      </div>
      </Router>
      );
    }
  }

  export default App;
