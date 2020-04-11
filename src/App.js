import React from 'react';
import { withStyles } from '@material-ui/core';
import AppStyles from './AppStyles';

class App extends React.Component {
    
    render() {

        const { classes } = this.props;

        return (
            <>
                <div className={classes.navBar}>
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                </div> 
                <div className={classes.mainContainer}> 
                    <div className={classes.mainHeading}>
                        Concealed Weapons Permits
                    </div>
                </div>
            </>
        );
    }
}
   
export default withStyles(AppStyles)(App);