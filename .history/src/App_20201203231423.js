import React from 'react';
import './scss/main.scss';
import Home from '.'

function App() {
  return (
    <div className="body">
      <>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />

          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
