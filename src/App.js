import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home.js';
import JavaScript from './pages/javascript/javascript';

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
            <div>
              <Route exact path='/' component={Home} />
              <Route exact path='/javascript' component={JavaScript} />
            </div>
        </Router>
      </>
    );
  }
}

export default App;
