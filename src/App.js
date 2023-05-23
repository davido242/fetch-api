import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users';
  
  return (
    <div className="App">
      <h2>Fetch API</h2>
    </div>
  );
}

export default App;