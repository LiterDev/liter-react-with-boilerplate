import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import { FormattedMessage } from 'react-intl';
import { HeaderLink } from './HeaderLink';
import messages from './messages';
// import LinkBar from './LinkBar';

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
});

// iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

function AppDrawer(props, context) {
  const { classes, className, mobileOpen, onClose, onOpen } = props;

  const drawer = (
    <div className={classes.nav}>
      <div className={classes.toolbarIe11}>
        <div className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            Material-UI
          </Typography>
        </div>
      </div>
      <Divider />
      {/* {renderNavItems({ props, pages: context.pages, activePage: context.activePage, depth: 0 })} */}
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
};

AppDrawer.contextTypes = {
  //   activePage: PropTypes.object.isRequired
};

export default withStyles(styles)(AppDrawer);
