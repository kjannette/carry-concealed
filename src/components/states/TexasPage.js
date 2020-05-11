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

                                    <p> Texas is a <Link to="/shallissue" className={classes.link}>“shall issue” </Link>concealed weapons permit state, and is generally very liberal in issuing Permits
                                        An application for a Texas concealed wepons permit can be <a className={classes.link} href="https://txapps.texas.gov/txapp/txdps/ltc/"></a>completed online.</p>
                                    <p>
                                        Like most shall isse concealed weapons permits states, Texas starts with the presumption that an individual should be entitled to carry a concealed weapon, unless specific exceptions are present.  
                                        For example, in Texas, a resident may not be permitted to carry a concealed weapon if he or she has been convicted of 
                                        <a className={classes.link} href="https://www.michigan.gov/msp/0,4643,7-123-1878_1591_3503_4654-10926--,00.html"> certain criminal offenses</a>, 
                                        both misdemeanors and felonies.
                                    </p>

                                    <p>
                                        A Texas resident must meet the following basic requirements to obtain a Michigan concealed weapons permit:
                                        <ol>

                                            <li>Be at least 21 years of age.</li><br></br>
                                            <li>Be a citizen of the United States or an alien lawfully admitted into the United States.</li><br></br>
                                            <li>Be a legal resident of Michigan and reside in Michigan for at least six months immediately prior to application.  Under the law, an applicant for a concealed weapons permit is 
                                                deemed a resident of Michigan if he or she has a Michigan drivers license, is registered to vote in Michigan, or can present 
                                                <a className={classes.link} href="https://www.michigan.gov/msp/0,4643,7-123-1878_1591_3503_4654-10926--,00.html"> other evidence</a> of residency.</li><br></br>
                                            <li>Have knowledge and 
                                            <a className={classes.link} href="https://www.michigan.gov/mcoles/0,1607,7-229-41626_42485-148857--,00.html"> training in the safe use and handling of a concealed weapon</a> by
                                                successfully completing an appropriate pistol safety training course or class.</li><br></br>


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