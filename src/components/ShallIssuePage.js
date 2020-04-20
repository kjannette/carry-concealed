import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import ShallIssuePageStyles from '../Styles/MainPageStyles';
import NavBar from './NavBar.js'

class ShallIssuePage extends React.Component {

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
                        Shall Issue jurisdictions 
                    </div>

                    <div className={classes.dividerBox}>
                        <Divider  className={classes.divider}/>
                    </div>

                    <div className={classes.mainTextContainerLeft}>

                        <div className={classes.mainTextLeft}>

                            <Typography className={classes.textLeft}>

                                <p>Shall issue jurisdictions require a state-issued permit to carry a concealed weapon.  In these states,  the default rule is that an individual should be allowed to have a concealed weapons permit, unless some governmental authority can demonstrate a legally-acceptable reason why they should not carry a concealed weapon.</p>

                                <p>Laws in such states usually say that the granting authority “shall issue” a license if the criteria are met.  The language here is significant: “shall” implies an imperative that must be followed if no exceptions are present, while “may” implies some degree of discretion.</p>

                                <p>Under the shall issue laws, requirements for a concealed weapons permit usually include residency of the particular state, being of some minimum age, being fingerprinted by a governmental agency, and passing a background check.  Other requirements usually include passing a government-certified gun safety class, and/or passing a practical qualification demonstrating handgun proficiency, and a monetary fee. Such requirements may vary widely from state to state, from some having few of these to all of them.</p>

                                <p>The following states are shall issue: Alabama, Alaska, Arizona, Arkansas, Colorado, District of Columbia, Florida, Georgia, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Mexico, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island (generally with some exceptions), South Carolina, South Dakota, Tennessee, Texas Utah Virginia, Washington, West Virginia, Wisconsin, and Wyoming.  The territory of Guam is also shall-issue, as is Puerto Rico.</p>
                                
                                <p>Certain states and jurisdictions, while technically  "may-issue" by law, direct their issuing authorities to issue concealed weapons permits to all applicants, and therefore, in practice, are shall issue.   Examples are Connecticut, and certain cities and counties in California, Massachusetts, and New York.
                                Shall-issue with limited discretion is a subset of shall-issue licensing that borders between pure shall-issue and may-issue policy, where an issuing authority has a limited degree of discretion to deny applicants a concealed carry permit based either on the applicant's suitability or reason for requesting a permit, even after the applicant has completed any required training and passed a background check.</p>
                                
                                <p>In states with such licensing practices, the issuing authority would be required to demonstrate with substantiating evidence that the applicant is either not suitable or lacks appropriate need for the permit. Most denials in such states are typically reversed upon appeal provided the applicant has passed a background check and fulfilled any training requirements for the permit. </p>
                                
                                States with shall-issue laws that allow a limited degree of discretion include Illinois, Indiana, Minnesota, New Hampshire, Oregon, and Pennsylvania. Although may-issue by statute, Connecticut also falls into this subset, in practice.

                                Some shall-issue jurisdictions allow concealed carry permits to automatically renew, as long as the individual files a renewal application before the concealed weapons permit expires, or shortly thereafter.  Other states require the holder of a concealed weapons permit to undergo ongoing, occasional training in weapons safety and criminal background checks before applying for renewal. 

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
   
export default withStyles(ShallIssuePageStyles)(ShallIssuePage);