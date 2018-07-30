/**
 *
 * SignUp
 *
 */

import React from 'react';
// import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
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
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { makeSelectSignUp } from './selectors';
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
      emailError: '',
    };
    this.onSubmitFormInit = this.onSubmitFormInit.bind(this);
  }

  onSubmitFormInit(event) {
    event.preventDefault();
    // console.log(event);
    const data = new FormData(event.target);
    // console.log(data);
    console.log(data.get('username'));
    console.log(data.get('email'));
    this.props.signupForm(data);

    this.setState({
      complete: true,
    });
  }

  render() {
    const { classes, loading, error } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };
    console.log(loading);
    // console.log(error);
    if (error) {
      error.response.json().then(data => {
        console.log(data);
        console.log(data.code);
        if (data.code === 500106) {
          this.setState({
            emailError: data.message,
          });
        }
        // return data;
      });
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
                // error="test"
                inputName="password"
              />
              <InputWithHelper
                placeholder={<FormattedMessage {...messages.passwordRepeat} />}
                // error="test"
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
          <FormattedMessage {...messages.next} />
          <FormattedMessage {...messages.next} />
        </footer>
      </div>
    );
  }
}

SignUp.propTypes = {
  signupForm: PropTypes.func.isRequired,
  // dispatch: PropTypes.func.isRequired,
  // onSubmitForm: PropTypes.func.isRequired,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignUp(),
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
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
