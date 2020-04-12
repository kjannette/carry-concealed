import React from 'react';
import { withStyles, Button, Divider, Typography } from '@material-ui/core';
import SecondPageStyles from '../Styles/SecondPageStyles';
import '../Styles/MuiOverrides.css'
import glock from '../images/glock.png'

class SecondPage extends React.Component {

    UNSAFE_componentWillMount(){
        document.getElementById('body').style.margin = "0px"
      }
    
    render() {

        const { classes } = this.props;

        return (
            <>
                <div className={classes.navContainer}>

                    <div className={classes.navContainerLogo}>
                        <img className={classes.logo} src={glock}></img>
                        <p className={classes.navBarText}>Concealed Weapons Permits: your guide</p>
                    </div>

                    <div className={classes.navContainerButtons}>
                        <Button variant="outlined" href="#home">Home </Button>
                        <Button variant="outlined" href="#news">News </Button>
                        <Button variant="outlined" href="#contact">Contact </Button>
                    </div>
 
                </div>

                <div className={classes.mainContainer}>
                    <p>SECOND PAGE</p>
                </div>

            </>
        );
    }
}
   
export default withStyles(SecondPageStyles)(SecondPage);