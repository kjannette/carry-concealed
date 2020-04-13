import React from 'react';
import { withStyles } from '@material-ui/core';
import MainPage from './components/MainPage.js'
import SecondPage from './components/SecondPage.js'
import MainPageStyles from './Styles/MainPageStyles';
import SecondPageStyles from './Styles/SecondPageStyles';
import AppRouter from './routers/AppRouter.js'

class App extends React.Component {
    
    render() {

        return (

           <AppRouter />

        );
    }
}
   
export default withStyles(MainPageStyles)(App);
