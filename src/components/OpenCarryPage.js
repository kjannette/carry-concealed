import React from 'react';
import { withStyles, Divider, Typography } from '@material-ui/core';
import OpenCarryPageStyles from '../Styles/OpenCarryPageStyles';
import NavBar from './NavBar.js'

class OpenCarryPage extends React.Component {

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
                        Open carry: what you should know
                    </div>
                    
                    <div className={classes.dividerBox}>
                        <Divider  className={classes.divider}/>
                    </div>

                    <div className={classes.mainTextContainerLeft}>

                        <div className={classes.mainTextLeft}>

                            <Typography className={classes.textLeft}>

                                <p>An important difference to note is the distinction between concealed carry and “open carry.”  Open carry means carrying a firearm in public that is in plain sight, or readily visible to others.</p>

                                <p>While most states require a permit ito carry a weapon that is concealed from view, many states do not have restrictions on the freedom to carry an openly-visible firearm (for example, one carried in a holster).</p>
                                
                                <p>Federal law does not prohibit the public carrying of guns.  However, specific laws and regulations exist that apply to property owned or operated by the federal government.</p>   

                                In fact, most states generally allow private indivduals to openly carry firearms, although some require a permit or license to do so.  States that generally do not allow private citizens to openly carry firearms in public are California, Florida, and Illinois and the District of Columbia. 

                                <p>New York and South Carolina prohibit openly carrying handguns, but not long guns.  On the other hand, Massachusetts, Minnesota, and New Jersey prohibit openly carrying long guns, but not handguns.</p>

                                <p>So-called open carry laws are usually subject to exceptions, which can be substantial. For exmaple, most states that allow open carrying still prohibit carrying weapons openly in specific locations such as schools, state-owned businesses, extablishments that serve alcohol, and public transportation facilites and vehicles are usually on that list.</p>
                                
                            </Typography>

                        </div>

                        </div>

                        <div className={classes.mainTextContainerRight}>

                        </div>

                </div>

                <div className={classes.footer}>

                    <Typography className={classes.footerText}>
                        <p> All content Copyright 2020 concealedweaponspermits.net<br></br>
                            This website is for informational puposes only.  The materials contained herein are not intended to, and do not, constitute legal advice.
                        <br></br>Individuals should verify local laws and regulations, and seek professional counsel.</p>
                    </Typography>

                </div>

            </>
        );
    }
}
   
export default withStyles(OpenCarryPageStyles)(OpenCarryPage);

/*

Open Carry State Weapons Laws - CONTENT

An important difference to note is the distinction between concealed carry and “open carry.”  Open carry means carrying afirearm in public that is in plain sight, or readily visible to others. While most states require a permit ito carry a weaponn that is concealed from view, many states do not have restrictions on the freedom to carry an openly-visible firearm (for example, one carried in a holster).  Federal law does not prohibit the public carrying of guns.  However, specific laws and regulations exist that apply to property owned or operated by the federal government.

In fact, most states generally allow private indivduals to openly carry firearms, although some require a permit or license to do so.  States that generally do not allow private citizens to openly carry firearms in public are California, Florida, and Illinois and the District of Columbia. 

New York and South Carolina prohibit openly carrying handguns, but not long guns.  On the other hand, Massachusetts, Minnesota, and New Jersey prohibit openly carrying long guns, but not handguns. 

So-called open carry laws are usually subject to exceptions, which can be substantial. For exmaple, most states that allow open carrying still prohibit carrying weapons openly in specific locations such as schools, state-owned businesses, places where alcohol is served, and public transportation facilites and vehicles are usually on that list. 


*/