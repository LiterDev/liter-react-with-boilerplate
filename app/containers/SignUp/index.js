/**
 *
 * SignUp
 *
 */

import React from 'react';
// import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import SignInput from 'components/SignInput';

import { makeSelectSignUp } from './selectors';
import reducer from './reducer';
import saga from './saga';

import messages from './messages';
// import Form from './Form';

// import { signupAction } from './actions';

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
  },
});

// function Transition(props) {
//   return <Slide direction="left" {...props} />;
// }

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header headerTitle="회원가입" />
        <div className={classes.container}>
          {/* <Grid item xs={12}> 
            <Grid
              container
              spacing={16}
              className={classes.inputWrap}
              justify="center"
            >
              <Grid>ttttt</Grid>
            </Grid>
          </Grid> */}
          <div className={classes.signupForm}>
            <SignInput
              label={<FormattedMessage {...messages.email} />}
              placeholder={<FormattedMessage {...messages.email} />}
            />
            <SignInput
              label={<FormattedMessage {...messages.username} />}
              placeholder={<FormattedMessage {...messages.username} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // onSubmitForm: PropTypes.func.isRequired,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignUp(),
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

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(SignUp);
