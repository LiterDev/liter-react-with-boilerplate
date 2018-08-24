/**
 *
 * AlertDialog
 *
 */
/* react ref */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/* material-ui core */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

// import FormattedMessage from 'react-intl';
// import messages from './messages';

const styles = {
  titleMarginTop: {
    marginTop: '30px',
  },
  dialogTitle: {
    textAlign: 'center',
    justifyContent: 'center',
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
  dialogContents: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  dialogAction: {
    justifyContent: 'center',
  },
};

/* eslint-disable react/prefer-stateless-function */
class AlertDialog extends React.Component {
  handleClose = () => {
    if (this.props.onClose) {
      this.props.onClose(false);
    }
  };
  handleBtnText = () => {
    if (this.props.btnText) {
      return this.props.btnText;
    }

    return '확인';
  };

  render() {
    const {
      classes,
      open,
      title,
      msg,
      submitHandler,
      onClose,
      fullWidth,
      btnText,
    } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth={fullWidth}
        >
          {onClose && (
            <IconButton
              color="inherit"
              onClick={this.handleClose}
              aria-label="Close"
              className={classes.closeBtn}
            >
              <CloseIcon />
            </IconButton>
          )}
          <DialogTitle
            className={classNames(
              classes.dialogTitle,
              onClose && classes.titleMarginTop,
            )}
            id="alert-dialog-title"
          >
            {title}
          </DialogTitle>
          <DialogContent className={classes.dialogContents}>
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
              {this.handleBtnText()}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AlertDialog.propTypes = {
  fullWidth: PropTypes.bool,
  btnText: PropTypes.string,
};

export default withStyles(styles)(AlertDialog);
