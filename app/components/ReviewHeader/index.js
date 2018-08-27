import React from 'react';
import PropTypes from 'prop-types';
import * as utils from 'utils/commonFunc';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import SvgIcon from '@material-ui/core/SvgIcon';
import SearchIcon from '@material-ui/icons/Search';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Redirect } from 'react-router-dom';

import messages from './messages';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // paddingTop: theme.spacing.unit * 0,
    // textAlign: 'center',
    display: 'flex',
  },
  flex: {
    flexGrow: 1,
    width: 103,
    height: 20,
    font: {
      family: 'Apple SD Gothic Neo',
      size: 17,
      weight: 600,
      style: 'normal',
      stretch: 'normal',
    },
    line: {
      height: 'normal',
    },
    letter: {
      spacing: 'normal',
    },
    text: {
      align: 'center',
    },
    color: '#111111', 
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  top_box: {
    // width: '375px',
    // height: 64,
    height: theme.spacing.unit * 8,
    // background: {
    //   color: '#ffffff',
    // },
    boxShadow: '0 0.5px 0 0 #eeeeee',
    transition: theme.transitions.create('width'),
    '@media print': {
      // position: 'absolute',
    },
  },
  ic_round_menu: {
    width: 24,
    height: 24,
    object: {
      fit: 'contain',
    },
    // marginRight: 20,
    right: 20,
    position: 'absolute',
  },
  ic_round_home: {
    width: 24,
    height: 24,
    object: {
      fit: 'contain',
    },
    marginRight: 20,
    // right: 20,
    position: 'absolute',
  },
  toolbar: {
    height: '100vh',
    textAlign: 'center',
  },
  icon: {
    // margin: theme.spacing.unit * 2,
    color: 'black',
  },
  inputWrap: {
    backgroundColor: '#f4f4f4',
    // marginTop: 20,
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    // marginRight: theme.spacing.unit * 2,
    // marginLeft: theme.spacing.unit,
    borderRadius: 5,
    // background: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      // background: fade(theme.palette.common.white, 0.25),
    },
    '& $input': {
      // transition: theme.transitions.create('width'),
      // width: 200,
      '&:focus': {
        // width: 250,
      },
    },
    minHeight: 40,
    // marginBottom: 16,
  },
  search: {
    width: theme.spacing.unit * 6,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#acacac',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${
      theme.spacing.unit
    }px ${theme.spacing.unit * 6}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
    height: 40,
  },
  rowdiv: {
    width: '70%',
    backgroundColor: '#ffffff',
    // paddingBottom: 16,
    // paddingLeft: 16,
    // paddingRight: 16,
    // paddingTop: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  snackbar: {
    width: '100%',
    border: '0.5px solid rgba(184,184,184,0.3)',
    height: '56px',
  },
  // snackbarContent: {
  //   position: 'absolute',
  //   bottom: 0,
  //   width: '100%',
  //   opacity: 1,
  //   filter: 'alpha(opacity=100)',
  //   backgroundColor: 'rgba(255,255,255,1)',
  //   color: '#000000',
  // },
  snackbarActionButton: {
    // paddingTop: '5px',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    fonFamily: 'Apple SD Gothic Neo',
    fontSize: '15px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: 'rgba(110,110,110,1)',
    borderRadius: '0%',
  },
  cautionCaption: {
    color: '#ff2424',
  },
});


function HomeIcon(props) {
  return (
   
    <SvgIcon{...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />  
         
    </SvgIcon>
   
  );
}
/* eslint-disable react/prefer-stateless-function */
class ReviewHeader extends React.Component {
  state = {
    mobileOpen: false,
    openSnackbar: false,
  };

  handleSnackbarClick = () => {
    this.setState({ openSnackbar: true });
  };

  handleSnackbarClose = () => {
    this.setState({ openSnackbar: false });
  };

  handleReport = () => {
    // console.log(messages.helpEmailAddress.defaultMessage);
    window.location.href = `mailto:${messages.helpEmailAddress.defaultMessage}`;
  };

  handleDrawerOpen = () => {
    // this.props.dispatch(increment());
    this.setState({ mobileOpen: true });
  };

  handleDrawerClose = () => {
    // this.props.dispatch(toggleAppDrawer());
    this.setState({ mobileOpen: false });
  };

  moveHome = () => {
    // console.log('home');
   this.props.history.push('/');
   };

  logout = () => {
    // TODO : auth로 옮길것
    utils.removeLocalStorage();
    this.props.history.push('/');
  };

 
onLogout() {
    Accounts.logout();
    this.setState({isAuthenticated: false});
}
  render() {
    const { classes, headerTitle, searchBar } = this.props;

  
    
    return (
      <div>
        <AppBar position="fixed" className={classes.top_box}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.ic_round_home}
              color="inherit"
              aria-label="Menu"
            onClick={this.moveHome}
            >
              {/* <MenuIcon /> */}
              {/* <Link to="/"> */}
              <HomeIcon className={classes.icon}/>
              {/* </Link> */}
            </IconButton>
            {searchBar === 'true' ? (
              <div className={classes.rowdiv}>
                <div className={classes.inputWrap}>
                  <div className={classes.search}>
                    <SearchIcon />
                  </div>
                  <input
                    className={classes.input}
                    placeholder="검색"
                    name="searchValue"
                  />
                </div>
              </div>
            ) : (
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                {headerTitle}
              </Typography>
            )}

            {/* <Button color="inherit">Login</Button> */}
            <IconButton
              className={classes.ic_round_menu}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleSnackbarClick}
            >
              {/* <MenuIcon /> */}
              <MoreIcon className={classes.icon} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="bottom"
          open={this.state.openSnackbar}
          onClose={this.handleSnackbarClose}
        >
          <div className={classes.snackbar}>
            <IconButton
              className={classNames(
                classes.cautionCaption,
                classes.snackbarActionButton,
              )}
              onClick={() => this.handleReport()}
            >
              리뷰 신고하기
            </IconButton>
          </div>
          <div className={classes.snackbar}>
            <IconButton
              className={classes.snackbarActionButton}
              onClick={this.handleSnackbarClose}
            >
              취소
            </IconButton>
          </div>
        </Drawer>
        {/* <Snackbar
          open={this.state.openSnackbar}
          onClose={this.handleSnackbarClose}
          // action={
          //   <Button color="inherit" size="small" >
          //     닫기
          //   </Button>
          // }
          className={classes.snackbar}
        >
          <div className={classes.snackbarContent}>
            <div className={classes.backLayer} />
            <div
              className={classNames(
                classes.cautionCaption,
                classes.snackbarActionButton,
              )}
              onClick={this.handleReport}
            >
              리뷰 신고하기
            </div>
            <div
              className={classes.snackbarActionButton}
              onClick={this.handleSnackbarClose}
            >
              취소
            </div>
          </div>
        </Snackbar> */}
      </div>
    );
  }
}

ReviewHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  headerTitle: PropTypes.any.isRequired,
  searchBar: PropTypes.any,
};

// export default Header;
// export default withStyles(styles)(Header);
export default compose(
  withRouter,
  withStyles(styles),
)(ReviewHeader);