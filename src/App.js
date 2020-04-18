import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainPage from './components/MainPage.js'
import OpenCarryPage from './components/OpenCarryPage.js'
import SecondPage from './components/SecondPage.js'
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

  let useStyles = makeStyles(theme => ({

  }));

  export function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  export const history = createHistory();

export default function App() {
  
  const classes = useStyles();
  
  return (

    <div className={classes.root} >

      <Router history={history}>
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/secondpage" component={SecondPage}/>
            <Route exact path="/opencarry" component={OpenCarryPage}/>
        </Switch>
      </Router>

    </div>
   
  );
}

