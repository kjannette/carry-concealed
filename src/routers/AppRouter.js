import React from 'react';
import MainPage from '../components/MainPage.js'
import OpenCarryPage from '../components/OpenCarryPage.js'
import ShallIssuePage from '../components/ShallIssuePage.js'
import UnrestrictedPage from '../components/UnrestrictedPage.js'
import MayIssuePage from '../components/MayIssuePage.js'
import NoIssuePage from '../components/NoIssuePage.js'
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
                <Route exact path="/opencarry" component={OpenCarryPage}/>
                <Route exact path="/shallissue" component={ShallIssuePage}/>
                <Route exact path="/unrestricted" component={UnrestrictedPage}/>
                <Route exact path="/mayissue" component={MayIssuePage}/>
                <Route exact path="/noissue" component={NoIssuePage}/>
            </Switch>
          </Router>
        )
      }
}

export default withStyles(MainPageStyles)(AppRouter);
