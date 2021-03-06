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
        ['@media (max-width:430px)']: {
          marginLeft: '12px',
        },
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
    mainTextContainerLeft: {
        backgroundColor: '#ebebeb',
        float: 'left',
        height: '950px',
        marginTop: '12px',
        width: '65%',
        ['@media (max-width:430px)']: {
          height: '1500px',
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
        height: '390px',
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
      range: {
        width: '90%',
        paddingRight: '20px',
        paddingLeft: '20px',
        paddingTop: '30px',
      },
      rangeText: {
        width: '90%',
        paddingRight: '20px',
        paddingLeft: '20px',
        fontWeight: '100',
        fontSize: '13px',
        marginTop: '2px',
        lineHeight: '20px',
      }
})