import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import MainPageStyles from '../Styles/MainPageStyles';
import NavBar from './NavBar.js'
import range from '../images/range.jpg'

class MainPage extends React.Component {

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
       
                        <div className={classes.mainTextContainerLeft}>

                            <div className={classes.mainTextLeft}>

                                <Typography className={classes.textLeft}>

                                    <p> <b>Welcome to your best starting point for information about concealed weapons permits. </b></p>

                                    <p>The regulations regarding carrying a concealed weapon and concealed weapons permits  are generally govermened by state law, not federal gun laws (with some exceptions).  Therefore, the rights and obligations about carrying a concealed weapon 
                                        and concealed weapons permtis  vary from state to state.</p>
                                    
                                    <p>All 50 states have passed laws that enable people to carry concealed firearms, either without a permit or after obtaining a concealed weapons permit from a designated government authority at the state and/or local level.  However, even 
                                        though some states have passed concealed carry permit laws, they refuse to issue permits or they make it extremely hard to get one.  Finally, some states recognize “reciprocity” with other states.  This means that if you have conealed weapons 
                                        permit in one state, the other state witll honor it, wihtout the need to file for another permit in that state.</p>

                                    <p> <b>Types of State Concealed Weapons Permit Laws</b></p>

                                    <p>State laws regulating the ability to carry a concealed weapon generally fall into four categories:  <b>unrestriced</b>, so-called <b>“shall issue,”</b>  <b>“may issue”</b> an <b>“no issue”</b> jurisdictions.</p>

                                    <p> <b>Unrestricted</b> jurisdictions are those where <Link to="/unrestricted" className={classes.link}>a permit is not required </Link>to carry a concealed handgun.</p>
                                    
                                    <p> <b>Shall-issue</b> jurisdictions are states that <Link to="/shallissue" className={classes.link}>require a license to carry </Link>a concealed handgun, but where the granting of such licenses is subject only to meeting specific criteria set forth in the law.  In other words, the state authority 
                                        that reviews the applications has no discretion in the awarding of the licenses.  In shall-issue jurisdictions, there is no requirement to demonstrate "good cause"</p>

                                    <p><b>May-issue</b> jurisdictions require a permit to carry a concealed handgun.  Granting of permits <Link to="/mayissue" className={classes.link}>is partially at the discretion of local authorities </Link>(frequently the sheriff's department or police), and may require some showing of good cause or necessity.</p>
                                    
                                    <p> <b>No-issue</b> jurisdictions <Link to="/noissue" className={classes.link}>do not allow anyone to carry a concealed weapon </Link>in public, other than governmental authorities.  There are very few exceptions to this rule in no-issue jurisdiction.  While there are technically no longer any no issue jurisdictions,
                                        in some locales it is so difficult to obtain a permit that, in practice, they are no issue</p>

                                    <p>An important difference to note is the distinction between carrying a concealed weapon and <b>“open carry.”</b>  <Link to="/opencarry" className={classes.link}>Legally carrying a gun that is openly visible </Link>is governed by different laws than those that control carrying a concealed weapon .</p>
                                    
                                </Typography>

                            </div>

                        </div>

                        <div className={classes.mainTextContainerRight}>

                            <div className={classes.mainTextRight}>
                                <img src={range} className={classes.range}></img>
                                <Typography className={classes.rangeText}>
                                   Knowing your state's laws regarding carrying a concealed weapon is the first step to legal carry.
                                </Typography>
                            </div>

                        </div>

                        <div className={classes.footer}>

                        <Typography className={classes.footerText}>
                            <p> All content Copyright © 2020 concealedweaponspermits.net<br></br>
                                This website is for informational puposes only.  The materials contained herein are not intended to, and do not, constitute legal advice.
                                <br></br>Individuals should verify local laws and regulations, and seek professional counsel.</p>
                        </Typography>

                        </div>

                </div>
            </>
        );
    }
}
   
export default withStyles(MainPageStyles)(MainPage);