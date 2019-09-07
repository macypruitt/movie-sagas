import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import DetailsPage from '../DetailsPage/DetailsPage';
import EditPage from '../EditPage/EditPage';


class App extends Component {
  
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies/:id" component={DetailsPage} />
          <Route exact path="/edit" component={EditPage} />
        </Router>
      </div>
    );
  }
}

export default App;
