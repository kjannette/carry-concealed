import React from 'react';
import { withStyles, Button, Divider, Typography } from '@material-ui/core';
import SecondPageStyles from '../Styles/SecondPageStyles';
import NavBar from './NavBar.js'

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
                    <div className={classes.mainHeading}>
                        Concealed Weapons Permits
                    </div>
                    <div className={classes.subHeading}>
                        Your source for information about carrying a concealed weapon
                    </div>

                    <div className={classes.dividerBox}>
                        <Divider  className={classes.divider}/>
                    </div>
                </div>
            </>
        );
    }
}

export default withStyles(SecondPageStyles)(SecondPage);