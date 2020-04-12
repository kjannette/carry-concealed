import React from 'react';
import { withStyles } from '@material-ui/core';
import MainPageStyles from './Styles/MainPageStyles';
import MainPage from './components/MainPage.js'

class App extends React.Component {
    
    render() {

        return (

            <MainPage />

        );
    }
}
   
export default withStyles(MainPageStyles)(App);