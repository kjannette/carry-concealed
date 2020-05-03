import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Button,  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavBarStyles from '../Styles/NavBarStyles.js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import glock from '../images/glock.png';
import CWP from '../images/CWP.png'

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
            <img className={classes.logo2} src={CWP}></img>
        </div>

        <div className={classes.navContainerButtons}>

            <Link to={"/"}>
                <Button className={classes.buttonz} variant="outlined">Home</Button>
            </Link>
            <Link>
                <Button className={classes.buttonz} variant="outlined">CWP By State</Button>
            </Link>
            <Link>
                <Button className={classes.buttonz} variant="outlined">Contact </Button>
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
                <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                <MenuItem onClick={handleClose}>CWP By State</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Menu>
        </div>

    </div>

    )
}

export default withStyles(NavBarStyles)(NavBar);