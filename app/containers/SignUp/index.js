/**
 *
 * SignUp
 *
 */

import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSignUp } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Form from './Form';
// import Input from './Input';
import Section from './Section';
import { signupAction } from './actions';
/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>SignUp</title>
          <meta name="description" content="Description of SignUp" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <Section>
          <Form onSubmit={this.props.onSubmitForm}>
            <label htmlFor="username">
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="mxstbr"
                // value={this.props.username}
                // onChange={this.props.onChangeUsername}
              />
            </label>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              // onClick={this.props.onSubmitForm}
            >
              로딩
            </Button>
          </Form>
        </Section>
      </div>
    );
  }
}

SignUp.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignUp(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      const data = new FormData(evt.target);
      dispatch(signupAction(data));
    },
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
)(SignUp);
