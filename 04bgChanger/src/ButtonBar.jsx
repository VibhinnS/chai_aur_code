import React from "react";
import './ButtonBar.css'

const ButtonBar = () => {
    return (
    <div className='flex items-center justify-center'>
      <button className='rounded-md bg-red-500 text-justify text-xs p-2.5 m-2.5 border-black border-2'>RED</button>
      <button className='rounded-md bg-blue-500 text-justify text-xs p-2.5 m-2.5 border-black border-2'>BLUE</button>
      <button className='rounded-md bg-green-500 text-justify text-xs p-2.5 m-2.5 border-black border-2'>GREEN</button>
      <button className='rounded-md bg-yellow-500 text-justify text-xs p-2.5 m-2.5 border-black border-2'>YELLOW</button>
      <button className='rounded-md bg-white text-justify text-xs p-2.5 m-2.5 border-black border-2'>WHITE</button>
    </div>
    )
}

export default ButtonBar;

