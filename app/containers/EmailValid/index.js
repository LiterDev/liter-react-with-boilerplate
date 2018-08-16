/**
 *
 * EmailValid
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

import {
  makeSelectEmailValid,
  makeSelectEmailValidSuccess,
  makeSelectEmailValidError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { validAction, signinSuccess, signinError } from './actions';

const styles = {
  dialogTitle: {
    marginTop: '100px',
    textAlign: 'center',
  },
  dialogContent: {
    marginTop: '60px',
    justifyContent: 'center',
    textAlign: 'center',
  },
};

/* eslint-disable react/prefer-stateless-function */
export class EmailValid extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
    };
    // this.validEmail = this.validEmail.bind(this);
  }
  // validEmail(validString) {
  // this.props.validEmail(validString);
  // }
  reDirectHome = () => {
    this.setState({
      complete: true,
    });
  };
  componentWillMount() {
    this.props.validEmail(this.props.location.search.substring(7));
  }
  render() {
    const { classes, validSuccess, validError } = this.props;
    const { complete } = this.state;
    // console.log(this.props.location);
    // console.log(this.props.location.search);
    console.log(this.props.location.search.substring(7));
    // const validString = this.props.match.params.validString;
    // this.validEmail(validString);

    console.log(validError);
    if (complete) {
      const pathLink = '/';
      console.log('reDirectHome');
      return (
        <Redirect
          to={{
            pathname: pathLink,
            state: { from: this.props.location },
          }}
        />
      );
    }
    return (
      <div className={classes.header}>
        <Dialog fullScreen open onClose={this.handleClose}>
          <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
            <FormattedMessage {...messages.header} />
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText id="alert-dialog-description">
              가입하신 이메일 주소로 인증이 완료되었습니다.
              <br />
              <br />
              {localStorage.getItem('username')}
            </DialogContentText>
            <br />
            <br />
            <br />
            <Button
              onClick={this.reDirectHome}
              className={classes.okBtn}
              color="secondary"
              variant="outlined"
              autoFocus
            >
              홈페이지로 가기
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

EmailValid.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  emailvalid: makeSelectEmailValid(),
  validSuccess: makeSelectEmailValidSuccess(),
  validError: makeSelectEmailValidError(),
});

function mapDispatchToProps(dispatch) {
  return {
    validEmail: validString => {
      // console.log(validString);
      dispatch(validAction(validString));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'emailValid', reducer });
const withSaga = injectSaga({ key: 'emailValid', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(EmailValid);
