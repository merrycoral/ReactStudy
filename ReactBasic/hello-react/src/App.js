import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import MyClassComp from './MyClassComp';
import Counter from './Counter';
import Say from './Say';

const App = () => {
  //return <MyComponent name="milktea">밀크티</MyComponent>;
  //return <MyClassComp name="milktea" favoriteNumber={10}>child</MyClassComp>;
  return <Say/>
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


