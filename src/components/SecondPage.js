import React from 'react';
import { withStyles, Button, Divider, Typography } from '@material-ui/core';
import SecondPageStyles from '../Styles/SecondPageStyles';
import '../Styles/MuiOverrides.css'
import NavBar from './NavBar.js'
import glock from '../images/glock.png'

class SecondPage extends React.Component {

    UNSAFE_componentWillMount(){
        document.getElementById('body').style.margin = "0px"
      }
    
    render() {

        const { classes } = this.props;

        return (
            <>
                <NavBar />

                <div className={classes.mainContainer}>
                    <p>SECOND PAGE</p>
                </div>

            </>
        );
    }
}
   
export default withStyles(SecondPageStyles)(SecondPage);