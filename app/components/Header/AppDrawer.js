import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
// import HeaderLink from './HeaderLink';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing.unit / 2,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  // https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
  toolbarIe11: {
    display: 'flex',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  anchor: {
    color: theme.palette.text.secondary,
  },
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
  },
  buttonLeaf: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  link: {
    textDecoration: 'none',
  },
});

// iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

function AppDrawer(props) {
  const {
    classes,
    className,
    // disablePermanent,
    mobileOpen,
    onClose,
    onOpen,
    // onClick,
    // href,
    logout,
  } = props;
  // const style = {
  //   paddingLeft: 8 * (3 + 2 * 0),
  // };
  const drawer = (
    <div className={classes.nav}>
      <div className={classes.toolbarIe11}>
        <div className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            LITER
          </Typography>
        </div>
      </div>
      <Divider />
      {/* {renderNavItems({ props, pages: context.pages, activePage: context.activePage, depth: 0 })} */}
      {/* <HeaderLink to="/features">
        <FormattedMessage {...messages.features} />
      </HeaderLink> */}
      <List>
        <ListItem className={classes.itemLeaf}>
          {
            // eslint-disable-next-line anchor-is-valid
          }
          <Link
            to="/signup"
            onClick={onClose}
            role="button"
            className={classes.link}
          >
            <Button>signUp</Button>
          </Link>
        </ListItem>
        <ListItem className={classes.itemLeaf}>
          {
            // eslint-disable-next-line anchor-is-valid
          }
          <Link
            to="/signin"
            onClick={onClose}
            role="button"
            className={classes.link}
          >
            <Button>signIn</Button>
          </Link>
        </ListItem>
        <ListItem className={classes.itemLeaf}>
          {
            // eslint-disable-next-line anchor-is-valid
          }
          <Link
            to="/mypage"
            onClick={onClose}
            role="button"
            className={classes.link}
          >
            <Button>MyPage</Button>
          </Link>
        </ListItem>
        <ListItem className={classes.itemLeaf}>
          {
            // eslint-disable-next-line anchor-is-valid
          }
          <Link
            to="/review/write"
            onClick={onClose}
            role="button"
            className={classes.link}
          >
            <Button>review</Button>
          </Link>
        </ListItem>
        <ListItem className={classes.itemLeaf}>
          {
            // eslint-disable-next-line anchor-is-valid
          }
          <Link
            to="/slide"
            onClick={onClose}
            role="button"
            className={classes.link}
          >
            <Button>slide</Button>
          </Link>
        </ListItem>
        <ListItem className={classes.itemLeaf}>
          <Button onClick={logout}>logout</Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={className}>
      <Hidden>
        <SwipeableDrawer
          classes={{
            paper: classNames(classes.paper, 'algolia-drawer'),
          }}
          disableBackdropTransition={!iOS}
          variant="temporary"
          open={mobileOpen}
          onOpen={onOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
          anchor="right"
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
    </div>
  );
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  mobileOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

AppDrawer.contextTypes = {
  //   activePage: PropTypes.object.isRequired
};

export default withStyles(styles)(AppDrawer);
