/**
 *
 * ReviewDetailResolver
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
import ReviewDetailPage from 'containers/ReviewDetailPage';
/* components */
/* image */
/* ref */
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import makeSelectReviewDetailResolver from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class ReviewDetailResolver extends React.PureComponent {
  render() {
    // console.log(']----------- PMPM S--------[');
    // console.log(this.props.match);
    const reviewId = this.props.match.params.reviewId;
    console.log(this.props);
    // console.log(']----------- PMPM E--------[');
    // this.props.history.push('/follow');
    const { action } = this.props.history;

    if (action === 'PUSH') {
      window.scrollTo(0, 0);
    }
    return (
      <div>
        <ReviewDetailPage reviewId={reviewId} history={this.props.history} />
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
