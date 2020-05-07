export default (theme) => ({

    bodyClass: {
        marginLeft: '0px',
        marginRight: '0px',
    },
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
    link: {
      textDecoration: 'none',
      color: 'blue',
    },
    mainContainer: {
        backgroundColor: '#ebebeb',
        height: '1450px',
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
    mainTextContainerLeft: {
      backgroundColor: '#ebebeb',
      float: 'left',
      height: '950px',
      marginTop: '12px',
      width: '65%',
      ['@media (max-width:430px)']: {
        height: '1800px',
        width: '100%',
      },
    },
    mainTextContainerRight: {
      float: 'right',
      backgroundColor: '#ebebeb',
      height: '950px',
      marginTop: '12px',
      width: '35%',
      ['@media (max-width:430px)']: {
        display: 'none',
      }
    },
    mainTextLeft: {
      marginLeft: '25px',
      marginRight: '25px',
    },
    mainTextRight: {
      height: '400px',
      width: '80%',
      backgroundColor: '#e0e0e0',
      borderRadius: '15px',
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
    textLeft: {
      fontWeight: '300',
    },
    pic: {
      width: '90%',
      paddingRight: '20px',
      paddingLeft: '20px',
      paddingTop: '30px',
    },
    picText: {
      width: '90%',
      paddingRight: '20px',
      paddingLeft: '20px',
      fontWeight: '100',
      fontSize: '13px',
      marginTop: '2px',
      lineHeight: '20px',
    }
  })
  