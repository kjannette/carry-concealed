import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainPage from '../components/MainPage.js'
import OpenCarryPage from '../components/OpenCarryPage.js'
import SecondPage from '../components/SecondPage.js'
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { MainPageStyles } from '../styles/MainPageStyles.js';

export const history = createHistory();

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

  let useStyles = makeStyles(theme => ({

  }));

class AppRouter extends React.Component {

    constructor() {
        super();
    
      }

      render() {

        const { classes } = this.props;

        return (

            <Router history={history}>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/secondpage" component={SecondPage}/>
                <Route exact path="/opencarry" component={OpenCarryPage}/>
            </Switch>
          </Router>
        )
      }
}

export default withStyles(MainPageStyles)(AppRouter);