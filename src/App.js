import React from 'react';
import { withStyles, Button } from '@material-ui/core';
import AppStyles from './Styles/AppStyles';
import './Styles/MuiOverrides.css'

class App extends React.Component {

    UNSAFE_componentWillMount(){
        document.getElementById('body').style.margin = "0px"
      }
    
    render() {

        const { classes } = this.props;

        return (
            <>
                <div className={classes.navContainer}>
                    <Button className={classes.buttonOne} variant="outlined" href="#home">Home </Button>
                    <Button variant="outlined" href="#news">News </Button>
                    <Button variant="outlined" href="#contact">Contact </Button>
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