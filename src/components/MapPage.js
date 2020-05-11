import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography, Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MapPageStyles from '../Styles/MapPageStyles';
import Map from './Map.js'
import NavBar from './NavBar.js'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { states } from '../constants/states'

const MapPage = props => {

    const { classes, history } = props;

    useEffect(() => {
        document.getElementById('body').style.margin = "0px"
    })

    const onChange = (e) => {
        history.push(`/${e.target.value}`)
    }

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

                <div className={classes.subContainer}>

                    <div className={classes.lowerSubheading}>
                        Select Your State for Local Information
                    </div>

                    <div className={classes.mapBox}>

                        <Map />
                    
                    </div>

                    <div className={classes.mobileMapBox}>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="state-select">Choose A State</InputLabel>
                            <Select
                                native
                                onChange={onChange}
                            >
                                <option aria-label="None" value="" />
                                {
                                    states.map(state => {
                                        return <option key={state.name} value={state.name}>{state.name}</option>
                                    })
                                }
                            </Select>
                        </FormControl>

                    </div>
                    
                </div>

            </div>

            <div className={classes.footer}>

                <Typography className={classes.footerText}>
                    <p> All content Copyright © 2020 concealedweaponspermits.net<br></br>
                        This website is for informational puposes only.  The materials contained herein are not intended to, and do not, constitute legal advice.
                        <br></br>Individuals should verify local laws and regulations, and seek professional counsel.</p>
                </Typography>

            </div>
        </>
        );
    }

export default withStyles(MapPageStyles)(MapPage);