import Home from './components/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import IndiaMap from './components/IndiaMap.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [counter, setCounter] = useState(null);
  const [discharged, setDischarged] = useState(null);
  const [death, setDeath] = useState(null);

  useEffect(() => {
    axios.get('https://api.rootnet.in/covid19-in/stats/latest')
      .then(res => {
        // const persons = res.data;
        setCounter(res.data.data.summary.confirmedCasesIndian);
        setDischarged(res.data.data.summary.discharged);
        setDeath(res.data.data.summary.deaths);
        // console.log(counter);
      })
    }, [])
  
  return (
    <div className="App">
      <Header />
      <Home counter={counter} death={death} discharged={discharged}/>
      <IndiaMap />
      <Footer />
    </div>
  );
}

export default App;