import React, { useState } from 'react';
import Name from './Components/Name/Name';
import FakeData from './FakeData/FakeData';

function App() {
  const [fake , setFake] = useState(FakeData);

  return (
    <div className="App">
      {
       fake.map(fak => <Name fake={fak}></Name>)
      }
    </div>
  );
}


export default App;
