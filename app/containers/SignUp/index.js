/**
 *
 * SignUp
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
// import { Helmet } from 'react-helmet';
/* material-ui core */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
/* material-ui icon */
/* containers */
import { makeSelectLoading } from 'containers/App/selectors';
/* components */
import AgreePop from 'components/popups/AgreePop';
import BlueButton from 'components/BlueButton';
import { ErrorMessages, ErrorCodes } from 'components/ErrorMessages';
import Header from 'components/Header';
import InputWithHelper from 'components/InputWithHelper';
// import SignInput from 'components/SignInput';
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { signupAction } from './actions';
import { makeSelectSignUpRes, makeSelectSignUpError } from './selectors';
// import Form from './Form';

const styles = theme => ({
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
  signupForm: {
    paddingTop: '10%',
    marginBottom: 2,
  },
  passwordForm: {
    marginTop: 10,
    marginBottom: 10,
  },
  textForm: {
    // width: 315,
    // height: 60,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 13,
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.54',
    letterSpacing: 'normal',
    color: '#999999',
    textAlign: 'left',
    marginTop: 20,
  },
  buttonForm: {
    marginTop: '1%',
  },
  button: {
    // margin: theme.spacing.unit,
    backgroundColor: '#b7ddff',
    width: '100%',
    height: 44,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
  },
  bottomNav: {
    backgroundColor: '#fafafa',
    height: 42,
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
  passText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 12,
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.67,
    letterSpacing: 'normal',
    color: 'rgb(124, 124, 124)',
    marginBottom: 10,
    textAlign: 'left',
  },
});
// function Transition(props) {
//   return <Slide direction="left" {...props} />;
// }

export const validateEmail = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  // alert('You have entered an invalid email address!');
  return false;
};

export const validatePassword = password => {
  if (
    new RegExp('^(?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!]).{8,20}$').test(
      password,
    )
  ) {
    return true;
  }
  // alert('You have entered an invalid email address!');
  return false;
};

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      agreeComplete: false,
      emailError: false,
      usernameError: false,
      passwordError: false,
      passwordRepeatError: false,
      openAgreePop: false,
      openSuccesPop: false,
      error: false,
      formData: [],
    };
    this.onSubmitFormInit = this.onSubmitFormInit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    // this.validationResult = this.validationResult.bind(this);
  }

  handleClose = () => {
    this.setState({
      openSuccesPop: false,
    });

    this.props.history.push('/signin');
  };
  handleAgreePopClose = () => {
    this.setState({
      openAgreePop: false,
    });
  };
  handleAgree = () => {
    this.setState({
      openAgreePop: false,
      agreeComplete: true,
    });
    this.props.signupForm(this.state.formData);
  };
  handleOnChange = e => {
    if (e.target.name === 'email') {
      this.setState({
        emailError: false,
      });
    }
    if (e.target.name === 'username') {
      this.setState({
        usernameError: false,
      });
    }
    if (e.target.name === 'password') {
      this.setState({
        passwordError: false,
      });
    }
    if (e.target.name === 'passwordRepeat') {
      this.setState({
        passwordRepeatError: false,
      });
    }
    console.log(e.target.name);
  };
  onSubmitFormInit(event) {
    event.preventDefault();
    // if (!this.state.complete) {
    //   return false;
    // }
    // console.log(event);
    // console.log(event.target.email.value);
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    const passwordRepeat = event.target.passwordRepeat.value;
    const errors = [];
    if (!email) {
      errors.push(ErrorCodes.EMAIL_EMPTY);
      this.setState({
        emailError: ErrorCodes.EMAIL_EMPTY,
      });
    } else {
      this.setState({
        emailError: false,
      });
    }
    if (!validateEmail(email)) {
      errors.push(ErrorCodes.EMAIL_VALID);
      this.setState({
        emailError: ErrorCodes.EMAIL_VALID,
      });
    } else {
      this.setState({
        emailError: false,
      });
    }
    if (!username) {
      errors.push(ErrorCodes.USER_NAME_EMPTY);
      this.setState({
        usernameError: ErrorCodes.USER_NAME_EMPTY,
      });
    } else {
      this.setState({
        usernameError: false,
      });
    }
    if (!password) {
      errors.push(ErrorCodes.PASSWORD_EMPTY);
      this.setState({
        passwordError: ErrorCodes.PASSWORD_EMPTY,
      });
    } else {
      this.setState({
        passwordError: false,
      });
    }
    if (!validatePassword(password)) {
      errors.push(ErrorCodes.PASSWORD_VALID);
      this.setState({
        passwordError: ErrorCodes.PASSWORD_VALID,
      });
    } else {
      this.setState({
        passwordError: false,
      });
    }
    if (!passwordRepeat) {
      errors.push(ErrorCodes.PASSWORD_REPEAT_EMPTY);
      this.setState({
        passwordRepeatError: ErrorCodes.PASSWORD_REPEAT_EMPTY,
      });
    } else if (password !== passwordRepeat) {
      errors.push(ErrorCodes.PASSWORD_NOT_EQUAL);
      this.setState({
        passwordRepeatError: ErrorCodes.PASSWORD_NOT_EQUAL,
      });
    } else {
      this.setState({
        passwordRepeatError: false,
      });
    }
    if (errors.length > 0) {
      // for (let i = 0; i < errors.length; i += 1) {
      //   this.validationResult(errors[i]);
      // }
      return false;
    }

    if (!this.state.agreeComplete) {
      this.setState({
        openAgreePop: true,
      });
      this.state.formData = new FormData(event.target);
      return false;
    }

    this.setState({
      complete: true,
      openAgreePop: true,
    });
    // const data = new FormData(event.target);
    // this.props.signupForm(data);
    // console.log('submit');
    return false;
  }

  validationMessage(errorCode) {
    if (!errorCode) {
      console.log(errorCode);
      return '';
    }
    // console.log(ErrorCodes.messages[errorCode].code);
    return (
      <FormattedMessage {...messages[ErrorCodes.messages[errorCode].code]} />
    );
  }

  // validationResult(errorCode) {
  //   console.log(errorCode);
  //   // falls through
  //   switch (errorCode) {
  //     case ErrorCodes.EMAIL_EMPTY:
  //       console.log('ErrorCodes.EMAIL_EMPTY');
  //       this.setState({
  //         emailError: (
  //           <FormattedMessage
  //             {...messages[ErrorCodes.messages[ErrorCodes.EMAIL_EMPTY].code]}
  //           />
  //         ),
  //       });
  //       break;
  //     case ErrorCodes.EMAIL_VALID:
  //       console.log('ErrorCodes.EMAIL_VALID');
  //       this.setState({
  //         emailError: (
  //           <FormattedMessage
  //             {...messages[ErrorCodes.messages[ErrorCodes.EMAIL_EMPTY].code]}
  //           />
  //         ),
  //       });
  //       break;
  //     case ErrorCodes.EMAIL_EXISTS:
  //       console.log('ErrorCodes.EMAIL_EXISTS');
  //       this.setState({
  //         emailError: (
  //           <FormattedMessage
  //             {...messages[ErrorCodes.messages[ErrorCodes.EMAIL_EMPTY].code]}
  //           />
  //         ),
  //       });
  //       break;
  //     case ErrorCodes.USER_NAME_EMPTY:
  //       console.log('ErrorCodes.USER_NAME_EMPTY');
  //       this.setState({
  //         emailError: (
  //           <FormattedMessage
  //             {...messages[ErrorCodes.messages[ErrorCodes.EMAIL_EMPTY].code]}
  //           />
  //         ),
  //       });
  //       break;
  //     case ErrorCodes.PASSWORD_EMPTY:
  //       console.log('ErrorCodes.PASSWORD_EMPTY');
  //       this.setState({
  //         emailError: (
  //           <FormattedMessage
  //             {...messages[ErrorCodes.messages[ErrorCodes.EMAIL_EMPTY].code]}
  //           />
  //         ),
  //       });
  //       break;
  //     case ErrorCodes.PASSWORD_VALID:
  //       console.log('ErrorCodes.PASSWORD_VALID');
  //       this.setState({
  //         emailError: (
  //           <FormattedMessage
  //             {...messages[ErrorCodes.messages[ErrorCodes.EMAIL_EMPTY].code]}
  //           />
  //         ),
  //       });
  //       break;
  //     // case 500102:
  //     //   this.setState({
  //     //     passwordError: (
  //     //       <FormattedMessage {...messages.passwordPatternValid} />
  //     //     ),
  //     //   });
  //     //   break;
  //     // case 500103:
  //     // falls through
  //     case ErrorCodes.PASSWORD_REPEAT_EMPTY:
  //       this.setState({
  //         emailError: (
  //           <FormattedMessage
  //             {...messages[ErrorCodes.messages[ErrorCodes.EMAIL_EMPTY].code]}
  //           />
  //         ),
  //       });
  //       break;
  //     case ErrorCodes.PASSWORD_NOT_EQUAL:
  //       this.setState({
  //         passwordRepeatError: (
  //           <FormattedMessage {...messages.passwordNotEqual} />
  //         ),
  //       });
  //       break;
  //     // case 500113:
  //     //   this.setState({
  //     //     usernameError: <FormattedMessage {...messages.nicknameExists} />,
  //     //   });
  //     //   break;
  //     default:
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    // this.props 는 아직 바뀌지 않은 상태
    // console.log(nextProps);
    // console.log(nextProps.error);
    // console.log(this.props.error);
    // if (nextProps.error !== this.props.error) {
    // console.log('validationResultvalidationResult');
    // if (nextProps.error.response) {
    //   this.validationResult(nextProps.error.response.data.code);
    // }
    // }
  }

  render() {
    const { classes, signupRes } = this.props;

    if (signupRes) {
      this.setState({
        openSuccesPop: true,
        openAgreePop: false,
      });
      // this.props.signupRes = false;
      // return (
      //   <Redirect
      //     to={{
      //       pathname: '/signin',
      //       // state: { from: props.location },
      //     }}
      //   />
      // );
    }
    return (
      <div>
        <Header headerTitle="회원가입" />
        <div className={classes.container}>
          <form onSubmit={this.onSubmitFormInit}>
            <div className={classes.signupForm}>
              {/* <SignInput
              label={<FormattedMessage {...messages.email} />}
              placeholder={<FormattedMessage {...messages.email} />}
              // error={<FormattedMessage {...messages.email} />}
              type="text"
            /> */}

              <InputWithHelper
                placeholder={<FormattedMessage {...messages.email} />}
                error={this.validationMessage(this.state.emailError)}
                onChange={this.handleOnChange}
                type="text"
                inputName="email"
              />
              <InputWithHelper
                placeholder={<FormattedMessage {...messages.username} />}
                error={this.validationMessage(this.state.usernameError)}
                onChange={this.handleOnChange}
                type="text"
                inputName="username"
              />
            </div>

            {/* <div className={classes.divade} /> */}
            <Divider />
            <div className={classes.passwordForm}>
              <InputWithHelper
                placeholder={<FormattedMessage {...messages.password} />}
                type="password"
                error={this.validationMessage(this.state.passwordError)}
                onChange={this.handleOnChange}
                inputName="password"
              />
              <InputWithHelper
                placeholder={<FormattedMessage {...messages.passwordRepeat} />}
                error={this.validationMessage(this.state.passwordRepeatError)}
                onChange={this.handleOnChange}
                type="password"
                inputName="passwordRepeat"
              />
            </div>
            <div className={classes.passText}>
              10자 이상 영문 대소문자, 숫자, 특수문자를 조합하여 사용하세요.
            </div>
            <Divider />
            <div className={classes.textForm}>
              {/* <Typography gutterBottom> */}
              <FormattedMessage {...messages.info1} />
              <br />
              <FormattedMessage {...messages.info2} />
              {/* </Typography> */}
            </div>
            <div className={classes.buttonForm}>
              <BlueButton
                btnName={<FormattedMessage {...messages.next} />}
                onClickFunc={this.submitForm}
                complete={this.state.complete}
                btnType="submit"
                // onClick={this.submitForm}
              />
            </div>
          </form>
        </div>

        <footer className={classes.footer}>
          <span className={classes.footerText}>
            이미 회원이신가요?
            <Link to="/signin" role="button" style={{ textDecoration: 'none' }}>
              <Button>로그인</Button>
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
          fullWidth
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
              회원가입이 되었습니다.
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
        <AgreePop
          open={this.state.openAgreePop}
          handleAgree={this.handleAgree}
          onClose={this.handleAgreePopClose}
        />
      </div>
    );
  }
}

SignUp.propTypes = {
  signupForm: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // dispatch: PropTypes.func.isRequired,
  // onSubmitForm: PropTypes.func.isRequired,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signupRes: makeSelectSignUpRes(),
  // repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectSignUpError(),
});

function mapDispatchToProps(dispatch) {
  return {
    signupForm: data => {
      dispatch(signupAction(data));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(SignUp);
