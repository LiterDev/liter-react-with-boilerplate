import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SvgIcon from '@material-ui/core/SvgIcon';
import SearchIcon from '@material-ui/icons/Search';
// import { Link } from 'react-router-dom';
import BackArrowIcon from '@material-ui/icons/KeyboardArrowLeft';
import * as utils from 'utils/commonFunc';

import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import AppDrawer from './AppDrawer';

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
      family: 'AppleSDGothicNeo',
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
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
/* eslint-disable react/prefer-stateless-function */
class PopupHeader extends React.Component {
  state = {
    mobileOpen: false,
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

  moveHome = () => {
    // console.log('home');
    // return <Redirect to="/login" />;
    this.props.history.push('/');
  };
  logout = () => {
    // TODO : auth로 옮길것
    utils.removeLocalStorage();
    this.props.history.push('/');
  };
  render() {
    const { classes, headerTitle, searchBar } = this.props;
    // console.log(searchBar);
    return (
      <div>
        <AppBar position="fixed" className={classes.top_box}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.ic_round_home}
              color="inherit"
              aria-label="Menu"
              onClick={this.moveBack}
            >
              {/* <MenuIcon /> */}
              {/* <Link to="/"> */}
              <BackArrowIcon className={classes.icon} />

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
              onClick={this.handleDrawerOpen}
            >
              {/* <MenuIcon /> */}
              {/* <MoreVertIcon className={classes.icon} /> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* <AppDrawer
          className={classes.drawer}
          // disablePermanent={disablePermanent}
          onClose={this.handleDrawerClose}
          onOpen={this.handleDrawerOpen}
          mobileOpen={this.state.mobileOpen}
          logout={this.logout}
        /> */}
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
      </div>
    );
  }
}

PopupHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  headerTitle: PropTypes.any.isRequired,
  searchBar: PropTypes.any,
};

// export default Header;
// export default withStyles(styles)(Header);
export default compose(
  withRouter,
  withStyles(styles),
)(PopupHeader);
