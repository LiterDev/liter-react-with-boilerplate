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
import Header from 'components/Header';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import avatarDefault from 'images/ic-avatar.png';

import ReviewContainer from './ReviewContainer';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
  },
  panel: {
    flexGrow: 1,
    backgroundColor: '#fbfbfb',
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
};

/* eslint-disable react/prefer-stateless-function */
export class ProfilePage extends React.PureComponent {
  state = {
    userInfo: {
      profileImageSmallUrl: null,
      userNickName: 'cumacuma!',
      followerCount: 100,
      followingCount: 150,
      reviewCount: 50,
    },
    reviews: [],
  }

  loadUserInfo = (userId) => {
    const requestURL = `${process.env.API_URL}/user/detail/${userId}`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    axios({
        method: 'GET',
        url: requestURL,
        headers: {
          Accept: 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: token,
        },
      }).then(resp => {
        if(Boolean(resp.data)) {
          console.log(']]]-------------load UserInfo-------------[[[');
          console.log(resp.data);
          this.setState({'userInfo': resp.data});
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

  loadReviewData = (userId) => {
    const requestURL = `${process.env.API_URL}/review/myReviewList`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    axios({
        method: 'GET',
        url: requestURL,
        headers: {
          Accept: 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: token,
        },
      }).then(resp => {
        if(Boolean(resp.data)) {
          console.log(']]]-------------load TestData-------------[[[');
          this.setState({reviews: resp.data.content});
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

  navigateFollower = () => {
    console.log("navigateFollower");
  }

  navigateFollowing = () => {
    console.log("navigateFollowing");
  }

  renderReviewdRow(data) {
    const { classes } = this.props;

    if (data !== false && data.length > 0) {
      const reviewArray = Object.values(data);
      return reviewArray.map((row, idx) => (
        <ReviewContainer review={row} data={row} key={idx} />
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

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.loadUserInfo(userId);
    this.loadReviewData(userId);
  }

  render() {
    const { classes } = this.props;
    const userId = this.props.match.params.userId;
    const { userInfo, reviews } = this.state;
    
    return (
      <div>
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
              <div className={classes.row}>{userInfo.followerCount}</div>
              <div className={classes.row} onClick={this.navigateFollower}>
                팔로워
              </div>
            </div>
            <div className={classes.verticalCol}>
              <div className={classes.verticalDivider} />
            </div>
            <div className={classes.col}>
              <div className={classes.row}>{userInfo.followingCount}</div>
              <div className={classes.row} onClick={this.navigateFollowing}>
                팔로잉
              </div>
            </div>
          </div>
        </div>
        <div className={classes.topLine}>
          <span className={classes.reviewCount}>
            리뷰 {userInfo.reviewCount} 개
          </span>
        </div>
        {this.renderReviewdRow(reviews)}
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
