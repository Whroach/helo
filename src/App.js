import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <div>
        <div className="Header">
          <Nav/>
        </div>
        <div>
          {routes}
        </div>
      </div>
    </div>
  );
}

export default App;
