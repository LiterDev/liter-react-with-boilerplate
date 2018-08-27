/**
 *
 * LoginAlertDialog
 *
 */
/* react ref*/
import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
// import styled from 'styled-components';
/* material-ui core */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
/* material-ui icon */
/* containers */
/* components */
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
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

/* eslint-disable react/prefer-stateless-function */
class LoginAlertDialog extends React.PureComponent {
  constructor(props) {    
    super(props);
    this.state = {
      openLoginPop: props.open,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.openLoginPop) {
      return { openLoginPop: nextProps.open };
    }
    return null;
  }

  handleLoginClose = () => {
    console.log("Close");
    console.log(this.state.openLoginPop);
    this.setState({
      openLoginPop: false,
    });
    // this.props.history.push('/mypage');
    console.log(this.state.openLoginPop);
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.openLoginPop);
    return (
      <div>
        <Dialog
          open={this.state.openLoginPop}
          onClose={this.handleLoginClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className={classes.popWrap}
          fullWidth="true"
          // maxWidth="false"
          classes={{
            root: classes.popRoot,
            paper: classes.popPaper,
          }}
        >
          <IconButton
            color="inherit"
            onClick={this.handleLoginClose}
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

LoginAlertDialog.propTypes = {};

export default withStyles(styles)(LoginAlertDialog);
