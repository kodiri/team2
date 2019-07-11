import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home.js';
import JavaScript from './pages/javascript/javascript';
import ReactPage from './pages/react/react.js';

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
            <div>
              <Route exact path='/' component={Home} />
              <Route exact path='/javascript' component={JavaScript} />
              <Route exact path='/react' component={ReactPage} />
            </div>
        </Router>
      </>
    );
  }
}

export default App;
