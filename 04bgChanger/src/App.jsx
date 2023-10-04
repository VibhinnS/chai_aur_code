import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [color, setColor] = useState(localStorage.getItem('selectColor') || 'black');

  useEffect(() => {
    localStorage.setItem('selectColor', color);
  }, [color]);

  return (
    <div>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className='flex items-center justify-center'>
          <button
            className='rounded-md bg-red-500 text-justify text-xs p-2.5 m-2.5 border-black border-2'
            onClick={() => {
              setColor('red');
            }}
          >
            RED
          </button>
          <button
            className='rounded-md bg-blue-500 text-justify text-xs p-2.5 m-2.5 border-black border-2'
            onClick={() => {
              setColor('blue');
            }}
          >
            BLUE
          </button>
          <button
            className='rounded-md bg-green-500 text-justify text-xs p-2.5 m-2.5 border-black border-2'
            onClick={() => {
              setColor('green');
            }}
          >
            GREEN
          </button>
          <button
            className='rounded-md bg-yellow-500 text-justify text-xs p-2.5 m-2.5 border-black border-2'
            onClick={() => {
              setColor('yellow');
            }}
          >
            YELLOW
          </button>
          <button
            className='rounded-md bg-white text-justify text-xs p-2.5 m-2.5 border-black border-2'
            onClick={() => {
              setColor('white');
            }}
          >
            WHITE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
