import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales'

class App extends Component{
  render(){

    var courses=[
      {'name':'Python','price':1000},
      {'name':'React','price':2000},
      {'name':'DJango','price':3000},
      {'name':'JavaScript','price':4000},
    ]
    return(
      <div className="App">
          <h1>Welcome to ELearning</h1>
          <br></br>
          <h2>Start learning new technologies</h2>
          <br></br>
          <Coursesales items={courses}/>
      </div>
    )
  }
}

export default App;
