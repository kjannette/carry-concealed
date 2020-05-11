import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import TexasPageStyles from '../../styles/states/TexasPageStyles';
import NavBar from '../NavBar.js'
import texas from '../../images/states/texas.png'

class TexasPage extends React.Component {

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
                        Obtaining a Texas concealed weapons permit
                    </div>

                    <div className={classes.dividerBox}>
                        <Divider  className={classes.divider}/>
                    </div>
       
                        <div className={classes.mainTextContainerLeft}>

                            <div className={classes.mainTextLeft}>

                                <Typography className={classes.textLeft}>

                                    <p> Texas is a <Link to="/shallissue" className={classes.link}>“shall issue” </Link>concealed weapons permit state, and is generally very liberal in issuing concealed weapons permits.
                                        Technically, there is no distinction between a Texas concealed wepons permit and a wepons permit in general.  A holder of a permit can carry 
                                        either openly, or concealed.  An application for a permit can be <a className={classes.link} href="https://txapps.texas.gov/txapp/txdps/ltc/">completed online.</a></p>
                                    <p>
                                        Like most shall isse concealed weapons permits states, Texas starts with the presumption that an individual should be entitled to carry a concealed weapon, unless specific exceptions are present.  
                                    </p>

                                    <p>
                                        A Texas resident must meet the following basic requirements to obtain a Texas concealed weapons permit:
                                        <ol>

                                            <li>Be at least 21 years of age.</li><br></br>

                                            <li>Be a legal resident of this state for the six-month period preceding the date of application.</li><br></br>

                                            <li>Pass handgun training by a <a className={classes.link} href="https://www.dps.texas.gov/RSD/LTC/instructors.htm">certified weapons permit instructor</a>, either in person, or a 
                                                combination of in person and online.</li><br></br>

                                            <li>Has not been convicted or charged with a felony or charged with or <a className={classes.link} href="https://www.dps.texas.gov/rsd/ltc/faqs/index.htm#elig">certain misdemeanors.</a> </li><br></br>

                                            <li>Is not a fugitive.</li><br></br>

                                            <li>Is not a chemically dependent person.</li><br></br>

                                            <li>Is not incapable of exercising sound judgment with respect to the proper use and storage of a handgun.</li><br></br>

                                            <li>Is otherwise fully qualified under applicable federal and state law to purchase a handgun.</li><br></br>

                                            <li>Has not been determined by a court to be delinquent in making a child support payment.</li><br></br>

                                            <li>Has not been legally determined to be delinquent in the payment of taxes or certain other government fees.</li><br></br>

                                            <li>Is not currently restricted under a court protective order or subject to a restraining order affecting the spousal relationship, other than a restraining order solely affecting property interests.</li><br></br>

                                            <li>Has not, in the 10 years preceding the date of application, been adjudicated as having engaged in delinquent conduct violating a penal law of the grade of felony (in other words having been convicted as a juvenile, with a sealed record).</li><br></br>

                                            <li>Has not previously made any material misrepresentation (lied), or failed to disclose any material fact, in an application for a weapons permit.</li><br></br>

                                        </ol>
                                    </p>
                                </Typography>

                            </div>

                        </div>

                        <div className={classes.mainTextContainerRight}>

                            <div className={classes.mainTextRight}>
                                <img src={texas} className={classes.pic}></img>
                                <Typography className={classes.picText}>
                                   
                                </Typography>
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
   
export default withStyles(TexasPageStyles)(TexasPage);