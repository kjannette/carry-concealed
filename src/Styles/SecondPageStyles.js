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
    logo: {
        height: '50px',
        marginLeft: '50px',
        marginTop: '12px',
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

    navBarText: {
      color: '#878383',
      display: 'inline-block',
      fontFamily: 'Roboto',
      fontWeight: '100',
      fontStyle: 'italic',
      paddingLeft: '12px',
      position: 'relative',
      top: '-10px',
      width: '270px',
    },
      navContainer: {
        backgroundColor: '#fff',
        
        height: '70px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '400',
        paddingRight: '20px',
        position: 'fixed',
        right: '0px',
        top: '0px',
        width: '100%',
      },
      navContainerButtons: {
        float: 'left',
        width: '50%',
        display: 'inline-block',
        textAlign: 'right',
      },

      navContainerLogo: {
        float: 'left',
        width: '50%',
        display: 'inline-block',
        textAlign: 'left',
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
})