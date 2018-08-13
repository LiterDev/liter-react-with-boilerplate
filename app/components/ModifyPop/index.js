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
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Cancel from '@material-ui/icons/Cancel';
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
class ModifyPop extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userNickName: this.props.defaultValue,
    };
  }
  handleClose = () => {
    this.props.onClose(false);
  };

  handelReset = () => {
    this.setState({
      userNickName: this.props.defaultValue,
    });
    console.log(
      `reset [${this.state.userNickName}] ---> [${this.props.defaultValue}]`,
    );
  };

  handleSubmit = () => {
    const { submitHandler } = this.props;
    submitHandler(this.state.userNickName);
  };

  // componentDidMount() {
  //   const { defaultValue } = this.props;
  //   this.setState({
  //     userNickName: defaultValue,
  //   });
  // }

  render() {
    const { classes, open, submitHandler, defaultValue } = this.props;
    const { userNickName } = this.state;

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
            사용자 이름 변경
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              변경할 사용자 이름을 입력하세요.
            </DialogContentText>
            <Input
              defaultValue={defaultValue}
              value={userNickName}
              onChange={e => this.setState({ userNickName: e.target.value })}
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Cancel onClick={this.handelReset} />
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

ModifyPop.propTypes = {
  submitHandler: PropTypes.func,
};

export default withStyles(styles)(ModifyPop);
