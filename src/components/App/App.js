import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';


import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import HomePage from '../HomePage/HomePage';
import DetailsPage from '../DetailsPage/DetailsPage';
import EditPage from '../EditPage/EditPage';

const theme = createMuiTheme({
  // palette: {
  //   primary: blue
  // }
})

class App extends Component {
  
  //// Renders the entire app on the DOM

  render() {
    return (
      
        <MuiThemeProvider>
          <div className="container">
          <div className="App">
            <div className="App-header">
            <h1>Movie List</h1>
            </div>
          <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies/:id" component={DetailsPage} />
            <Route exact path="/edit/:id" component={EditPage} />
          </Router>
          </div>
          </div>
         
        </MuiThemeProvider>
      
    );
  }
}

export default App;
