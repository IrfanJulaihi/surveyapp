import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import App from './App';
import { withAlert } from 'react-alert';

class Survey extends Component{

  constructor()  {
    super();
    this.state= {
      age:"",
      education:"",
      income:"",
      gender:"",
    };
    this.ageChange = this.ageChange.bind(this);
    this.educationChange = this.educationChange.bind(this);
    this.incomeChange = this.incomeChange.bind(this);
    this.genderChange=this.genderChange.bind(this);
  }

  componentDidMount(){
    var ref = firebase.database().ref("Survey").once('value', snapshot=> {
      this.setState({
        count: snapshot.numChildren(),
      }) 
    });
//Query to filter below 18
var ref = firebase.database().ref("Survey");
ref.orderByChild("age").endAt(17).once('value', snapshot=> {
  this.setState({
    countage: snapshot.numChildren(),
  }) 
});
}

writeUserData(age,education,income,gender){
  const answer = {
    age: this.state.age,
    education:this.state.education,
    income:this.state.income,
    gender:this.state.gender,
  }

  var ref =firebase.database().ref().child("Survey").push(answer
    )
//success callback
alert('Survey Submitted! Thank you');
}

render() {
  return(
    <form onSubmit={()=> this.writeUserData(this.age,this.education,this.income,this.gender)}>
    <div className="App">
    <br/>
    <b>1.What is your age group?</b>
    <br/> 
    <label class="container">
    <input type="radio"  name="age" value="17" checked={this.state.age === "17"} onChange={this.ageChange}  required/>
    Below 18
    <span class="checkmark"></span>
    </label>
    <label class="container">
    <input type="radio"  name="age" value="35" checked={this.state.age === "35"} onChange={this.ageChange} required />
    18 to 35
    <span class="checkmark"></span>
    </label>
    <label class="container">
    <input type="radio" name="age" value="60"  checked={this.state.age === "60"} onChange={this.ageChange} required/>
    35 to 60
    <span class="checkmark"></span>
    </label>
    <label class="container">
    <input type="radio" name="age" value="61" checked={this.state.age === "61"} onChange={this.ageChange} required/>
    Above 60
    <span class="checkmark"></span>
    </label>
    <br/>
    <label>
    <b>2.What is your education level?</b>
    <br/> 
    <label class="container">
    <input type="radio"  name="education" value="Secondary school and below" checked={this.state.education === "Secondary school and below"} onChange={this.educationChange}  required/>
    Secondary school and below
    <span class="checkmark"></span>
    </label>
    <label class="container">
    <input type="radio"  name="education" value="Diploma" checked={this.state.education === "Diploma"} onChange={this.educationChange}  required/>
    Diploma
    <span class="checkmark"></span>
    </label>
    <label class="container">
    <input type="radio" name="education" value="Degree"  checked={this.state.education === "Degree"} onChange={this.educationChange} required/>
    Degree
    <span class="checkmark"></span>
    </label>
    <label class="container">
    <input type="radio" name="education" value="Post graduate degree" checked={this.state.education === "Post graduate degree"} onChange={this.educationChange} required/>
    Post graduate degree
    <span class="checkmark"></span>
    </label>
    </label>
    <br/>
    <label>
    <b>3.What is your monthly income?</b>
    <br/> 
    <label class="container">
    <input type="radio"  name="income" value="1000" checked={this.state.income === "1000"} onChange={this.incomeChange}  required/>
    Less than RM1000
    <span class="checkmark"></span>
    </label>
    <label class="container">     
    <input type="radio"  name="income" value="3000" checked={this.state.income === "3000"} onChange={this.incomeChange} required />
    Between RM1000 to RM3000
    <span class="checkmark"></span>
    </label>
    <label class="container"> 
    <input type="radio" name="income" value="5000"  checked={this.state.income === "5000"} onChange={this.incomeChange} required />
    Between RM3001 to RM5000
    <span class="checkmark"></span>
    </label>
    <label class="container"> 
    <input type="radio" name="income" value="5001" checked={this.state.income === "5001"} onChange={this.incomeChange} required/>
    More than RM5000
    <span class="checkmark"></span>
    </label>
    </label>
    <br/>
    <label>
    <b>4.Your gender?</b>
    <br/> 
    <label class="container">
    <input type="radio"  name="gender" value="Male" checked={this.state.gender === "Male"} onChange={this.genderChange} required />
    Male
    <span class="checkmark"></span>
    </label>
    <label class="container">   
    <input type="radio"  name="gender" value="Female" checked={this.state.gender === "Female"} onChange={this.genderChange} required />
    Female
    <span class="checkmark"></span>
    </label>
    </label>
    <br/>
    <br/>
    <input type="submit" value="Submit" />
    <br/>
    </div>
    </form>
    );
}

ageChange = (e) =>{
  this.setState({
    age: e.target.value
  });
}

educationChange = (e) =>{
  this.setState({
    education: e.target.value
  });
}

incomeChange = (e) =>{
  this.setState({
    income: e.target.value
  });
}

genderChange = (e) =>{
  this.setState({
    gender: e.target.value
  });
}

}

export default Survey;