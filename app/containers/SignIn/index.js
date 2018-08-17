/**
 *
 * SignIn
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
// import { browserHistory } from 'react-router';
/* material-ui core */
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
/* material-ui icon */
import CloseIcon from '@material-ui/icons/Close';
/* containers */
import { validateEmail } from 'containers/SignUp';
/* components */
import InputWithHelper from 'components/InputWithHelper';
import BlueButton from 'components/BlueButton';
// import ErrorPop from 'components/popups/ErrorPop';
// import Header from 'components/Header';
/* image */
import LiterLogo from 'images/liter-logo@3x.png';
/* ref */
import FacebookProvider, { Login } from 'react-facebook';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import signUpmessages from '../SignUp/messages';
import reducer from './reducer';
import saga from './saga';
import { signinAction, signinInit, signinFacebookAction } from './actions';
import {
  makeSelectSignIn,
  makeSelectSignInSuccess,
  makeSelectSignInError,
} from './selectors';
import { Collapse } from '../../../node_modules/@material-ui/core';

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
    // paddingLeft: 30,
    // paddingRight: 30,

    // display: 'flex',
    // flexWrap: 'wrap',
  },
  content: {
    width: '80%',
    left: '10%',
    position: 'absolute',
    bottom: '15%',
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
    paddingTop: 60,
    marginBottom: 2,
  },
  facebookBtn: {
    marginTop: 91,
    width: '100%',
    height: 36,
    borderRadius: 3,
    border: 'solid 0.5px rgb(57, 103, 175)',
  },
  facebookBtnText: {
    fontFamily: 'SFProText',
    fontSize: 13,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: 'rgb(57, 103, 175)',
  },
  emailBtn: {
    marginTop: 10,
    width: '100%',
    height: 36,
    borderRadius: 3,
    border: 'solid 0.5px #7c7c7c',
  },
  emailBtnText: {
    fontFamily: 'SFProText',
    fontSize: 13,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#7c7c7c',
  },
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#fafafa',
    color: '#7c7c7c',
    textAlign: 'center',
    height: 42,
    display: 'table',
  },
  footerText: {
    display: 'table-cell',
    verticalAlign: 'middle',
    color: 'rgb(153, 153, 153)',
  },
  footerSignin: {
    display: 'table-cell',
    verticalAlign: 'middle',
    color: 'rgb(153, 153, 153)',
  },
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
  buttonForm: {
    marginTop: '15px',
  },
  recoverPassword: {
    marginTop: '15px',
    fontSize: '13px',
    fontWeight: 500,
    color: '#6d9fcc',
  },
  blank1: {
    paddingTop: '35%',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputFormState: false,
      complete: false,
      emailError: false,
      passwordError: false,
      openSuccesPop: false,
    };
    this.onSubmitFormInit = this.onSubmitFormInit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose = () => {
    this.setState({
      openSuccesPop: false,
    });
    // let pathLink = '/';
    // if (this.props.location.state) {
    //   pathLink = this.props.location.state.from.pathname;
    // }
    const location = this.props.location;
    if (location.state && location.state.from.pathname) {
      this.props.history.push(location.state.from.pathname);
    } else {
      this.props.history.push('/');
    }
  };

  onSubmitFormInit(event) {
    event.preventDefault();
    const email = event.target.email.value;

    const password = event.target.password.value;
    const errors = [];

    // console.log(validateEmail(email));

    if (!email) {
      errors.push(500108);
    } else {
      this.setState({
        emailError: false,
      });
    }
    if (!validateEmail(email)) {
      errors.push(500110);
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
    } else if (errorCode === 500110) {
      this.setState({
        emailError: <FormattedMessage {...signUpmessages.emailvalid} />,
      });
    } else if (
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
    // console.log('will mound');
  }
  handleResponse = data => {
    // console.log(data);
    this.props.signinFacebook(
      data.profile.id,
      data.profile.email,
      data.tokenDetail.accessToken,
    );
  };

  handleError = error => {
    console.log(error);
    // this.setState({ error });
  };

  handleInputForm = () => {
    this.setState({
      inputFormState: true,
    });
  };

  render() {
    const { inputFormState } = this.state;
    const { classes, signinSuccess, signinError } = this.props;
    // console.log(signinSuccess);
    // console.log(signinEnd);
    if (signinSuccess) {
      this.setState({
        openSuccesPop: true,
      });
      // console.log(signinSuccess);
      // console.log(signinSuccess.accessToken);
      localStorage.setItem('accessToken', signinSuccess.accessToken);
      localStorage.setItem('refreshToken', signinSuccess.refreshToken);
      localStorage.setItem('username', signinSuccess.username);
      // this.props.loadUserData(signinSuccess.username);
      this.props.signinEnd();
      const pathLink = '/';
      // console.log(this.props.location);
      // console.log(this.props.location.state);
      // if (this.props.location.state) {
      //   pathLink = this.props.location.state.from.pathname;
      // }
      // return (
      //   <Redirect
      //     to={{
      //       pathname: pathLink,
      //       // state: { from: this.props.location },
      //     }}
      //   />
      // );
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
          <div className={classes.content}>
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
              <Collapse in={!inputFormState}>
                <div className={classes.blank1} />
              </Collapse>
              <Collapse in={inputFormState}>
                <div className={classes.signupForm}>
                  <InputWithHelper
                    placeholder={<FormattedMessage {...signUpmessages.email} />}
                    error={this.state.emailError}
                    type="text"
                    inputName="email"
                  />
                  <InputWithHelper
                    placeholder={
                      <FormattedMessage {...signUpmessages.password} />
                    }
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
                  <div className={classes.recoverPassword}>
                    비밀번호가 기억이 나지 않나요?
                  </div>
                </div>
              </Collapse>
            </form>
            <div>
              {signinError && '로그인이 실패하였습니다.'}
              <FacebookProvider appId={process.env.FACEBOOK_APPID}>
                <Login
                  scope="email"
                  onResponse={this.handleResponse}
                  onError={this.handleError}
                >
                  <button className={classes.facebookBtn}>
                    <span className={classes.facebookBtnText}>
                      <FormattedMessage {...messages.facebookSignin} />
                    </span>
                  </button>
                </Login>
              </FacebookProvider>
              <Collapse in={!inputFormState}>
                <button
                  className={classes.emailBtn}
                  onClick={this.handleInputForm}
                >
                  <span className={classes.emailBtnText}>
                    <FormattedMessage {...messages.emailSignin} />
                  </span>
                </button>
              </Collapse>
            </div>
          </div>
        </div>

        <footer className={classes.footer}>
          <span className={classes.footerText}>
            아직 회원이 아니신가요?
            <Link to="/signup" role="button" style={{ textDecoration: 'none' }}>
              <Button className={classes.button}>회원가입</Button>
            </Link>
          </span>
          {/* <span className={classes.footerSignin}>회원가입</span> */}
        </footer>
        <Dialog
          open={this.state.openSuccesPop}
          onClose={this.handleClose}
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
          <DialogTitle id="alert-dialog-title">
            {/* {"Use Google's location service?"} */}
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              로그인 되었습니다.
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
            <Button onClick={this.handleClose} color="secondary">
              확인
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openFacePop}
          onClose={this.handleClose}
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
          <DialogTitle id="alert-dialog-title">
            ‘LITER’가 'facebook.com'을<br /> 사용하여 로그인하려고 합니다.
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              사용자에 관한 정보를 앱 및 웹 사이트가 공유하게 됩니다.
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
            <Button onClick={this.handleClose} color="secondary">
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SignIn.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  signinForm: PropTypes.func.isRequired,
  // signinFacebookAction: PropTypes.func.isRequired,
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
    signinFacebook: (userId, email, accessToken) => {
      // console.log(userId);
      dispatch(signinFacebookAction(userId, email, accessToken));
    },
    signinEnd: () => {
      // console.log('call SignInEnd');
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
