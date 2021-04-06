import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

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
        <li>
          <Link to="/profile/milktea">밀크티 프로필</Link>
        </li>
        <li>
          <Link to="/profile/latteCookie">latteCookie 프로필</Link>
        </li>
      </ul>
      {/* 여기 li 반복되는 부분도 쉽게 반복문이 가능할까?
      아니면 패스가 다 달라서 이게 최선일까? */}
      <hr/>
      <Route path="/" component={Home} ﻿exact={true} />
      ﻿<Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} ﻿exact={true} />
    </div>
  );
}

export default App;
