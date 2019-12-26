import React from 'react'
import './App.css';
import { World, Element } from './World';

interface AppProps {

  readonly world: World;

}

const App: React.FC<AppProps> = ({ world }) => {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" id='app'>
      { world.getElements().map((e: Element, i: number) =>
        <text
          x={e.x}
          y={e.y}
          fontSize={e.size}
          transform={`rotate(${e.angle}, ${e.x}, ${e.y})`}
          key={`el-${i}`}
        >
            {e.value}
        </text>
      )}
    </svg>
  );
}

export default App;
