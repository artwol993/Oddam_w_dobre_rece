import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/main.scss';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div className="body">
      <>
        <Router>
          <
          <Switch>
            <Route path='/' exact component={Home} />

          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
