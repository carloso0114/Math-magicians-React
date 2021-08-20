import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculator from './components/calculator';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <div>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  </>
);

export default App;
