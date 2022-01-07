import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Bot from '../Pages/Bot';
import Map from '../Pages/map';
import Detect from '../Pages/Detect';
import About from '../Pages/About';


const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/bot' component={Bot}></Route>
      <Route exact path='/map' component={Map}></Route>
      <Route exact path='/Detect' component={Detect}></Route>
      <Route exact path='/About' component={About}></Route>
    </Switch>
  );
}

export default Main;