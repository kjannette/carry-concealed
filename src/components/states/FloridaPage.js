import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import MichiganPageStyles from '../../styles/states/MichiganPageStyles';
import NavBar from '../NavBar.js'
import florida from '../../images/states/florida.png'

class MichiganPage extends React.Component {

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
                        Obtaining a Florida concealed weapons permit
                    </div>

                    <div className={classes.dividerBox}>
                        <Divider  className={classes.divider}/>
                    </div>
       
                        <div className={classes.mainTextContainerLeft}>

                            <div className={classes.mainTextLeft}>

                                <Typography className={classes.textLeft}>

                                    <p> Florida is a <Link to="/shallissue" className={classes.link}>“shall issue” </Link>concealed weapons permit state.</p>

                                    <p>
                                        This means that Florida starts with the presumption that an individual should be entitled to carry a concealed weapon, 
                                        as long as they <a className={classes.link} href="https://licensing.freshfromflorida.com//firearms/prequal_questions.aspx">meet basic requirements. </a>
                                        For example, in Florida, a resident may not be permitted to carry a concealed weapon if he or she has been convicted of 
                                        <a className={classes.link} href=""> certain criminal offenses</a>, 
                                        both misdemeanors and felonies.
                                    </p>

                                    <p>
                                        A Florida resident can apply <a className={classes.link} href="https://www.fdacs.gov/Consumer-Resources/Concealed-Weapon-License/Applying-for-a-Concealed-Weapon-License">in person or by mail</a>, if they meet the following basic requirements to obtain a Florida concealed weapons permit:
                                        <ol>
                                        
                                            <li>Be at least 21 years of age.</li><br></br>
                                            
                                            <li>Be a citizen of the United States or an alien lawfully admitted into the United States.</li><br></br>
                                            
                                            <li>Be able to demonstrate competency with a firearm and the physical inability to handle a firearm safely.</li><br></br>

                                            <li>Not have a felony conviction (unless civil and firearm rights have been restored by the convicting authority), or A conviction for a misdemeanor crime of violence in the last three years.</li><br></br>

                                            <li>Not have a suspended sentence on a felony or misdemeanor crime of violence unless three years have elapsed since probation or other conditions set by the court have been fulfilled.</li><br></br>

                                            <li>Not have a conviction for violation of controlled substance laws or multiple arrests for such offenses.</li><br></br>

                                            <li>Not have a record of drug or alcohol abuse, and/or two or more DUI convictions within the previous three years.</li><br></br>

                                            <li>Not currently be committed to a mental institution or adjudged incompetent or mentally defective.</li><br></br>

                                            <li>Fail to provide proof of proficiency with a firearm.</li><br></br>

                                            <li>Not have a domestic violence injunction or an injunction against repeat violence that is currently in force.</li><br></br>

                                            <li>Not have renounced their U.S. citizenship, or a dishonorable discharge from the armed forces.</li><br></br>

                                            <li>Not be a fugitive.</li><br></br>

                                        </ol>
                                    </p>
                                </Typography>

                            </div>

                        </div>

                        <div className={classes.mainTextContainerRight}>

                            <div className={classes.mainTextRight}>
                                <img src={florida} className={classes.pic}></img>
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
   
export default withStyles(MichiganPageStyles)(MichiganPage);