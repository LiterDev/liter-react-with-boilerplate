import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
// import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import BackArrowIcon from '@material-ui/icons/KeyboardArrowLeft';
import classNames from 'classnames';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';

import SignIn from 'containers/SignIn/Loadable';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import AppDrawer from './AppDrawer';
import MenuIcon from '../../images/ic-round-menu.png';
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
    width: '88%',
    backgroundColor: '#ffffff',
    // paddingBottom: 16,
    // paddingLeft: 16,
    // paddingRight: 16,
    // paddingTop: 1,
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  appBar: {
    backgroundColor: '#ffffff',
    boxShadow: '0 0.5px 0 0 #eeeeee',
    // backgroundColor: 'rgba(0, 0, 0, 0.79)',
  },
  appBarTrans: {
    backgroundColor: '#fbfbfb',
  },
  popFooter: {
    textAlign: 'center',
  },
  popWrap: {
    // width: 295,
    marginRight: 0,
    marginLeft: 0,
  },
  popRoot: {
    textAlign: 'center',
    justifyContent: 'center',
    // borderTop: '1px',
    // marginRight: 0,
    // marginLeft: 0,
  },
  popPaper: {
    width: 295,
    textAlign: 'center',
    // marginRight: 0,
    // marginLeft: 0,
  },
  button: {
    // margin: 'auto',
    // display: 'block',
  },
  closeBtn: {
    color: '#000000',
    position: 'absolute',
    right: 5,
    top: 5,
  },
  dialogContent: {
    paddingTop: '20px',
  },
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

/* eslint-disable react/prefer-stateless-function */
class ProfileHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      loginPopOpen: false,
      loginConfirmPopOpen: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.loginConfirmPopClose = this.loginConfirmPopClose.bind(this);
    this.handleSignInMove = this.handleSignInMove.bind(this);
  }
  handleSignInMove = () => {
    this.props.loginConfirmPopClose();
    this.setState({
      loginConfirmPopOpen: false,
      loginPopOpen: true,
    });
  };
  loginConfirmPopClose = () => {
    // console.log(`close`);
    this.setState({ loginConfirmPopOpen: false });
    this.props.loginConfirmPopClose();
  };
  handleClose = () => {
    this.setState({ loginPopOpen: false });
  };

  handleDrawerOpen = () => {
    // this.props.dispatch(increment());
    this.setState({ mobileOpen: true });
  };

  handleDrawerClose = () => {
    // this.props.dispatch(toggleAppDrawer());
    this.setState({ mobileOpen: false });
  };

  moveBack = () => {
    this.props.history.go(-1);
  }

  handleHelp = () => {
    window.location.href = `mailto:${messages.helpEmailAddress.defaultMessage}`;
    this.handleDrawerOpen();
  };

  moveHome = () => {
    // console.log('home');
    // return <Redirect to="/login" />;
    this.props.history.push('/');
  };
  logout = () => {
    // TODO : auth로 옮길것
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
    // this.props.history.push('/');
    // this.context.router.history.push(`/`);
    window.location.href = '/';
  };
  static contextTypes = {
    router: PropTypes.object,
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps.loginConfirmPopOpen);
    if (Boolean(nextProps.loginConfirmPopOpen)) {
      if (nextProps.loginConfirmPopOpen !== prevState.loginConfirmPopOpen) {
        return { loginConfirmPopOpen: nextProps.loginConfirmPopOpen };
      }
    }

    return null;
  }
  render() {
    const { classes, headerTitle, searchBar, loginSuccessHandler } = this.props;
    // console.log(searchBar);

    return (
      <div>
        <AppBar
          position="fixed"
          className={classNames(
            classes.top_box,
            this.props.transparency === true
              ? classes.appBarTrans
              : classes.appBar,
          )}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.ic_round_home}
              color="inherit"
              aria-label="Menu"
              onClick={this.moveBack}
            >
              <BackArrowIcon className={classes.icon} />
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
              onClick={this.handleDrawerOpen}
            >
              <img src={MenuIcon} />
              {/* <MoreVertIcon className={classes.icon} /> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <AppDrawer
          className={classes.drawer}
          // disablePermanent={disablePermanent}
          onClose={this.handleDrawerClose}
          onOpen={this.handleDrawerOpen}
          mobileOpen={this.state.mobileOpen}
          logout={this.logout}
          onHelp={this.handleHelp}
          location={this.props.location}
        />
        {/* <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar> */}
        <Dialog
          fullScreen
          open={this.state.loginPopOpen}
          onClose={this.handleClose}
          TransitionComponent={Transition}
          scroll="paper"
        >
          <SignIn
            handleClose={this.handleClose}
            loginPop={true}
            loginSuccessHandler={loginSuccessHandler}
          />
        </Dialog>
        <Dialog
          open={this.state.loginConfirmPopOpen}
          onClose={this.loginConfirmPopClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className={classes.popWrap}
          fullWidth
          // maxWidth="false"
          classes={{
            root: classes.popRoot,
            paper: classes.popPaper,
          }}
        >
          <IconButton
            color="inherit"
            onClick={this.loginConfirmPopClose}
            aria-label="Close"
            className={classes.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle id="alert-dialog-title">
            {/* {"Use Google's location service?"} */}
          </DialogTitle>

          <DialogContent className={classes.dialogContent}>
            <DialogContentText id="alert-dialog-description">
              로그인이 필요한 서비스 입니다.
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogActions
            // className={classes.popFooter}
            classes={{
              root: classes.popRoot,
              // paper: classes.popFooter,
            }}
          >
            <Button onClick={this.handleSignInMove} color="secondary">
              로그인페이지 이동
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  headerTitle: PropTypes.any.isRequired,
  searchBar: PropTypes.any,
  transparency: PropTypes.any,
  loginConfirmPopOpen: PropTypes.any,
  loginConfirmPopClose: PropTypes.func,
  loginSuccessHandler: PropTypes.func,
};

// export default ProfileHeader;
// export default withStyles(styles)(ProfileHeader);
export default compose(
  withRouter,
  withStyles(styles),
)(ProfileHeader);
