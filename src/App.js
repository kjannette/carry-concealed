import React from 'react';
import MainPage from './components/MainPage.js'
import SecondPage from './components/SecondPage.js'
import Grid from '@material-ui/core/Grid';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';


const theme = createMuiTheme({
 
  });
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },

  }));

export const history = createHistory();


export default function App() {
    const classes = useStyles();
    return (
  
      <ThemeProvider theme={theme}>
        <div className={classes.root} >
          <Grid container >
            <Router history={history}>
              <Route exact path="/" component={MainPage}/>
              <Route exact path="/secondpage" component={SecondPage}/>
            </Router>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }




/*
class App extends React.Component {
    
    render() {

        return (

           <AppRouter />

        );
    }
}
   
export default withStyles(MainPageStyles)(App);
*/