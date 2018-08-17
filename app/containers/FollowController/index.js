/**
 *
 * FollowController
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
/* material-ui core */
/* material-ui icon */
/* containers */
/* components */
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import makeSelectFollowController from './selectors';
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
