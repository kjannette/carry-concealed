import React from 'react';
import { withStyles, Button } from '@material-ui/core';
import NavBarStyles from '../Styles/NavBarStyles.js';
import '../Styles/MuiOverrides.css'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import glock from '../images/glock.png'

class NavBar extends React.Component {

    render() {

        const { classes } = this.props;

        return (

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

        )
    }
}

export default withStyles(NavBarStyles)(NavBar);
