import React from 'react';
import {createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import AppRouter from './routers/AppRouter.js'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let useStyles = makeStyles(theme => ({

}));

export default function App() {
  
  const classes = useStyles();
  
  return (

    <div className={classes.root} >
      
      <AppRouter />

    </div>
   
  );
}