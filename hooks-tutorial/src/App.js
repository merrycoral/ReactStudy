import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';
import MyComponent from './MyComponent';
import RefSample from './MyComponent2';

const App = () => {
 // const [visible, setVisible] = useState(false);
  return (
    <div>
      <MyComponent/>
      <RefSample/>
      {/* <hr/>
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
