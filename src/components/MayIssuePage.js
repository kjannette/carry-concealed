import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import MayIssuePageStyles from '../Styles/MayIssuePageStyles';
import NavBar from './NavBar.js'
import mayissue from '../images/mayissue.jpg'

class MayIssuePage extends React.Component {

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
                        May Issue jurisdictions 
                    </div>

                    <div className={classes.dividerBox}>
                        <Divider  className={classes.divider}/>
                    </div>

                    <div className={classes.mainTextContainerLeft}>

                        <div className={classes.mainTextLeft}>

                            <Typography className={classes.textLeft}>

                                <p>States described as “may issue” jurisdictions require a permit to carry a concealed weapon, and local authorities (either local sheriff’s or police departments, or a state-level department created for this purpose), exercise discretion as to whether such permits are granted.</p>

                                <p>California, Connecticut, Delaware, Hawaii, Maryland, Massachusetts, New Jersey, New York, and Rhode Island are generally viewed as may issue states.</p>

                                <p>A key distinction about may issue jurisdictions is that local authorities are not required to provide a reason if concealed carry permit is denied. Some provide methods for an applicant to appeal a permit denial, while others do not.  The burden of proof for demonstrating a need for a concealed weapons permit rests with the individual seeking to obtain one, as opposed to the issuing authority having to demonstrate a good reason not to allow one.</p>

                                <p>In such states, broadly stating “self-defense” often does not satisfy the requirement.  Some may issue jurisdictions require a permit-holder to provide justification for continued need for a concealed carry permit upon renewal.   Some of these jurisdictions may revoke a permit after it has been issued when the issuing authority in its discretion has determined that the "good cause" used in approving the permit application no longer exists.</p>

                                <p>Connecticut and Delaware are regarded as “permissive” may issue states, where either governmental policy or court precedence direct issuing authorities to approve applications that meet all non-discretionary criteria.</p>

                                <p>On the other end of the spectrum, Hawaii, Maryland, and New Jersey are considered “restrictive” may issue jurisdictions.  In those states issuing authorities deny most applications, either based on hard-to-meet "good cause" requirements or agency policies specifically prohibiting issue.  Obtaining a concealed weapons permit in one of these states can be very difficult, although it is not impossible.  For example, Maryland and New Jersey require showing a clear and immediate threat to the applicant’s life.</p>

                                <p>In may issue jurisdictions, standards can even vary within the state itself.  For example, in California, Massachusetts, and New York the criteria for what constitutes "good cause" is defined at the local level. Similarly, issuing authorities in inland California, rural portions of Massachusetts, and upstate New York generally accept self-defense without evidence of a specific threat as "good cause" and will grant permits to the vast majority of applicants.  On the other hand, restrictions in New York City make obtaining a concealed weapons permit almost prohibitively difficult.</p>  

                                <p>Other may issue jurisdictions allow for automatic renewal of the permit, as long as the permit holder completes any required ongoing firearms safety training and files the renewal application before the permit expires. Some may-issue jurisdictions give issuing authorities discretion in granting concealed carry permits based on an applicant's suitability (e.g., moral character) by requiring the applicant to submit evidence (resume, reference letters)) showing the applicant is of suitable character.</p>

                            </Typography>

                        </div>

                    </div>

                    <div className={classes.mainTextContainerRight}>

                        <div className={classes.mainTextRight}>
                            <img src={mayissue} className={classes.range}></img>
                            <Typography className={classes.rangeText}>
                                Local authroities have more  discretion as to whether copncealed weapons permits are granted in "may issue" states than in "shall issue" states.
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
   
export default withStyles(MayIssuePageStyles)(MayIssuePage);