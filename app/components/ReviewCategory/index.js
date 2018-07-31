/**
 *
 * ReviewCategory
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import blue from '@material-ui/core/colors/blue';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  root: {
    // backgroundColor: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.79)',
  },
  popBpdy: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    height: '100vh',
    textAlign: 'center',
    flexGrow: 1,
  },
  paper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeBtn: {
    color: '#ffffff',
    position: 'absolute',
    right: 20,
    top: 19,
  },
  flex: {
    with: '100%',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 35,
  },
  toolbar: {
    textAlign: 'center',
    // position: 'relative',
    with: '100%',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

/* eslint-disable react/prefer-stateless-function */
class ReviewCategory extends React.PureComponent {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };
  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        fullScreen
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
        className={classes.root}
        TransitionComponent={Transition}
        // paper={classes.paper}
        classes={{
          paper: classes.paper,
        }}
      >
        {/* <AppBar className={classes.appBar}> */}
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            onClick={this.handleClose}
            aria-label="Close"
            className={classes.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          <div className={classes.flex}>카테고리를 선택해 주세요.</div>
          {/* <Button color="inherit" onClick={this.handleClose}>
            save
          </Button> */}
        </Toolbar>
        {/* </AppBar> */}
        <div className={classes.popBpdy} />
      </Dialog>
    );
  }
}

ReviewCategory.propTypes = {};

export default withStyles(styles)(ReviewCategory);
