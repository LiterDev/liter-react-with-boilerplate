/**
 *
 * ReviewCardBottomBar
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import classNames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import { bindActionCreators } from 'redux';
// material-ui
/* material-ui core */
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
/* material-ui icon */
/* containers */
/* components */
// import ReviewCardBottomBarView from 'components/ReviewCardBottomBarView';
/* image */
/* ref */
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import makeSelectReviewCardBottomBar from './selectors';
import reducer from './reducer';
import saga from './saga';
import { voteAction, voteGo } from './actions';

const styles = theme => ({});

/* eslint-disable react/prefer-stateless-function */
export class ReviewCardBottomBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onVote = this.onVote.bind(this);
  }

  onVote = () => {
    this.props.onHandleVote(this.props.reviewId);
  };

  render() {
    const { classes } = this.props;
    const { reviewId, liked, campaign, prKey } = this.props;

    return (
      <div>
        {/* <ReviewCardBottomBarView onVote={this.onVote} liked={liked} campaign={campaign} ref={ref => this.child = ref } /> */}
        {/* <ReviewCardBottomBarView onViewVote={this.onVote} liked={liked} campaign={campaign} /> */}
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
    },
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
  withStyles(styles),
)(ReviewCardBottomBar);
