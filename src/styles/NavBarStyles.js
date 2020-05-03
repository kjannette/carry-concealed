export default (theme) => ({
  burger: {
    '& .MuiButtonBase-root.MuiButton-root': {
      marginTop: '8px',
    },
  },
  buttonz: {
    textDecoration: 'none',
    ' & .MuiButtonBase-root.MuiButton-root': {
      textDecoration: 'none',
    },
  },
  logo: {
    height: '50px',
    marginLeft: '45px',
    marginTop: '10px',
    float: 'left',
    ['@media (max-width:430px)']: {
        height: '44px',
        marginLeft: '30px',
    },
  },
  logo2: {
    height: '50px',
    marginTop: '10px',
    float: 'right',
    ['@media (max-width:430px)']: {
        height: '44px',
        marginLeft: '30px',
        marginTop: '13px',
    },
},
  menuContainer: {
    ['@media (min-width:430px)']: {
        display: 'none',
    },
  },
  navBarText: {
    color: '#878383',
    display: 'inline-block',
    fontFamily: 'Roboto',
    fontWeight: '100',
    fontStyle: 'italic',
    paddingLeft: '12px',
    position: 'relative',
    float: 'none',
    top: '-11px',
    width: '270px',
    ['@media (max-width:430px)']: {
        display: 'none',
    },
  },
  navContainer: {
    backgroundColor: '#fff',
    borderBottom: '2px solid #a8a5a2',
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
    ' & .MuiButtonBase-root.MuiButton-root': {
      marginRight: '45px',
      marginTop: '14px',
    },
    ['@media (max-width:430px)']: {
      display: 'none',
    },
  },
  navContainerMenu: {
    width: '50%',
    ' & .MuiButtonBase-root.MuiButton-root': {
      marginTop: '5px',
      float: 'right',
    },
    ['@media (min-width:430px)']: {
      display: 'none',
    },
    ['@media (max-width:430px)']: {
      width: '37%',
    },
  },
  navContainerLogo: {
    float: 'left',
    width: '50%',
    display: 'inline-block',
    //textAlign: 'left',
    ['@media (max-width:430px)']: {
      width: '63%',
    },
  },
})

