import React
import './scss/main.scss'

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
