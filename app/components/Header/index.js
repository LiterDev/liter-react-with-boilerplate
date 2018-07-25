import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppDrawer from './AppDrawer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 0,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  top_box: {
    // width: '375px',
    height: 64,
    background: {
      color: '#ffffff',
    },
  },
  ic_round_menu: {
    width: 24,
    height: 24,
    object: {
      fit: 'contain',
    },
    marginRight: 20,
  },
  toolbar: {
    height: '100vh',
  },
});

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
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed" className={classes.top_box}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.ic_round_menu}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <AppDrawer
          className={classes.drawer}
          // disablePermanent={disablePermanent}
          onClose={this.handleDrawerClose}
          onOpen={this.handleDrawerOpen}
          mobileOpen={this.state.mobileOpen}
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
};

// export default Header;
export default withStyles(styles)(Header);
