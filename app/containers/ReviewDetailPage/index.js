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

import makeSelectReviewDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ReviewDetailPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Header headerTitle='' />
        <ReviewDetailCard />
      </div>
    );
  }
}

ReviewDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  reviewdetailpage: makeSelectReviewDetailPage(),
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

const withReducer = injectReducer({ key: 'reviewDetailPage', reducer });
const withSaga = injectSaga({ key: 'reviewDetailPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ReviewDetailPage);
