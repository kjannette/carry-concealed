import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import MichiganPageStyles from '../../styles/states/MichiganPageStyles';
import NavBar from '../NavBar.js'
import mich from '../../images/states/mich.png'

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
                        Obtaining a Michigan concealed weapons permit
                    </div>

                    <div className={classes.dividerBox}>
                        <Divider  className={classes.divider}/>
                    </div>
       
                        <div className={classes.mainTextContainerLeft}>

                            <div className={classes.mainTextLeft}>

                                <Typography className={classes.textLeft}>

                                    <p> Michigan is a <Link to="/shallissue" className={classes.link}>“shall issue” </Link>concealed weapons permit state.</p>

                                    <p>
                                        This means that Michigan starts with the presumption that an individual should be entitled to carry a concealed weapon, unless specific exceptions are present.  
                                        For example, in Michigan, a resident may not be permitted to carry a concealed weapon if he or she has been convicted of 
                                        <a className={classes.link} href="https://www.michigan.gov/msp/0,4643,7-123-1878_1591_3503_4654-10926--,00.html"> certain criminal offenses</a>, 
                                        both misdemeanors and felonies.
                                    </p>

                                    <p>
                                        A Michigan resident must meet the following basic requirements to obtain a Michigan concealed weapons permit:
                                        <ol>

                                            <li>Be at least 21 years of age.</li><br></br>
                                            <li>Be a citizen of the United States or an alien lawfully admitted into the United States.</li><br></br>
                                            <li>Be a legal resident of Michigan and reside in Michigan for at least six months immediately prior to application.  Under the law, an applicant for a concealed weapons permit is 
                                                deemed a resident of Michigan if he or she has a Michigan drivers license, is registered to vote in Michigan, or can present 
                                                <a className={classes.link} href="https://www.michigan.gov/msp/0,4643,7-123-1878_1591_3503_4654-10926--,00.html"> other evidence</a> of residency.</li><br></br>
                                            <li>Have knowledge and 
                                            <a className={classes.link} href="https://www.michigan.gov/mcoles/0,1607,7-229-41626_42485-148857--,00.html"> training in the safe use and handling of a concealed weapon</a> by
                                                successfully completing an appropriate pistol safety training course or class.</li><br></br>
                                            <li>Not be on probation, or subject to certain other court orders, such as for legal incapacity (this can be related to mental health issues), or a 
                                                <a className={classes.link} href="https://www.michigan.gov/documents/msp/PPO_Brochure_2_176129_7.pdf>"> personal protection order.</a></li><br></br> 
                                            <li>Not be prohibited from possessing, using, transporting, selling, purchasing, carrying, shipping, receiving, or distributing a firearm under any other applicable Michigan law.</li><br></br>
                                            <li>Have never been convicted of a felony in Michigan or elsewhere, and a felony charge against the applicant is not pending in Michigan or elsewhere at the time he or she applies for a CPL.</li><br></br>
                                            <li>Have not been dishonorably discharged from the United States Armed Forces.</li><br></br>
                                            <li>Have not been convicted of a misdemeanor in three to eight years (depnding on the offense) immediately preceding the date of the application for a Michigan concealed weapons permit, or have a pending charge for a misdemeanor at the 
                                                time he or she applies for the Michigan concealed weapons permit.</li><br></br>
                                            <li>Have not been found guilty but mentally ill of any crime, and has not offered a plea of not guilty of, or been acquitted of, any crime by reason of insanity.</li><br></br>
                                            <li>Is not currently and has never been subject to an order of involuntary commitment in an inpatient or outpatient setting due to mental illness.</li><br></br>
                                            <li>Not have a diagnosed severe mental illness, which renders them dangerous to themselves or others,  at the time the Michigan concealed weapons permit application is made.</li><br></br>
                                            <li>Not be under a court order of legal incapacity in this state or elsewhere.</li><br></br>
                                            <li>Have a valid state-issued driver’s license or personal identification card.</li><br></br>

                                        </ol>
                                    </p>
                                </Typography>

                            </div>

                        </div>

                        <div className={classes.mainTextContainerRight}>

                            <div className={classes.mainTextRight}>
                                <img src={mich} className={classes.pic}></img>
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