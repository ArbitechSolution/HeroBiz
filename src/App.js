import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import NavTabs from './Components/navTabs/navTabs';
import AboutUs from './Components/aboutUS/aboutUs';
import Services from './Components/services/services';
import Team from './Components/Team/team';

function App() {
  return (
   <>
    <Navbar />
<AboutUs />
<NavTabs/>
<Services />
<Team />
   </>
  );
}

export default App;
