/**
 *
 * ReviewDetailPage
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

import Header from 'components/Header';
import ReviewDetailCard from 'components/ReviewDetailCard';

import { makeSelectReviews, makeSelectReviewId } from './selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadAction  } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ReviewDetailPage extends React.PureComponent {
  componentDidMount() {
    const { loadReview, reviewId } = this.props;
    loadReview(reviewId);
  }

  render() {
    // reviewId - detail index
    const { reviews, reviewId } = this.props;

    console.log("]----detail page render ----[");
    if(reviews !== false) {
      return (
        <div>
          <Header headerTitle='' />
          <ReviewDetailCard reviews={reviews}/>
        </div>
      );
    }

    return (
      <div>
      </div>
    );    
  }
}

ReviewDetailPage.propTypes = {
  reviews: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // reviewId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loadReview: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  reviews: makeSelectReviews(),
  // reviewId: makeSelectReviewId(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadReview: (reviewId) => {
      dispatch(loadAction(reviewId));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'reviewDetailPage', reducer });
const withSaga = injectSaga({ key: 'reviewDetailPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ReviewDetailPage);
