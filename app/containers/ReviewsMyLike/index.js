/**
 *
 * ReviewsMyLike
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ReviewLikeItem from 'components/ReviewLikeItem';

import axios from 'axios';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectReviewsMyLike from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = theme => ({
  root: {
    top: theme.spacing.unit * 0,
  },
  appBar: {
    position: 'relative',
    textAlign: 'center',
  },
  toolbar: {
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    right: 6.4,
  },
  title: {
    position: 'relative',
    width: '100%',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: 'rgb(17, 17, 17)',
    // marginBottom: 37
  },
  titleSub: {
    height: 16,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: 'rgb(41, 45, 57)',
    margintop: 12,
  },
  container: {
    paddingLeft: 17,
    paddingRight: 17,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class ReviewsMyLike extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      totalReward: 0,
      reviewlist: false,
      loading: false,
      curPage: 1,
      loadEnd: false,
    };
  }

  loadReviewList = pageIndex => {
    if (this.state.loadEnd === false && this.state.loading === false) {
      this.setState({ loading: true });
      const requestURL = `${
        process.env.API_URL
      }/review/myLike?page=${pageIndex}`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;
      if (accessToken) {
        axios({
          method: 'GET',
          url: requestURL,
          headers: {
            Accept: 'application/json;charset=UTF-8',
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: token,
          },
        })
          .then(resp => {
            if (Boolean(resp.data)) {
              // console.log(resp.data);
              // console.log(resp.data.pageable.totalCnt);
              this.setState({
                curPage: pageIndex,
                reviewlist: resp.data.content,
                loading: false,
                totalReward: resp.data.pageable.totalCnt,
              });
            }
          })
          .catch(error => {
            if (error.response.data.code === 300104) {
              console.log('no more data');
              this.setState({ loadEnd: true });
            } else if (error.response.data.code === 500000) {
              console.log('likelist empty > ERROR');
            }
            console.log(error.response);
          });
      }
    }
  };
  componentWillMount() {
    this.loadReviewList(1);
  }
  handleFollowState = (userId, state) => {
    // console.log(`handleFollowState -----[ ${userId} ],  [ ${state} ]`);
    // console.log(this.state.reviewlist);
    if (this.state.reviewlist) {
      const reviewsCopy = [...this.state.reviewlist];
      for (let i = 0; i < reviewsCopy.length; i += 1) {
        // console.log(reviewsCopy[i].followYn);
        // console.log(reviewsCopy[i].userId);
        if (
          userId === reviewsCopy[i].userId &&
          state !== reviewsCopy[i].followYn
        ) {
          // console.log(reviewsCopy[i].followYn);
          reviewsCopy[i].followYn = state;
        }
      }
      // console.log(reviewsCopy);
      this.setState({
        reviewlist: reviewsCopy,
      });
    }
  };

  handleLikeState = reviewId => {
    // console.log(`handleFollowState -----[ ${reviewId} ]`);
    // console.log(this.state.reviewlist);
    if (this.state.reviewlist) {
      let findRemoveIndex = -1;
      for (let i = 0; i < this.state.reviewlist.length; i += 1) {
        // console.log(this.state.reviewlist[i]);
        if (reviewId === this.state.reviewlist[i].id) {
          // console.log(this.state.reviewlist[i].id);
          // console.log(i);
          findRemoveIndex = i;
          break;
        }
      }
      const reviewsCopy = [...this.state.reviewlist];
      if (findRemoveIndex > -1) {
        reviewsCopy.splice(findRemoveIndex, 1);
      }
      // console.log(findRemoveIndex);
      this.setState({
        reviewlist: reviewsCopy,
      });
    }
  };
  render() {
    const { classes, handleClose } = this.props;
    const { totalReward, reviewlist } = this.state;
    // console.log(reviewlist);
    let list;
    if (reviewlist) {
      list = reviewlist.map(item => {
        // console.log(item);
        return (
          <ReviewLikeItem
            key={item.id}
            review={item}
            handleFollowState={this.handleFollowState}
            handleLikeState={this.handleLikeState}
          />
        );
      });
    }
    // console.log(list);
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              좋아요를 한 리뷰
            </Typography>
            <IconButton
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
              className={classes.close}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Typography
            variant="title"
            color="inherit"
            className={classes.titleSub}
          >
            좋아요를 한 리뷰 {totalReward}개
          </Typography>
          {/* {reviewlist &&
            reviewlist.map((item, index) => (
              <ReviewLikeItem
                key={item.id}
                review={item}
                handleFollowState={this.handleFollowState}
              />
            ))} */}
          {list}
        </div>
      </div>
    );
  }
}

ReviewsMyLike.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  reviewsmylike: makeSelectReviewsMyLike(),
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

const withReducer = injectReducer({ key: 'reviewsMyLike', reducer });
const withSaga = injectSaga({ key: 'reviewsMyLike', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ReviewsMyLike);
