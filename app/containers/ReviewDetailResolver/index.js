/**
 *
 * ReviewDetailResolver
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ReviewDetailPage from 'containers/ReviewDetailPage';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectReviewDetailResolver from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ReviewDetailResolver extends React.PureComponent {
  render() {
    console.log(']----------- PMPM S--------[');
    console.log(this.props.match);
    const reviewId = this.props.match.params.reviewId;
    console.log(reviewId);
    console.log(']----------- PMPM E--------[');

    return (
      <div>
        <ReviewDetailPage reviewId={reviewId} />
      </div>
    );
  }
}

ReviewDetailResolver.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  reviewdetailresolver: makeSelectReviewDetailResolver(),
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

const withReducer = injectReducer({ key: 'reviewDetailResolver', reducer });
const withSaga = injectSaga({ key: 'reviewDetailResolver', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ReviewDetailResolver);
