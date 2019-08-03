import React from 'react';
import './App.css';
import HomeComponent from './Components/Home/HomeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
