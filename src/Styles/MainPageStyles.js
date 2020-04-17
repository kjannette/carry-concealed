export default (theme) => ({

  bodyClass: {
      marginLeft: '0px',
      marginRight: '0px',
  },
  divider: {
    width: '1000px',
  },
  dividerBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  footer: {
    clear: 'both',
    backgroundColor: '#fff',
    height: '75px',
  },
  footerText: {
    color: '#878383',
    display: 'inline-block',
    fontFamily: 'Roboto',
    fontSize: '13px',
    fontWeight: '100',
    lineHeight: '22px',
    marginLeft: '25px',
    marginTop: '-8px',
    position: 'relative',
  },
  mainContainer: {
      backgroundColor: '#eaeaea',
      height: '1050px',
  },
  mainHeading: {
      color: '#333',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Roboto',
      fontSize: '80px',
      fontWeight: '100',
      height: '85px',
      letterSpacing: '-3.0px',
      marginTop: '48px',
      paddingTop: '45px',
    ['@media (max-width:430px)']: {
      fontSize: '38px',
    }
  },
  mainTextContainerLeft: {
    backgroundColor: '#eaeaea',
    float: 'left',
    height: '950px',
    marginTop: '12px',
    width: '65%',
  },
  mainTextContainerRight: {
    float: 'right',
    backgroundColor: '#eaeaea',
    height: '950px',
    marginTop: '12px',
    width: '35%',
  },
  mainTextLeft: {
    marginLeft: '25px',
    marginRight: '25px',
  },

    subHeading: {
      color: '#333',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Roboto',
      fontSize: '40px',
      fontWeight: '100',
      letterSpacing: '-3.0px',
      marginTop: '7px',
      ['@media (max-width:430px)']: {
        display: 'none',
      }
  },
    textLeft: {
      fontWeight: '300',
    },
})
