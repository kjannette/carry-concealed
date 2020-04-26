import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import NoIssuePageStyles from '../Styles/NoIssuePageStyles';
import NavBar from './NavBar.js'
import gunban from '../images/gunban.jpg'

class NoIssuePage extends React.Component {

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
                        No Issue jurisdictions 
                    </div>

                    <div className={classes.dividerBox}>
                        <Divider  className={classes.divider}/>
                    </div>

                    <div className={classes.mainTextContainerLeft}>

                        <div className={classes.mainTextLeft}>

                            <Typography className={classes.textLeft}>

                                <p>A no issue jurisdiction is one that, with very limited exceptions, does not allow any private individual  to carry a concealed weapon in public.  Since July 2013, with the legalization of concealed carry in Illinois, there are no pure no issue states.  Only the territory of American Samoa completely prohibits concealed carry of a handgun.</p>

                                <p>However, while Hawaii, Maryland, New Jersey, and certain cities and counties in California, Massachusetts, and New York are technically <Link to={"mayissue"} className={classes.link}>may issue jurisdictions,</Link> they are no-issue jurisdictions in practice.  That is because glocal concealed weapons laws and regulations in those places are so restrictive that these locales rarely, if ever, issue concealed weapons permits.</p>

                                <p>Most no-issue jurisdictions do have exceptions.  For example, many permit concealed carry by active and retired law enforcement officials, armed security personnel while on duty and in uniform, and for members of the Armed Forces. 
                                    
                                <p>Wisconsin and Illinois were the last remaining no-issue states, until licensed concealed carry was made legal by law in 2011 and 2013, respectively. </p>
                                    Prior to legalization, Wisconsin outlawed concealed carry, but open carry was legal statewide. Illinois had banned concealed carry, and generally also prohibited open carry in most locations before the changes.</p>

                            </Typography>

                        </div>

                    </div>

                    <div className={classes.mainTextContainerRight}>

                    <div className={classes.mainTextRight}>
                                <img src={gunban} className={classes.pic}></img>
                                <Typography className={classes.rangeText}>
                                   While there are no longer states that issue no concealed carry permits, some are highly restrictive.
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
   
export default withStyles(NoIssuePageStyles)(NoIssuePage);