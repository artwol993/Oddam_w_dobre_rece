import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Profits from './components/pages/Home/Profits';



function App() {
  return (
    <div className="body">
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/' exact component={}

          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
