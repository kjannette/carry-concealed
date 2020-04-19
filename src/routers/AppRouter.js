import React from 'react';
import MainPage from '../components/MainPage.js'
import OpenCarryPage from '../components/OpenCarryPage.js'
import SecondPage from '../components/SecondPage.js'
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { withStyles } from '@material-ui/core/styles';
import { MainPageStyles } from '../styles/MainPageStyles.js';

export const history = createHistory();

class AppRouter extends React.Component {

      render() {

        return (
            
            <Router history={history}>
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
