import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'; 
import MainPage from '../components/MainPage';
import SecondPage from '../components/SecondPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/secondpage" component={SecondPage} />
        </Switch>
      </div>
    </Router>
  );
  
  export default AppRouter;