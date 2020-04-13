import React from 'react';
import { withStyles } from '@material-ui/core';
import AppRouter from './components/AppRouter';

class App extends React.Component {
    
    render() {

        return (

            <AppRouter />

        );
    }
}
   
export default App; //withStyles(MainPageStyles)(App); 

/*
 <MainPage />
*/