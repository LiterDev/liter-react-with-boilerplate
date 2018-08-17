/**
 *
 * FollowController
 *
 */
// default
// material-ui
// containers
// components
// image
// ref

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectFollowController from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { handleFollow } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class FollowController extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { viewTemplete } = this.props;
    if(viewTemplete) {
      return (
        <div>
          <FormattedMessage {...messages.header} />
        </div>
      );
    }

    return (
      <div>
        <div onClick={() => { this.props.dispatch(handleFollow()) }}>팔로우</div>
      </div>
    );
    
  }
}

FollowController.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  followcontroller: makeSelectFollowController(),
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

const withReducer = injectReducer({ key: 'followController', reducer });
const withSaga = injectSaga({ key: 'followController', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FollowController);
