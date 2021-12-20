import { useState } from 'react';
import Events from '../Components/Events/Events'
import Markets from '../Components/Markets/Markets'
import Navbar from '../Components/Navbar/Navbar';

export default function Home() {

  
  
  return (
    <div>
      <Navbar />
      <Markets />
      <Events />
    </div>
  )
}
