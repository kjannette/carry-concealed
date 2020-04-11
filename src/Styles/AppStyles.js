export default (theme) => ({

    bodyClass: {
        marginLeft: '0px',
        marginRight: '0px',
    },
    logo: {
        height: '50px',
        marginLeft: '50px',
        marginTop: '12px',
    },
    mainContainer: {
        backgroundColor: '#eaeaea',
        height: '1020px',
    },
    mainHeading: {
        color: '#333',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Roboto',
        fontSize: '96px',
        fontWeight: '100',
        letterSpacing: '-3.0px',
        marginTop: '48px',
        paddingTop: '40px',
    },
      navContainer: {
        backgroundColor: '#fff',
        display: 'flex',
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
      }
})