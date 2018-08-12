/**
 *
 * ReviewDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import axios from 'axios';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import ReviewHeader from 'components/ReviewHeader';
import ReviewDetailCard from 'components/ReviewDetailCard';

import { withStyles } from '@material-ui/core/styles';

import {
  makeSelectReviews,
  makeSelectReviewId,
  makeSelectSurveys,
  makeSelectError,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadAction, followAction, voteAction } from './actions';

const styles = theme => ({
  root: {
    height: theme.spacing.unit * 0,

    // position: 'relative',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ReviewDetailPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openSuccesPop: false,
    };
    this.handleVoting = this.handleVoting.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    const { loadReview, reviewId } = this.props;
    loadReview(reviewId);
  }

  handleVoting = reviewId => {
    this.props.doVoting(reviewId);
  };

  handleFollow = followId => {
    console.log('handleVoting in detail');
    console.log(followId);
    this.props.doFollow(followId);
  };

  render() {
    // reviewId - detail index
    const { reviews, reviewId, surveys, error, classes, history } = this.props;
    console.log(history);
    // this.props.history.push('/follow');
    console.log(']----detail page render ----[');
    // console.log(surveys);
    console.log(error);

    if (reviews !== false) {
      return (
        <div>
          <ReviewHeader headerTitle="" />
          <ReviewDetailCard
            reviews={reviews}
            surveys={surveys}
            handleVoting={this.handleVoting}
            handleFollow={this.handleFollow}
            history={history}
          />
        </div>
      );
    }

    return <div />;
  }
}

ReviewDetailPage.propTypes = {
  reviews: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // reviewId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loadReview: PropTypes.func,
  doFollow: PropTypes.func,
  doVoting: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  reviews: makeSelectReviews(),
  surveys: makeSelectSurveys(),
  error: makeSelectError(),
  // reviewId: makeSelectReviewId(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadReview: reviewId => {
      dispatch(loadAction(reviewId));
    },
    doFollow: followId => {
      dispatch(followAction(followId));
    },
    doVoting: userId => {
      dispatch(voteAction(userId));
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
  withStyles(styles),
)(ReviewDetailPage);
