import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import App from './App';

class result extends Component{

  constructor()  {
    super();
    this.state= {
      count:"",
      countageBelow18:"",
      countage18to35:"",
      countage35to60:"",
      countageAbove60:"",
      countEducationLevel1:"",
      countEducationLevel2:"",
      countEducationLevel3:"",
      countEducationLevel4:"",
      countIncomeLevel1:"",
      countIncomeLevel2:"",
      countIncomeLevel3:"",
      countIncomeLevel4:"",
      countGenderMale:"",
      countGenderFemale:""
    };
  }

  componentDidMount(){
    var ref = firebase.database().ref("Survey").once('value', snapshot=> {
      this.setState({
        count: snapshot.numChildren(),
      }) 
    });
//Query to filter below 18
var ref = firebase.database().ref("Survey").orderByChild("age").endAt("18").once('value', snapshot=> {
  this.setState({
    countageBelow18: snapshot.numChildren(),
  }) 
});

//Query to filter below 18 to 35
var ref = firebase.database().ref("Survey").orderByChild("age").startAt("18").endAt("35").once('value', snapshot=> {
  this.setState({
    countage18to35: snapshot.numChildren(),
  }) 
});

//Query to filter below 35 to 60
var ref = firebase.database().ref("Survey").orderByChild("age").startAt("36").endAt("60").once('value', snapshot=> {
  this.setState({
    countage35to60: snapshot.numChildren(),
  }) 
});

//Query to filter above 60
var ref = firebase.database().ref("Survey").orderByChild("age").startAt("61").once('value', snapshot=> {
  this.setState({
    countageAbove60: snapshot.numChildren(),
  }) 
});

//Query to filter by Education Secondary and below
var ref = firebase.database().ref("Survey").orderByChild("education").equalTo("Secondary school and below").once('value', snapshot=> {
  this.setState({
    countEducationLevel1: snapshot.numChildren(),
  }) 
});

var ref = firebase.database().ref("Survey").orderByChild("education").equalTo("Diploma").once('value', snapshot=> {
  this.setState({
    countEducationLevel2: snapshot.numChildren(),
  }) 
});

var ref = firebase.database().ref("Survey").orderByChild("education").equalTo("Degree").once('value', snapshot=> {
  this.setState({
    countEducationLevel3: snapshot.numChildren(),
  }) 
});

var ref = firebase.database().ref("Survey").orderByChild("education").equalTo("Post graduate degree").once('value', snapshot=> {
  this.setState({
    countEducationLevel4: snapshot.numChildren(),
  }) 
});

//Query to filter by Income Level
var ref = firebase.database().ref("Survey").orderByChild("income").endAt("1000").once('value', snapshot=> {
  this.setState({
    countIncomeLevel1: snapshot.numChildren(),
  }) 
});

var ref = firebase.database().ref("Survey").orderByChild("income").startAt("1001").endAt("3000").once('value', snapshot=> {
  this.setState({
    countIncomeLevel2: snapshot.numChildren(),
  }) 
});

var ref = firebase.database().ref("Survey").orderByChild("income").startAt("3001").endAt("5000").once('value', snapshot=> {
  this.setState({
    countIncomeLevel3: snapshot.numChildren(),
  }) 
});

var ref = firebase.database().ref("Survey").orderByChild("income").startAt("5001").once('value', snapshot=> {
  this.setState({
    countIncomeLevel4: snapshot.numChildren(),
  }) 
});

//Query to filter by Gender
var ref = firebase.database().ref("Survey").orderByChild("gender").equalTo("Male").once('value', snapshot=> {
  this.setState({
    countGenderMale: snapshot.numChildren(),
  }) 
});

var ref = firebase.database().ref("Survey").orderByChild("gender").equalTo("Female").once('value', snapshot=> {
  this.setState({
    countGenderFemale: snapshot.numChildren(),
  }) 
});
}

render() {
  return (
    <div className="App">
    <h3>Total Survey submitted={this.state.count}</h3>
    <table border="1">
    <tbody >
    <tr>
    <th colSpan="2">Age group</th>
    </tr>
    <tr>
    <td>Below 18</td>
    <td>{this.state.countageBelow18}</td>
    </tr>
    <tr>
    <td>18 to 35</td>
    <td>{this.state.countage18to35}</td>
    </tr>
    <tr>
    <td>36 to 60</td>
    <td>{this.state.countage35to60}</td>
    </tr>
    <tr>
    <td>Above 60</td>
    <td>{this.state.countageAbove60}</td>
    </tr>
    <tr>
    <th colSpan="2">Education level</th>
    </tr>
    <tr>
    <td>Secondary school and below</td>
    <td>{this.state.countEducationLevel1}</td>
    </tr>
    <tr>
    <td>Diploma</td>
    <td>{this.state.countEducationLevel2}</td>
    </tr>
    <tr>
    <td>Degree</td>
    <td>{this.state.countEducationLevel3}</td>
    </tr>
    <tr>
    <td>Post Graduate Degree</td>
    <td>{this.state.countEducationLevel4}</td>
    </tr>
    <tr>
    <th colSpan="2">Monthly Income</th>
    </tr>
    <tr>
    <td>Less than RM 1000</td>
    <td>{this.state.countIncomeLevel1}</td>
    </tr>
    <tr>
    <td>Between RM1000 to RM3000</td>
    <td>{this.state.countIncomeLevel2}</td>
    </tr>
    <tr>
    <td>Between RM3000 to RM5000</td>
    <td>{this.state.countIncomeLevel3}</td>
    </tr>
    <tr>
    <td>More than RM5000</td>
    <td>{this.state.countIncomeLevel4}</td>
    </tr>
    <tr>
    <th colSpan="2">Gender</th>
    </tr>
    <tr>
    <td>Male</td>
    <td>{this.state.countGenderMale}</td>
    </tr>
    <tr>
    <td>Female</td>
    <td>{this.state.countGenderFemale}</td>
    </tr>
    </tbody>
    </table>
    </div>
    );
}
}

export default result;

