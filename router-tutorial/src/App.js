import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      {/* 여기 li 반복되는 부분도 쉽게 반복문이 가능할까?
      아니면 패스가 다 달라서 이게 최선일까? */}
      <hr/>
      <Route path="/" component={Home} ﻿exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
