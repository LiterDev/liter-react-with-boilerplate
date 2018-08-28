/**
 *
 * ModifyPop
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Replay from '@material-ui/icons/Replay';

// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import FormattedMessage from 'react-intl';
// import messages from './messages';

const styles = {
  dialogTitle: {
    marginTop: '30px',
    textAlign: 'center',
  },
  dialogContent: {
    paddingBottom: '15px',
  },
  titleFont: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#111111',
  },
  errorFont: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#ff5e4d',
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
  inputBox: {
    marginTop: '10px',
    width: '100%',
    border: 'solid 0.5px #999999 !important',
    borderRadius: '4px',
  },
  msgBox: {
    height: '20px',
    marginTop: '10px',
    textAlign: 'center',
  },
  input: {
    width: '85%',
    paddingLeft: '20px',
  },
  resetBtn: {
    color: '#8a8a8a',
    fontSize: '16px',
  },
};

/* eslint-disable react/prefer-stateless-function */
class ModifyPop extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userNickName: this.props.defaultValue,
      errorMessage: false,
    };
  }
  handleClose = () => {
    this.props.onClose(false);
  };

  handelReset = () => {
    this.setState({
      userNickName: this.props.defaultValue,
    });
    // console.log(
    //   `reset [${this.state.userNickName}] ---> [${this.props.defaultValue}]`,
    // );
  };

  handleSubmit = () => {
    const { submitHandler } = this.props;
    console.log(this.state.userNickName.length);
    if (this.state.userNickName.length > 0) {
      this.setState({ errorMessage: false });
      submitHandler(this.state.userNickName);
    } else {
      this.setState({ errorMessage: '사용자이름은 1글자 이상이어야 합니다.' });
    }
  };

  // componentDidMount() {
  //   const { defaultValue } = this.props;
  //   this.setState({
  //     userNickName: defaultValue,
  //   });
  // }

  render() {
    const { classes, open, defaultValue } = this.props;
    const { userNickName, errorMessage } = this.state;

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
            <Typography className={classes.titleFont}>
              사용자 이름 변경
            </Typography>
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText id="alert-dialog-description">
              {/* 변경할 사용자 이름을 입력하세요. */}
            </DialogContentText>
            <div className={classes.inputBox}>
              <Input
                defaultValue={defaultValue}
                value={userNickName}
                className={classes.input}
                onChange={e => this.setState({ userNickName: e.target.value })}
                inputProps={{
                  'aria-label': 'Description',
                  maxLength: 15,
                }}
                disableUnderline
              />
              <Replay className={classes.resetBtn} onClick={this.handelReset} />
            </div>
            <div className={classes.msgBox}>
              <Typography className={classes.errorFont}>
                {errorMessage && errorMessage}
              </Typography>
            </div>
          </DialogContent>
          <Divider />
          <DialogActions className={classes.dialogAction}>
            {/* <Button onClick={handleClose} color="primary">
              Disagree
            </Button> */}
            <Button
              className={classes.okBtn}
              onClick={this.handleSubmit}
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

ModifyPop.propTypes = {
  submitHandler: PropTypes.func,
};

export default withStyles(styles)(ModifyPop);
