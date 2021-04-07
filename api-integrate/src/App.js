import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.post('/users', {
      username: 'blabla',
      name: 'blabla'
    });
  }

  return (
    <div className="App">
      <div>
        <button onClick={onClick}>보내</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    </div>
  );
}

export default App;
