import React, { useState } from 'react';
import Counter from './Counter';
//import Info from './Info';
import Info2 from './Info2';
import Average from './Average';
import MyComponent from './MyComponent';
import RefSample from './MyComponent2';

const App = () => {
 // const [visible, setVisible] = useState(false);
  return (
    <div>
      <Info2/>
      {/* <MyComponent/>
      <RefSample/>
      <hr/>
      <Average/>
      <hr/>
      <Counter/>
      <hr/>
      <button onClick={() => {
          setVisible(!visible);
      }}
      >
        {visible ? '숨기기':'보이기'}
      </button>
      <hr/>
      {visible && <Info/>} */}
    </div>
  );
};

export default App;
