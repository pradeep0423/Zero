import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LandingPage } from './pages';
import { HeaderNavbar } from './pages/header/HeaderNavbar';
import Product from './pages/products/Product';
import Services from './pages/services/Services';
import Signup from './pages/signup/Signup';
export default function App() {
  return (
    <>
      <Router>
        <HeaderNavbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Product} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}
