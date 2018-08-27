/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StyledLink from './StyledLink';
import Header from 'components/Header';

// import ReviewLikeItem from 'components/ReviewLikeItem';
import ReviewLikeItem from './ReviewLikeItem';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import avatarDefault from 'images/ic-avatar.png';

import axios from 'axios';

const styles = {
  containerWrapper: {
    position: 'fixed',
    width: '100%',
    margin: 'auto',
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
  },
  panel: {
    flexGrow: 1,
    backgroundColor: '#fbfbfb',
  },
  contents: {
    paddingTop: 212,
  },
  panelInfo: {
    marginTop: 20,
    height: 88,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  col: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
    border: 'solid 2px rgb(55, 161, 255)',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  avatarDiv: {
    position: 'relative',
  },
  levelTagInner: {
    position: 'absolute',
    right: '0px',
    bottom: '10px',
    width: '34px',
    height: '18px',
    fontFamily: 'SFProText',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '-0.3px',
    textAlign: 'right',
    borderRadius: '10px',
    backgroundColor: '#6a88a5',
    color: '#ffffff',
    paddingRight: '8px',
  },
  userCoin: {
    color: '#1591ff',
  },
  makeWalletLink: {
    marginTop: '10px',
    padding: '8px 45px 8px 45px',
    border: 'solid 1px #8fa6bb',
    color: '#8fa6bb',
    fontSize: '13px',
    lineHeight: '1.8em',
    textAlign: 'center',
  },
  verticalCol: {
    height: '100%',
    paddingTop: '15px',
  },
  verticalDivider: {
    backgroundColor: '#aaaaaa',
    width: '1px',
    height: '35%',
  },
  nickNameButtion: {
    width: '100%',
    borderRadius: 'unset',
  },  
  topLine: {
    display: 'flex',
    flexGrow: 1,
    textAlign: 'left',
    paddingTop: '13px',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  reviewCount: {
    fontSize: '13px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#292d39',
  },
  contentList: {
    paddingLeft: 17,
    paddingRight: 17,
  },
};

/* eslint-disable react/prefer-stateless-function */
export class ProfilePage extends React.PureComponent {
  state = {
    userInfo: {
      profileImageSmallUrl: null,
      userNickName: '',
      reviewCount: 0,
    },
    curPage: 1,
    totalReviewCount: 0,
    followerCount: 0,
    followingCount: 0,
    reviews: [],
  }

  loadFollowInfo = (userId) => {
    let requestURL = `${process.env.API_URL}/follow/follower/count/${userId}`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;

    let headerObj = {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    }
    if(accessToken)
      headerObj.Authorization = token;

    axios({
        method: 'GET',
        url: requestURL,
        headers: headerObj,
      }).then(resp => {
        if(Boolean(resp.data)) {
          console.log(']]]-------------load follower/count/-------------[[[');
          console.log(resp.data);
          this.setState({'followerCount': resp.data});
        }
      }).catch(error => {
          // status: not found - redirecting
          if(error.response.data.code === 300104) {
            console.log("no more data");
          } else if(error.response.data.code === 500000) {
            console.log("likelist empty > ERROR");  
          }
          console.log(error.response);
      });

    requestURL = `${process.env.API_URL}/follow/following/count/${userId}`;
    axios({
        method: 'GET',
        url: requestURL,
        headers: headerObj,
      }).then(resp => {
        if(Boolean(resp.data)) {
          console.log(']]]-------------load following/count/-------------[[[');
          console.log(resp.data);
          this.setState({'followingCount': resp.data});
        }
      }).catch(error => {
          // status: not found - redirecting
          if(error.response.data.code === 300104) {
            console.log("no more data");
          } else if(error.response.data.code === 500000) {
            console.log("likelist empty > ERROR");  
          }
          console.log(error.response);
      });
  }

  loadUserInfo = (userId) => {
    const requestURL = `${process.env.API_URL}/user/detail/${userId}`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;

    let headerObj = {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    }
    if(accessToken)
      headerObj.Authorization = token;

    axios({
        method: 'GET',
        url: requestURL,
        headers: headerObj,
      }).then(resp => {
        if(Boolean(resp.data)) {
          console.log(']]]-------------load UserInfo-------------[[[');
          console.log(resp.data);
          this.setState({'userInfo': resp.data});
        }
      }).catch(error => {
          // status: not found - redirecting
          if(error.response.status == 404) {
            console.log("Not Found");
          }
          else if(error.response.data.code === 300104) {
            console.log("no more data");
          } else if(error.response.data.code === 500000) {
            console.log("likelist empty > ERROR");  
          }
          console.log(error.response);
      });
  }

  loadReviewData = (userId, pageIndex) => {
    const requestURL = `${process.env.API_URL}/review/follow/list/${userId}?page=${pageIndex}`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;

    let headerObj = {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    }
    if(accessToken)
      headerObj.Authorization = token;

    axios({
        method: 'GET',
        url: requestURL,
        headers: headerObj,
      }).then(resp => {
        if(Boolean(resp.data)) {
          console.log(']]]-------------load TestData-------------[[[');
          console.log(resp.data);
          this.setState({
                curPage: pageIndex,
                reviews: this.state.reviews.concat(resp.data.content),
                totalReviewCount: resp.data.pageable.totalCnt,
                loading: false,
              });
        }
      }).catch(error => {
          if(error.response.data.code === 300104) {
            console.log("no more data");
          } else if(error.response.data.code === 500000) {
            console.log("likelist empty > ERROR");  
          }
          console.log(error.response);
      });
  }

  renderReviewdRow(data) {
    const { classes } = this.props;

    if (data !== false && data.length > 0) {
      const reviewArray = Object.values(data);
      return reviewArray.map((item, idx) => (
          <ReviewLikeItem 
            key={`other-review${idx}`}
            review={item}
            handleFollowState={this.handleFollowState}
            handleLikeState={this.handleLikeState}
          />
      ));
    }
    return (
      <Card className={classes.card}>
        <CardContent className={classes.emptyCardContents}>
          <Typography className={classes.emptyTitle}>
            작성된 리뷰가 없습니다.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  handleFollowState = () => {

  }

  handleLikeState = (reviewId) => {

    const requestURL = `${process.env.API_URL}/review/detail/${reviewId}`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;

    let headerObj = {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    }
    if(accessToken)
      headerObj.Authorization = token;

    if (accessToken) {
      axios({
        method: 'GET',
        url: requestURL,
        headers: headerObj,
        data: {
          reviewId,
        },
      })
        .then(resp => {
          console.log(resp);
          if (this.state.reviews) {
            let findRemoveIndex = -1;
            for (let i = 0; i < this.state.reviews.length; i += 1) {
              // console.log(this.state.reviewlist[i]);
              if (reviewId === this.state.reviews[i].id) {
                // console.log(this.state.reviewlist[i].id);
                // console.log(i);
                findRemoveIndex = i;
                break;
              }
            }
            const reviewsCopy = [...this.state.reviews];
            if (findRemoveIndex > -1) {
              //reviewsCopy.splice(findRemoveIndex, 1);
              reviewsCopy[findRemoveIndex] = resp.data;
            }
            // console.log(findRemoveIndex);
            this.setState({
              reviews: reviewsCopy,
            });
          }
        })
        .catch(error => {
          // console.log(error);
          // console.log(error.response);
          // console.log(error.response.data.code);
          if (Boolean(error.response.data.code)) {
          }
        });
    }
   
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    const curPage = this.state.curPage;
    this.loadUserInfo(userId);
    this.loadFollowInfo(userId);
    this.loadReviewData(userId, curPage);
    
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    // console.log(event);    
    // const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    // if(bottom) {
    //   this.loadReviewData(userId, this.state.curPage + 1);
    // }
  }

  render() {
    const { classes } = this.props;
    const userId = this.props.match.params.userId;
    const { userInfo, reviews, followerCount, followingCount, totalReviewCount } = this.state;

    return (
      <div>
        <div className={classes.containerWrapper}>
          <div className={classes.container}>
            <Header headerTitle={<FormattedMessage {...messages.header} />} />
          </div>
          <div className={classes.panel}>
            <div className={classes.row}>
              <div className={classes.avatarDiv}>
                <Avatar
                  alt=""
                  src={
                    userInfo.profileImageSmallUrl
                      ? userInfo.profileImageSmallUrl
                      : avatarDefault
                  }
                  className={classNames(classes.avatar, classes.bigAvatar)}
                />
                <span className={classes.levelTagInner}>Lv 1</span>
              </div>
            </div>
            <div className={classes.row}>
              {userInfo.userNickName}
            </div>
            <div className={classNames(classes.row, classes.panelInfo)}>
              <div className={classes.col}>
                <StyledLink to={`/follow/${userId}`}>
                  <div className={classes.row}>{followerCount}</div>
                  <div className={classes.row}>
                    팔로워
                  </div>
                </StyledLink>
              </div>
              <div className={classes.verticalCol}>
                <div className={classes.verticalDivider} />
              </div>
              <div className={classes.col}>
                <StyledLink to={`/following/${userId}`}>
                  <div className={classes.row}>{followingCount}</div>
                  <div className={classes.row}>
                    팔로잉
                  </div>
                </StyledLink>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.contents}>
          <div className={classes.topLine}>
            <span className={classes.reviewCount}>
              리뷰 {totalReviewCount} 개
            </span>
          </div>
          <div className={classes.contentList}>
            {this.renderReviewdRow(reviews)}
          </div>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profilepage: makeSelectProfilePage(),
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

const withReducer = injectReducer({ key: 'profilePage', reducer });
const withSaga = injectSaga({ key: 'profilePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ProfilePage);
