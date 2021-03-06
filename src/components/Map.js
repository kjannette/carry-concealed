import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Divider, Typography } from '@material-ui/core';
import USAMap from "react-usa-map";
import MapStyles from '../styles/MapStyles.js'
import SpecMapStyles from '../styles/SpecMapStyles.css'
import { withRouter } from 'react-router'; 

class Map extends React.Component {

  mapHandler = (event) => {
    console.log(event.target.dataset.name);
  };

  statesCustomConfig = () => {
    const { history } = this.props;
    return {
      "MI": {
        clickHandler: (event) => history.push('/michigan')
      },
      "TX": {
        clickHandler: (event) => history.push('/texas')
      },
      "FL": {
        clickHandler: (event) => history.push('/florida')
      },
    };
  };
 
  render() {

    const { classes } = this.props;

    return (
      <div>
        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </div>
    );
  }
}

export default withRouter(Map)