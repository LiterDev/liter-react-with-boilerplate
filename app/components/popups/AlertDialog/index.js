/**
 *
 * AlertDialog
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import FormattedMessage from 'react-intl';
// import messages from './messages';

const styles = {
  dialogTitle: {
    marginTop: '30px',
    textAlign: 'center',
  },
  closeBtn: {
    color: '#000000',
    position: 'absolute',
    right: 5,
    top: 5,
  },
  okBtn: {
    color: '#1591ff',
    fontSize: '16px',
  },
  dialogAction: {
    justifyContent: 'center',
  },
};

/* eslint-disable react/prefer-stateless-function */
class AlertDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(false);
  };

  render() {
    const { classes, open, title, msg, submitHandler } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            color="inherit"
            onClick={this.handleClose}
            aria-label="Close"
            className={classes.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {msg}
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogActions className={classes.dialogAction}>
            {/* <Button onClick={handleClose} color="primary">
              Disagree
            </Button> */}
            <Button
              className={classes.okBtn}
              onClick={submitHandler}
              color="secondary"
              autoFocus
            >
              {/* {<FormattedMessage {...messages.ok} />} */}
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AlertDialog.propTypes = {};

export default withStyles(styles)(AlertDialog);
