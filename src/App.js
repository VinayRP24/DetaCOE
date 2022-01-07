import React from  'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import Bot from './components/Pages/Bot'
import Map from './components/Pages/map'
import Detect from './components/Pages/Detect'
import About from './components/Pages/About'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/bot' exact component={Bot} />
          <Route path='/map' exact component={Map} />
          <Route path='/Detect' exact component={Detect} />
          <Route path='/About' exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
