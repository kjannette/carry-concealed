import React from 'react';
import { withStyles, Button, Divider, Typography } from '@material-ui/core';
import AppStyles from './Styles/AppStyles';
import './Styles/MuiOverrides.css'
import glock from './images/glock.png'

class App extends React.Component {

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
                    <div className={classes.mainHeading}>
                        Concealed Weapons Permits
                    </div>
                    <div className={classes.subHeading}>
                        Your source for information about carrying a concealed weapon
                    </div>

                    <div className={classes.dividerBox}>
                        <Divider  className={classes.divider}/>
                    </div>
       
                    <div className={classes.mainTextContainer}>

                        <Typography className={classes.mainText}>

                            <p>Welcome to your starting point for informaiton about concealed weapons permits.online. (asterisk disclaimer)</p>
                        
                        </Typography>

                    </div>

                </div>
            </>
        );
    }
}
   
export default withStyles(AppStyles)(App);