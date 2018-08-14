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
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 2,
    zIndex: 1100,
    // boxShadow: '10px 10px 5px grey',
    boxShadow: '1px 6px 4px 0 rgba(0, 0, 0, 0.28)',
  },
  reviewList: {
    marginTop: theme.spacing.unit * 13,
    zIndex: 1100,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class Reviews extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cateValue: -9,
    };
  }

  componentDidMount() {
    const {
      loadReviewList,
      loadReviewListMore,
      loadMore,
      last,
      loadCategoryList,
    } = this.props;
    loadReviewList(this.state.cateValue);
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
          this.state.cateValue,
        );
      }
    });
  }
  loadValue = value => {
    console.log(value);
    this.setState({
      cateValue: value,
    });
    this.props.loadReviewList(this.state.cateValue);
    // loadReviewList();
  };
  render() {
    // const { classes } = this.props;
    const { reviews, classes } = this.props;

    // console.log(reviews);
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
    loadReviewList: cateValue => {
      // console.log(evt);
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // console.log(`cateValue ====[ ${cateValue}]`);
      dispatch(loadList(cateValue));
    },
    loadReviewListMore: (loadMore, last, cateValue) => {
      if (!loadMore && !last) {
        dispatch(loadListMore(cateValue));
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
