import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import NavTabs from './Components/navTabs/navTabs';
import AboutUs from './Components/aboutUS/aboutUs';
import Services from './Components/services/services';

function App() {
  return (
   <>
    <Navbar />
<AboutUs />
<NavTabs/>
<Services />
   </>
  );
}

export default App;
