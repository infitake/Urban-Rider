import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import home from './components/links/home';
import Pricing from './components/links/Pricing';
import Contact from './components/links/contact';
import gallary from './components/links/gallery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/' component={home} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/contact' component = {Contact} />
          <Route path='/gallary' component = {gallary} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
