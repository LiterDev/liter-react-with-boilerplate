/**
 *
 * Reviews
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { withStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import ReviewList from 'components/ReviewList';

import makeSelectReviews from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { loadList, loadListMore } from './actions';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class Reviews extends React.PureComponent {
  componentDidMount() {
    const { loadReviewList, loadReviewListMore, loadMore, last } = this.props;
    loadReviewList();

    $(window).scroll(() => {
      if ($(document).height() - $(window).height() - $(window).scrollTop() < 250) {
        loadReviewListMore(this.props.reviews.loadMore, this.props.reviews.last);
      }
    });
  }

  render() {
    // const { classes } = this.props;
    const { reviews } = this.props;

    return (
      <div>
        <Header
          headerTitle={<FormattedMessage {...messages.header} />}
          searchBar="true"
        />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

Reviews.propTypes = {
  loadReviewList: PropTypes.func,
  loadReviewListMore: PropTypes.func,
  reviews: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  reviews: makeSelectReviews(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadReviewList: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadList());
    },
    loadReviewListMore: (loadMore, last) => {
      if(!loadMore && !last) {
        dispatch(loadListMore());
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'reviews', reducer });
const withSaga = injectSaga({ key: 'reviews', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(Reviews);
