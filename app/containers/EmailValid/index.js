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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectEmailValid,
  makeSelectEmailValidSuccess,
  makeSelectEmailValidError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { validAction, signinSuccess, signinError } from './actions';
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
  componentWillMount() {
    this.props.validEmail(this.props.location.search.substring(7));
  }
  render() {
    const { classes, validSuccess, validError } = this.props;
    // console.log(this.props.location);
    // console.log(this.props.location.search);
    console.log(this.props.location.search.substring(7));
    // const validString = this.props.match.params.validString;
    // this.validEmail(validString);
    
    console.log(validSuccess);
    return (
      <div>
        <FormattedMessage {...messages.header} />
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
)(EmailValid);
