import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import DetailsPage from '../DetailsPage/DetailsPage';
import EditPage from '../EditPage/EditPage';

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFE9AA' }, 
    secondary: { main: '#0582CA' }, 
  },
});

class App extends Component {
  
  //// Renders the entire app on the DOM

  render() {
    return (
      
        <ThemeProvider>
          <div className="container">
          <div className="App-header">
            <h1>Movie List</h1>
            </div>
          <div className="App">
            
          <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies/:id" component={DetailsPage} />
            <Route exact path="/edit/:id" component={EditPage} />
          </Router>
          </div>
          </div>
         
        </ThemeProvider>
      
    );
  }
}

export default App;
