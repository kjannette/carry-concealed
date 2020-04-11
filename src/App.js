import React from 'react';
import { withStyles } from '@material-ui/core';
import AppStyles from './AppStyles';
import Link from '@material-ui/core/Link';

class App extends React.Component {
    
    render() {

        const { classes } = this.props;

        return (
            <>
                <div className={classes.navContainer}>
                    <div className={classes.navBar}>
                        <Link href="#home">Home</Link>
                        <Link href="#news">News</Link>
                        <Link href="#contact">Contact</Link>
                    </div>
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