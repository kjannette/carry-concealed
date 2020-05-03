import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import USAMap from "react-usa-map";
import MapStyles from '../styles/MapStyles.js'
import NavBar from './NavBar.js'

class Map extends React.Component {

  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
 
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.mapContainer}>
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default withStyles(MapStyles)(Map);