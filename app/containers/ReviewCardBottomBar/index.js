/**
 *
 * ReviewCardBottomBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import classNames from 'classnames';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Button from '@material-ui/core/Button';
import ReviewCardBottomBarView from 'components/ReviewCardBottomBarView';

import makeSelectReviewCardBottomBar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { voteAction } from './actions';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '52px',
    backgroundColor: '#fcfcfc',
    boxShadow: `0 -1px 7px 0 rgba(0, 0, 0, 0.1)`,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ReviewCardBottomBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onVote = this.onVote.bind(this);
  }

  onVote = () => {
    this.props.onHandleVote(this.props.reviewId);
  }

  render() {
    const { classes } = this.props;
    const { reviewId, liked, campaign, prKey } = this.props;
    console.log(prKey);

    return (
      <div className={classes.root}>
        {/* <ReviewCardBottomBarView onVote={this.onVote} liked={liked} campaign={campaign} ref={ref => this.child = ref } /> */}
        <ReviewCardBottomBarView onViewVote={this.onVote} liked={liked} campaign={campaign} />        
      </div>
    );
  }
}

ReviewCardBottomBar.propTypes = {
  onHandleVote: PropTypes.func,
  onVote: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  reviewcardbottombar: makeSelectReviewCardBottomBar(), 
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onHandleVote: reviewId => {
      dispatch(voteAction(reviewId));
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'reviewCardBottomBar', reducer });
const withSaga = injectSaga({ key: 'reviewCardBottomBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles)
)(ReviewCardBottomBar);
