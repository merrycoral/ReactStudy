/* import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import MyClassComp from './MyClassComp';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeFunc from './EventPracticeFunc';
import EventPracticeFunc2 from './EventPracticeFunc2'; */
import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';


//const App = () => {
  //return <MyComponent name="milktea">밀크티</MyComponent>;
  //return <MyClassComp name="milktea" favoriteNumber={10}>child</MyClassComp>;
  //return <Say/>
 // return <EventPractice/>
 /*  <EventPracticeFunc/>
  <EventPracticeFunc2/> */

  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  class App extends Component {
    state = {
      color: '#000000'
    }

    handleClick = () => {
      this.setState({
        color: getRandomColor()
      });
    }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색</button>
        <LifeCycleSample color={this.state.color}/>
      </div>
      );
  }
}
export default App; 

/* function App() {
  const name = '밀크티';
  return <div className="react">{name}
  
  </div>;
}

export default App; */

/* import React, { Component } from 'react';
import './App.css'
import MyName from './MyName';

class App extends Component {
  render() {
   return (
     <div className="App">
      리액트
    </div> 
    <MyName name="리액트" />
   );
  }
}
*/


