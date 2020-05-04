import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import MapPageStyles from '../Styles/MapPageStyles';
import Map from './Map.js'
import NavBar from './NavBar.js'

class MapPage extends React.Component {

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

                    <div className={classes.subContainer}>

                        <div className={classes.lowerSubheading}>
                            Select Your State for Local Information
                        </div>

                        <div className={map-box}>

                            <Map />
                        
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
}
   
export default withStyles(MapPageStyles)(MapPage);