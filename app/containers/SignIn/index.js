/**
 *
 * SignIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import Header from 'components/Header';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InputWithHelper from 'components/InputWithHelper';
import BlueButton from 'components/BlueButton';
import { Redirect } from 'react-router-dom';
// import ErrorPop from 'components/ErrorPop';
import {
  makeSelectSignIn,
  makeSelectSignInSuccess,
  makeSelectSignInError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { signinAction, signinInit } from './actions';
import signUpmessages from '../SignUp/messages';
import LiterLogo from '../../images/liter-logo@3x.png';

const styles = theme => ({
  appBar: {
    height: theme.spacing.unit * 8,
    textAlign: 'right',

    // position: 'relative',
  },
  container: {
    paddingTop: theme.spacing.unit * 0,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    height: '100vh',
    paddingLeft: 30,
    paddingRight: 30,
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  close: {
    position: 'absolute',
    right: 6.4,
  },
  litertext: {
    paddingTop: 22,
  },
  literlogo: {
    width: 130,
    height: 35,
    objectFit: 'contain',
  },
  bodytext: {
    marginTop: 22,
    // width: 255,
    height: 19,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#111111',
  },
  signupForm: {
    paddingTop: 94,
    marginBottom: 2,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      emailError: false,
      passwordError: false,
    };
    this.onSubmitFormInit = this.onSubmitFormInit.bind(this);
  }
  onSubmitFormInit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const errors = [];
    if (!email) {
      errors.push(500108);
    } else {
      this.setState({
        emailError: false,
      });
    }
    if (!password) {
      errors.push(500100);
    } else {
      this.setState({
        passwordError: false,
      });
    }

    if (errors.length > 0) {
      for (let i = 0; i < errors.length; i += 1) {
        this.validationResult(errors[i]);
      }
      return false;
    }

    this.setState({
      complete: true,
    });
    // const data = new FormData(event.target);
    this.props.signinForm(email, password);
    return true;
  }

  validationResult(errorCode) {
    if (errorCode === 500108 || errorCode === 500109) {
      this.setState({
        emailError: <FormattedMessage {...signUpmessages.email} />,
      });
    }

    if (
      errorCode === 500100 ||
      errorCode === 500101 ||
      errorCode === 500102 ||
      errorCode === 500105
    ) {
      this.setState({
        passwordError: <FormattedMessage {...signUpmessages.password} />,
      });
    }
  }
  // componentDidMount() {
  //   // 외부 라이브러리 연동: D3, masonry, etc
  //   // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  //   // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
  //   this.props.defaultAction();
  // }
  componentWillMount() {
    console.log('will mound');
  }
  render() {
    const { classes, signinSuccess, signinError } = this.props;
    // console.log(signinSuccess);
    // console.log(signinEnd);
    if (signinSuccess) {
      // console.log(signinSuccess);
      // console.log(signinSuccess.accessToken);
      localStorage.setItem('accessToken', signinSuccess.accessToken);
      localStorage.setItem('refreshToken', signinSuccess.refreshToken);
      localStorage.setItem('username', signinSuccess.username);
      // this.props.loadUserData(signinSuccess.username);
      this.props.signinEnd();
      let pathLink = '/';
      // console.log(this.props.location);
      // console.log(this.props.location.state);
      if (this.props.location.state) {
        pathLink = this.props.location.state.from.pathname;
      }
      return (
        <Redirect
          to={{
            pathname: pathLink,
            // state: { from: this.props.location },
          }}
        />
      );
    }
    // if (signinError) {
    //   this.handleClickOpen();
    //   // return false;
    // }
    return (
      <div>
        {/* {signinError && this.handleClickOpen()} */}
        {/* <FormattedMessage {...messages.header} /> */}
        {/* <Header headerTitle={<FormattedMessage {...messages.header} />} /> */}
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              // onClick={this.props.history.goBack()}
              aria-label="Close"
              className={classes.close}
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className={classes.container}>
          <div className={classes.litertext}>
            <img
              src={LiterLogo}
              alt="LITER_logo"
              className={classes.literlogo}
            />
          </div>
          <div className={classes.bodytext}>
            <FormattedMessage {...messages.bodytext} />
          </div>
          <form onSubmit={this.onSubmitFormInit}>
            <div className={classes.signupForm}>
              <InputWithHelper
                placeholder={<FormattedMessage {...signUpmessages.email} />}
                error={this.state.emailError}
                type="text"
                inputName="email"
              />
              <InputWithHelper
                placeholder={<FormattedMessage {...signUpmessages.password} />}
                error={this.state.passwordError}
                type="password"
                inputName="password"
              />
              <div className={classes.buttonForm}>
                <BlueButton
                  btnName={<FormattedMessage {...messages.login} />}
                  onClickFunc={this.submitForm}
                  complete={this.state.complete}
                  btnType="submit"
                  // onClick={this.submitForm}
                />
              </div>
            </div>
          </form>
          {signinError && '로그인이 실패하였습니다.'}
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  signinForm: PropTypes.func.isRequired,
  // signinSuccess: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  signinError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // defaultAction: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  signin: makeSelectSignIn(),
  signinSuccess: makeSelectSignInSuccess(),
  signinError: makeSelectSignInError(),
  // signinEnd: makeSelectSignInEnd(),
});

function mapDispatchToProps(dispatch) {
  return {
    signinForm: (email, password) => {
      dispatch(signinAction(email, password));
    },
    signinEnd: () => {
      console.log('call SignInEnd');
      dispatch(signinInit());
    },
    // defaultAction: () => {
    //   dispatch(defaultAction());
    // },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signIn', reducer });
const withSaga = injectSaga({ key: 'signIn', saga });

// export default withStyles(styles)(FullScreenDialog);

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(SignIn);
