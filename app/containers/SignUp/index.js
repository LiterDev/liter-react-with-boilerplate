/**
 *
 * SignUp
 *
 */

import React from 'react';
// import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
// import SignInput from 'components/SignInput';
import BlueButton from 'components/BlueButton';
import InputWithHelper from 'components/InputWithHelper';

import Divider from '@material-ui/core/Divider';
// import Button from '@material-ui/core/Button';
// import BottomNavigation from '@material-ui/core/BottomNavigation';

// import Typography from '@material-ui/core/Typography';
import { makeSelectLoading } from 'containers/App/selectors';
import { makeSelectSignUpRes, makeSelectSignUpError } from './selectors';
import reducer from './reducer';
import saga from './saga';

import messages from './messages';
// import Form from './Form';

import { signupAction } from './actions';

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
    paddingTop: 66,
    marginBottom: 2,
  },
  passwordForm: {
    marginTop: 10,
    marginBottom: 20,
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
    marginTop: 58,
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
  },
});

// function Transition(props) {
//   return <Slide direction="left" {...props} />;
// }

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      emailError: false,
      usernameError: false,
      passwordError: false,
      passwordRepeatError: false,
    };
    this.onSubmitFormInit = this.onSubmitFormInit.bind(this);
  }

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
      errors.push(500108);
    } else {
      this.setState({
        emailError: false,
      });
    }
    if (!username) {
      errors.push(500106);
    } else {
      this.setState({
        usernameError: false,
      });
    }
    if (!password) {
      errors.push(500100);
    } else {
      this.setState({
        passwordError: false,
      });
    }
    if (!passwordRepeat) {
      errors.push(500103);
    } else {
      this.setState({
        passwordRepeatError: false,
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
    const data = new FormData(event.target);
    this.props.signupForm(data);
    return true;
  }

  validationResult(errorCode) {
    // USER_PASSWORD_IS_NOT_ALLOWED(500100, "Password is not valid"),
    // USER_PASSWORD_IS_EMPTY(500101, "Password is empty"),
    // USER_PASSWORD_PATTERN_IS_NOT_ALLOWED(500102, "Password pattern is not allowed."),
    // USER_PASSWORD_REPEAT_IS_EMPTY(500103, "Password is not valid"),
    // USER_PASSWORD_REPEAT_PATTERN_IS_NOT_ALLOWED(500104, "PasswordRepeat pattern is not allowed."),
    // USER_PASSWORD_IS_NOT_EQUALS(500105, "Password is not equals."),
    // USER_NAME_IS_EMPTY(500106, "Username is empty"),
    // USER_NAME_IS_ALREADY_EXISTS(500107, "Username is already exists"),
    // USER_EMAIL_IS_EMPTY(500108, "Email is empty"),
    // USER_EMAIL_IS_ALREADY_EXISTS(500109, "Email is already exists"),
    if (errorCode === 500108 || errorCode === 500109) {
      this.setState({
        emailError: <FormattedMessage {...messages.email} />,
      });
    }
    if (errorCode === 500106) {
      this.setState({
        usernameError: <FormattedMessage {...messages.username} />,
      });
    }
    if (
      errorCode === 500100 ||
      errorCode === 500101 ||
      errorCode === 500102 ||
      errorCode === 500105
    ) {
      this.setState({
        passwordError: <FormattedMessage {...messages.password} />,
      });
    }
    if (errorCode === 500103 || errorCode === 500104 || errorCode === 500105) {
      this.setState({
        passwordRepeatError: <FormattedMessage {...messages.passwordRepeat} />,
      });
    }
  }

  render() {
    const { classes, error, signupRes } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };
    // console.log(signupRes);
    // console.log(loading);
    // console.log(error);
    if (error) {
      // console.log(error);

      if (error.response) {
        error.response
          .json()
          .then(data => {
            // console.log(data);
            this.validationResult(data.code);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
    if (signupRes) {
      return (
        <Redirect
          to={{
            pathname: '/signin',
            // state: { from: props.location },
          }}
        />
      );
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
                error={this.state.emailError}
                type="text"
                inputName="email"
              />
              <InputWithHelper
                placeholder={<FormattedMessage {...messages.username} />}
                error={this.state.usernameError}
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
                error={this.state.passwordError}
                inputName="password"
              />
              <InputWithHelper
                placeholder={<FormattedMessage {...messages.passwordRepeat} />}
                error={this.state.passwordRepeatError}
                type="password"
                inputName="passwordRepeat"
              />
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
          {/* <FormattedMessage {...messages.next} />
          <FormattedMessage {...messages.next} /> */}
          로그인
        </footer>
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
