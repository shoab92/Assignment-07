import React from 'react';
import Nav from './Components/Nav';
import './index.css';
import Hero from './Components/Hero';
import CustomerTickets from './Components/CustomerTickets';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className="flex flex-col items-center">
        <Nav />
        <Hero />
        <Footer></Footer>
    </div>
  );
};

export default App;
