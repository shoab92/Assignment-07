import React from 'react';
import Nav from './Components/Nav';
import './index.css';
import Hero from './Components/Hero';
import CustomerTickets from './Components/CustomerTickets';


const App = () => {
  return (
    <div className="flex flex-col items-center">
        <Nav />
        <Hero />
    </div>
  );
};

export default App;
