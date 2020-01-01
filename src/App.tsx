import React, { useEffect } from 'react'
import './App.css';
import { World, Element } from './World';

interface AppProps {

  readonly world: World;

}

const App: React.FC<AppProps> = ({ world }) => {
  
  const [elements, setElements] = React.useState(world.getElements());

  useEffect(() => {
    world.onUpdate(setElements);

    return () => {
      world.removeCb(setElements);
    };
  }, [world]);

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" id='app'>
      { elements.map((e: Element, i: number) =>
        <text
          x={e.x}
          y={e.y}
          fontSize={e.size}
          transform={`rotate(${e.angle})`}
          key={`el-${i}`}
        >
            {Math.ceil(e.value)}
        </text>
      )}
    </svg>
  );
}

export default App;
