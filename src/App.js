import React from 'react';
import MainPage from './components/MainPage.js'
import SecondPage from './components/SecondPage.js'
import Grid from '@material-ui/core/Grid';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

  let useStyles = makeStyles(theme => ({

  }));

export const history = createHistory();

export default function App() {
  const classes = useStyles();
  
  return (

    <div className={classes.root} >

        <Router history={history}>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/secondpage" component={SecondPage}/>
        </Router>

    </div>
   
  );
}

