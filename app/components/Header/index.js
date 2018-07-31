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
// import { Link } from 'react-router-dom';
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
  },
  icon: {
    // margin: theme.spacing.unit * 2,
    color: 'black',
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
class Header extends React.Component {
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

  moveHome = () => {
    console.log('home');
    // return <Redirect to="/login" />;
    this.props.history.push('/');
  };
  logout = () => {
    // TODO : auth로 옮길것
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
    this.props.history.push('/');
  };
  render() {
    const { classes, headerTitle } = this.props;
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
              <HomeIcon className={classes.icon} />

              {/* </Link> */}
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              {headerTitle}
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <IconButton
              className={classes.ic_round_menu}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawerOpen}
            >
              {/* <MenuIcon /> */}
              <MoreVertIcon className={classes.icon} />
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
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  headerTitle: PropTypes.any.isRequired,
};

// export default Header;
// export default withStyles(styles)(Header);
export default compose(
  withRouter,
  withStyles(styles),
)(Header);
