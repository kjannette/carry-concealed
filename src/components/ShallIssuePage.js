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

                                <p>Test text Test text Test text Test text Test text</p>
                                <p>Test text Test text Test text Test text Test text</p>
                                <p>Test text Test text Test text Test text Test text</p>
                                <p>Test text Test text Test text Test text Test text</p>
                                
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