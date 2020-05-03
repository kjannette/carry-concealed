export default (theme) => ({
    divider: {
      width: '1000px',
      ['@media (max-width:430px)']: {
        width: '280px',
      },
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
    lowerSubheading: {
      color: '#333',
      display: 'flex',
      fontFamily: 'Roboto',
      fontSize: '30px',
      justifyContent: 'center',
      letterSpacing: '10.0px',
      fontWeight: '100',
      height: '85px',
      letterSpacing: '-0.2px',
      marginTop: '25px',
    },
    mainContainer: {
        backgroundColor: '#ebebeb',
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
        marginLeft: '12px',
      }
    },
    mapBox: {
      justifyContent: 'center',
    },
    subHeading: {
      color: '#333',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Roboto',
      fontSize: '40px',
      fontWeight: '100',
      letterSpacing: '-0.8px',
      marginTop: '7px',
      ['@media (max-width:430px)']: {
        display: 'none',
      }
    },
  })
  