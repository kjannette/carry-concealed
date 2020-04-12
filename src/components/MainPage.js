import React from 'react';
import { withStyles, Button, Divider, Typography } from '@material-ui/core';
import MainPageStyles from '../Styles/MainPageStyles';
import '../Styles/MuiOverrides.css'
import glock from '../images/glock.png'

class MainPage extends React.Component {

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
       
                        <div className={classes.mainTextContainerLeft}>

                            <div className={classes.mainTextLeft}>

                                <Typography className={classes.textLeft}>

                                    <p><b>Welcome to your best starting point for information about concealed weapons permits online. </b></p>

                                    <p>The regulations regarding carrying a concealed weapon and concealed weapons permits  are generally govermened by state law, not federal gun laws (with some exceptions).  Therefore, the rights and obligations about carrying a concealed weapon 
                                        and concealed weapons permtis  vary from state to state.</p>
                                    
                                    <p>All 50 states have passed laws that enable people to carry concealed firearms, either without a permit or after obtaining a concealed weapons permit from a designated government authority at the state and/or local level.  However, even 
                                        though some states have passed concealed carry permit laws, they refuse to issue permits or they make it extremely hard to get one.  Finally, some states recognize “reciprocity” with other states.  This means that if you have conealed weapons 
                                        permit in one state, the other state witll honor it, wihtout the need to file for another permit in that state.</p>

                                    <p><b>Types of State Concealed Weapons Permit Laws</b></p>

                                    <p>State laws regulating the ability to carry a concealed weapon generally fall into four categories:  <b>unrestriced</b>, so-called <b>“shall issue,”</b>  <b>“may issue”</b> an <b>“no issue”</b> jurisdictions.</p>

                                    <p><b>Unrestricted</b> jurisdictions are those where a permit is not required to carry a concealed handgun.</p>
                                    
                                    <p> <b>Shall-issue</b> jurisdictions are states that require a license to carry a concealed handgun, but where the granting of such licenses is subject only to meeting specific criteria set forth in the law.  In other words, the state authority 
                                        that reviews the applications has no discretion in the awarding of the licenses.  In shall-issue jurisdictions, there is no requirement to demonstrate "good cause"</p>

                                    <p><b>May-issue</b> jurisdictions require a permit to carry a concealed handgun, and where the granting of such permits is partially at the discretion of local authorities (frequently the sheriff's department or police).</p>
                                    
                                    <p><b>No-issue</b> jurisdictions do not allow anyone, other than governmental authorities to carry a concealed handgun in public.  There are very few exceptions to this rule in no-issue jurisdiction.</p> 
                                    
                                </Typography>

                            </div>

                        </div>

                        <div className={classes.mainTextContainerRight}>

                        </div>

                        <div className={classes.footer}>

                        <Typography className={classes.footerText}>
                            <p>All content Copyright 2020 concealedweaponspermits.net<br></br>
                                This website is for informational puposes only.  The materials contained herein are not intended to, and do not constitute legal advice. <br></br>
                                Readers should seek professional counsel.</p>
                        </Typography>

                        </div>

                </div>
            </>
        );
    }
}
   
export default withStyles(MainPageStyles)(MainPage);