import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Button,  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavBarStyles from '../Styles/NavBarStyles.js';
import '../Styles/MuiOverrides.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import glock from '../images/glock.png'

class NavBar extends React.Component {

    state = {
        anchorEl: null,
        setAnchorEl: null,
    }

    handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      handleClose = () => {
        setAnchorEl(null);
      };

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

                <div className={classes.navContainerMenu}>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                        <MenuIcon style={{ fontSize: 50 }} className={classes.burger}/>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Menu>
                </div>

            </div>

        )
    }
}

export default withStyles(NavBarStyles)(NavBar);
