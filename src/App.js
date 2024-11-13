import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [objectName, setObjectName] = useState([]);

  useEffect(() => {
    axios.get('http://115.68.177.238:8090/api/health_check')
      .then(response => {
        console.log(response.data)
        setObjectName(response.data);
      })
      .catch(error => {
        console.error('연동 실패!', error);
      });
  }, []);

  return (
    <div>
      <h1>hello world!</h1>
    </div>
  );
}

export default App;
