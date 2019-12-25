import React from 'react'
import './App.css';

const App: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" id='app'>
      <text x="95" y="40" fontSize="12" transform="rotate(-30, 95, 40)">8</text>
      <text x="40" y="90" fontSize="8" transform="rotate(5, 40, 90)">4</text>
      <text x="20" y="15" fontSize="22" transform="rotate(-70, 20, 15)">3</text>
      <text x="85" y="75" fontSize="8" transform="rotate(10, 85, 75)">1</text>
    </svg>
  );
}

export default App;
