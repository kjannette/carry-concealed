import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Button,  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavBarStyles from '../Styles/NavBarStyles.js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import glock from '../images/glock.png'

const NavBar = props => {

    const { classes } = props

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

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
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon style={{ fontSize: 50 }} className={classes.burger}/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>News</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Menu>
        </div>

    </div>

    )
}

export default withStyles(NavBarStyles)(NavBar);