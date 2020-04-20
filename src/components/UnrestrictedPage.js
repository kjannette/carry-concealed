import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import UnrestrictedPageStyles from '../Styles/UnrestrictedPageStyles';
import NavBar from './NavBar.js'

class UnrestrictedPage extends React.Component {

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
                        Unrestricted jurisdictions 
                    </div>

                    <div className={classes.dividerBox}>
                        <Divider  className={classes.divider}/>
                    </div>

                    <div className={classes.mainTextContainerLeft}>

                        <div className={classes.mainTextLeft}>

                            <Typography className={classes.textLeft}>

                                <p>Unrestricted jurisdictions are states that do not require a permit to carry a concealed weapon. </p>
                                
                                <p>Some states are fully unrestricted, meaining absolutely no permit is required for lawful open or concealed carry.  Others are partially unrestricted, where certain forms of concealed carry may be legal without a permit, while other forms of carry may require a permit.</p>

                                <p>Alaska, Arizona, Arkansas, Idaho, Kansas, Kentucky, Maine, Mississippi, Missouri, New Hampshire, North Dakota (for residents only), Oklahoma, South Dakota, Vermont, West Virginia and Wyoming (for residents only) are fully unrestricted.  </p>
                                
                                <p>These states allow permitless carrying a concealed weapon by individuals (limited to those who are not otherwise prohibited from owning a firearm) in any place not otherwise deemed off-limits by law.</p> 

                                <p>North Dakota and Wyoming only extend permitless carry to residents of the state; non-residents must still have a permit issued in the state where they live.  Permitless concealed carry in Mississippi only covers certain manners of carrying.  These states also allow the open carry of a handgun without a permit with the exception of North Dakota and certain specific parts of  Missouri.</p>
                                
                                <p>Both open carry and concealed carrying of a weapon are legal in Vermont.</p>

                                <p>The states of Montana, New Mexico, and Oklahoma are partially unrestricted states. Montana allows the carrying of a concealed weapon without a permit, as long as an individual is outside of an incorporated municipality.  New Mexico allows an individual to conceal carry an unloaded handgun without a permit, and allows individuals to carry a loaded handgun either openly or concealed while traveling in a vehicle, including motorcycles and recreational vehicles.  Oklahoma allows residents of permitless carry states to carry openly or to carry a concealed weapon without a permit, provided such individuals have a government-issued ID in their state of residence.</p>
                                
                                <p>All of the states discussed above also grant permits on a “shall-issue” basis for modes of concealed carry that require a permit.</p>

                            </Typography>

                        </div>

                    </div>

                    <div className={classes.mainTextContainerRight}>

                    </div>

                    <div className={classes.footer}>

                    <Typography className={classes.footerText}>
                        <p> All content Copyright 2020 concealedweaponspermits.net<br></br>
                            This website is for informational puposes only.  The materials contained herein are not intended to, and do not, constitute legal advice.
                        <br></br>Individuals should verify local laws and regulations, and seek professional counsel.</p>
                    </Typography>

                    </div>
                    
                </div>
            </>
        );
    }
}
   
export default withStyles(UnrestrictedPageStyles)(UnrestrictedPage);