import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '/Users/vincentman/Desktop/the-cerulean-project/src/pages/home/home.js';

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
            <div>
              <Route exact path='/' component={Home} />
            </div>
        </Router>
      </>
    );
  }
}

export default App;
