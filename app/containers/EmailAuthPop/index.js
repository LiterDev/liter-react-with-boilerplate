/**
 *
 * EmailAuthPop
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import makeSelectEmailAuthPop from './selectors';
import reducer from './reducer';
import saga from './saga';

// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = {
  dialogTitle: {
    marginTop: '30px',
    textAlign: 'center',
  },
  dialogContent: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  dialogAction: {
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    paddingTop: '10px',
  },
  closeBtn: {
    color: '#000000',
    position: 'absolute',
    right: 5,
    top: 5,
  },
  reSend: {
    color: '#1591ff',
    fontSize: '16px',
  },
};

/* eslint-disable react/prefer-stateless-function */
export class EmailAuthPop extends React.PureComponent {
  render() {
    const { classes, open, submitHandler } = this.props;
    return (
      <div>
        <Dialog fullScreen open={open} onClose={this.handleClose}>
          <IconButton
            color="inherit"
            onClick={this.handleClose}
            aria-label="Close"
            className={classes.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
            이메일인증
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText id="alert-dialog-description">
              가입하신 이메일 주소로 인증 메일을 발송하였습니다.
              <br />
              <br />
              test****@gmail.com
              <br />
              <br />
              메일에 포함된 링크를 탭하여 인증을 완료하십시오.
              <br />
              이메일 인증을 통해 지갑을 생성할 수 있으며,
              <br />
              보상을 받을 수 있습니다.
              <br />
              <br />
              59:59
              <br />
              (인증 남은 시간)
              <br />
              <br />
            </DialogContentText>
            <Divider />
            <br />
            <Button
              onClick={this.resSendEmail}
              className={classes.okBtn}
              color="second"
              variant="outlined"
              autoFocus
            >
              재인증하기
            </Button>
          </DialogContent>
          <DialogActions className={classes.dialogAction}>
            <div>
              <Typography variant="caption">
                이메일 인증에 문제가 있으시면 관리자에게 문의해 주십시오.
              </Typography>
            </div>
            <div>
              <Button
                // onClick={submitHandler}
                className={classes.okBtn}
                color="second"
                autoFocus
              >
                문의하기
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

EmailAuthPop.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  emailauthpop: makeSelectEmailAuthPop(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'emailAuthPop', reducer });
const withSaga = injectSaga({ key: 'emailAuthPop', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(EmailAuthPop);
