import React from 'react';
import { Link } from 'react-router-dom';
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

                    <Link to={"/"}>
                        <Button variant="outlined">Home</Button>
                    </Link>
                    <Link to={"/secondpage"}>
                        <Button variant="outlined">News</Button>
                    </Link>
                    <Link>
                        <Button variant="outlined">Contact </Button>
                    </Link>

                </div>


            </div>

        )
    }
}

export default withStyles(NavBarStyles)(NavBar);
