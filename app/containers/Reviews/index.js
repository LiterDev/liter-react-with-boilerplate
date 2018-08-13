/**
 *
 * Reviews
 *
 */

import React from 'react';
// import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
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
import ReviewTopTag from 'components/ReviewTopTag';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import makeSelectReviews from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { loadList, loadListMore, loadCategory } from './actions';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
  floatBtn: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: 1100,
  },
  reviewList: {
    marginTop: theme.spacing.unit * 13,
    zIndex: 1100,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class Reviews extends React.PureComponent {
  componentDidMount() {
    const {
      loadReviewList,
      loadReviewListMore,
      loadMore,
      last,
      loadCategoryList,
    } = this.props;
    loadReviewList();
    loadCategoryList();

    $(window).scroll(() => {
      if (
        $(document).height() - $(window).height() - $(window).scrollTop() <
        250
      ) {
        // console.log(this.props);
        loadReviewListMore(
          this.props.reviews.loadMore,
          this.props.reviews.last,
        );
      }
    });
  }
  loadValue = value => {
    // console.log(value);
  };
  render() {
    // const { classes } = this.props;
    const { reviews, classes } = this.props;

    console.log(reviews.reviews[0]);
    // console.log(this.props.categorys);
    return (
      <div>
        <Header
          headerTitle={<FormattedMessage {...messages.header} />}
          searchBar="true"
        />

        <ReviewTopTag
          loadValue={this.loadValue}
          categorys={reviews.categorys}
          reviewFirst={reviews.reviews[0]}
        />
        <div className={classes.reviewList}>
          <ReviewList reviews={reviews} />
        </div>
        <Link
          to="/review/write"
          // onClick={onClose}
          role="button"
          className={classes.link}
        >
          <Button variant="fab" className={classes.floatBtn} color="secondary">
            <AddIcon />
          </Button>
        </Link>
      </div>
    );
  }
}

Reviews.propTypes = {
  loadReviewList: PropTypes.func,
  loadCategoryList: PropTypes.func,
  loadReviewListMore: PropTypes.func,
  reviews: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  reviews: makeSelectReviews(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadReviewList: evt => {
      // console.log(evt);
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault();

      dispatch(loadList());
    },
    loadReviewListMore: (loadMore, last) => {
      if (!loadMore && !last) {
        dispatch(loadListMore());
      }
    },
    loadReviewListWithCategory: value => {},
    loadCategoryList: () => {
      dispatch(loadCategory());
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
