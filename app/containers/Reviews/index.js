/**
 *
 * Reviews
 *
 */
/* default */
import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
/* material-ui core */
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
/* material-ui icon */
import AddIcon from '@material-ui/icons/Add';
/* containers */
/* components */
import Header from 'components/Header';
import ReviewList from 'components/ReviewList';
import ReviewTopTag from 'components/ReviewTopTag';
import { Refresh } from 'containers/App';
/* image */
/* ref */
import jQuery from 'jquery';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { loadList, loadListMore, loadCategory, voteAction } from './actions';
import makeSelectReviews from './selectors';

window.$ = jQuery;
window.jQuery = jQuery;

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
    backgroundColor: '#f3f4f6',
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
    marginTop: theme.spacing.unit * 12,
    paddingTop: theme.spacing.unit * 0.1,
    zIndex: 1100,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cateValue: -9,
      searchValue: '',
      loginConfirmPopOpen: false,
      loginYn: false,
      reviewlist: [],
      curPage: 1,
    };

    this.handleVoting = this.handleVoting.bind(this);
    this.loginConfirmPopClose = this.loginConfirmPopClose.bind(this);
    this.goWrite = this.goWrite.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  static contextTypes = {
    router: PropTypes.object,
  };
  goWrite = () => {
    const accessToken = localStorage.getItem('accessToken');
    const hasWallet = localStorage.getItem('hasWallet');
    // console.log(hasWallet);
    if (accessToken && hasWallet === 'true') {
      this.context.router.history.push(`/review/write`);
    } else {
      this.setState({ loginConfirmPopOpen: true });
    }
  };
  loginConfirmPopClose = () => {
    this.setState({ loginConfirmPopOpen: false });
  };
  loginSuccessHandler = () => {
    const pathname = this.context.router.route.location.pathname;
    // console.log(this.context.router.route.location.pathname);
    // console.log(pathname);
    // this.context.router.history.push(pathname);
    this.context.router.history.push(`/review/write`);

    // this.props.dispatch(push('/'));
    // this.props.dispatch(push(location));
    // console.log('111111');
    // this.setState({ loginYn: true });
    // return <Refresh />;
  };
  static contextTypes = {
    router: PropTypes.object,
  };
  componentDidMount() {
    const {
      loadReviewList,
      loadReviewListMore,
      loadMore,
      last,
      loadCategoryList,
      reviews,
    } = this.props;

    loadReviewList(this.state.cateValue);
    loadCategoryList();
    window.addEventListener('scroll', this.handleScroll, true);

    // $(window).scroll(() => {
    //   if (
    //     $(document).height() - $(window).height() - $(window).scrollTop() <
    //     250
    //   ) {
    //     // console.log(this.state.cateValue);
    //     loadReviewListMore(
    //       this.props.reviews.loadMore,
    //       this.props.reviews.last,
    //       this.state.cateValue,
    //       this.state.searchValue,
    //     );
    //   }
    // });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps === this.props) {
      return true;
    } else {
      return nextProps.reviews !== this.props.reviews;
    }
  }

  handleScroll(event) {
    // console.log('the scroll things', event);
    const bottom =
      event.target.scrollingElement.scrollHeight -
        event.target.scrollingElement.scrollTop ===
      event.target.scrollingElement.clientHeight;

    // console.log(
    //   `event.target.scrollHeight -----] ${event.target.scrollHeight} [`,
    // );
    // console.log(`event.target.scrollTop -----] ${event.target.scrollTop} [`);
    // console.log(
    //   `event.target.clientHeight -----] ${event.target.clientHeight} [`,
    // );
    // console.log(bottom);
    if (bottom) {
      // console.log('the scroll things', event);
      // this.loadReplyList(this.state.curPage + 1, this.state.parentId);
      this.props.loadReviewListMore(
        this.props.reviews.loadMore,
        this.props.reviews.last,
        this.state.cateValue,
        this.state.searchValue,
      );
    }
  }
  loadValue = value => {
    // console.log(value);
    this.setState({
      cateValue: value,
    });
    this.props.loadReviewList(value);
    // loadReviewList();
  };

  handleVoting = reviewId => {
    this.props.doVoting(reviewId);
  };
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps.reviews);
  //   if (nextProps.reviews !== prevState.reviewlist) {
  //     return { reviewlist: prevState.reviewlist.concat(nextProps.reviews) };
  //   }
  //   return null;
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps.reviews.categoryId);
    // console.log(prevState.cateValue);
    if (nextProps.reviews.categoryId !== prevState.cateValue) {
      return { cateValue: nextProps.reviews.categoryId };
    }
    if (nextProps.reviews.searchValue !== prevState.searchValue) {
      return { searchValue: nextProps.reviews.searchValue };
    }
    return null;
  }
  render() {
    // const { classes } = this.props;
    const { reviews, classes } = this.props;
    // console.log(this.state.reviewlist);
    // console.log(reviews);
    // console.log(this.props);

    // console.log(this.state.cateValue);
    return (
      <div className={classes.root}>
        <Header
          headerTitle={<FormattedMessage {...messages.header} />}
          searchBar="true"
          loginConfirmPopOpen={this.state.loginConfirmPopOpen}
          loginConfirmPopClose={this.loginConfirmPopClose}
          loginSuccessHandler={this.loginSuccessHandler}
          cateValue={this.state.cateValue}
        />

        <ReviewTopTag
          loadValue={this.loadValue}
          categorys={reviews.categorys}
          reviewFirst={reviews.reviews[0]}
        />
        <div className={classes.reviewList}>
          {/* <ReviewList reviews={reviews} handleVoting={this.handleVoting} /> */}
          {this.state.loginYn === 'true' ? (
            <ReviewList reviews={reviews} handleVoting={this.handleVoting} />
          ) : (
            <ReviewList reviews={reviews} handleVoting={this.handleVoting} />
          )}
        </div>
        {/* <Link
          to="/review/write"
          // onClick={onClose}
          role="button"
          className={classes.link}
        >
          <Button variant="fab" className={classes.floatBtn} color="secondary">
            <AddIcon />
          </Button>
        </Link> */}

        <Button
          variant="fab"
          className={classes.floatBtn}
          color="secondary"
          onClick={this.goWrite}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

Reviews.propTypes = {
  loadReviewList: PropTypes.func,
  loadCategoryList: PropTypes.func,
  loadReviewListMore: PropTypes.func,
  reviews: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  doVoting: PropTypes.func,
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
    loadReviewListMore: (loadMore, last, cateValue, searchValue) => {
      // console.log(cateValue);
      if (!loadMore && !last) {
        dispatch(loadListMore(cateValue, searchValue));
      }
    },
    loadReviewListWithCategory: value => {},
    loadCategoryList: () => {
      dispatch(loadCategory());
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

const withReducer = injectReducer({ key: 'reviews', reducer });
const withSaga = injectSaga({ key: 'reviews', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(Reviews);
