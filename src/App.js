import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import Home from './components/links/home';
import Pricing from './components/links/Pricing';
import Contact from './components/links/contact';
import Gallary from './components/links/gallery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/contact' component = {Contact} />
          <Route path='/gallary' component = {Gallary} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
