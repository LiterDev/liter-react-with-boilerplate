/**
 *
 * ReviewDetailCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { compose } from 'redux';
import classNames from 'classnames';

/* material-ui core */

import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
// import SmsIcon from '@material-ui/icons/Sms';
// import ShareIcon from '@material-ui/icons/Share';
import GradeIcon from '@material-ui/icons/Grade';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Divider from '@material-ui/core/Divider';
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
// import ReviewCardSlider from 'containers/ReviewCardSlider';

/* components */
import MediaSlider from 'components/MediaSlider';
// import FollowButton from 'components/FollowButton';
import FollowAjxButton from 'components/FollowAjxButton';
import TimeAt from 'components/TimeAt';
import TagView from 'components/TagView';
import SurvayView from 'components/SurvayView';

/* image */
import avatarDefault from 'images/ic-avatar.png';
import TalkIcon from 'images/icons/ic-talk.png';
import TalkNoIcon from 'images/icons/ic-talk-x.png';

// import FacebookProvider, { Share } from 'react-facebook';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// import ReviewCardBottomBar from 'containers/ReviewCardBottomBar';
import ReviewCardBottomBarView from 'components/ReviewCardBottomBarView';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import StyledLink from './StyledLink';

const styles = theme => ({
  root: {
    // paddingTop: theme.spacing.unit * 0,
  },
  card: {
    // maxWidth: 400,
    marginTop: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    display: 'flex',
    height: '52px',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: '36px',
    height: '36px',
  },
  cardHeader: {
    height: '65px',
    title: {
      backgroundColor: 'black',
    },
  },
  floatBottom: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '52px',
    backgroundColor: '#fcfcfc',
    boxShadow: `0 -1px 7px 0 rgba(0, 0, 0, 0.1)`,
  },
  reviewTitle: {
    fonFamily: 'Apple SD Gothic Neo',
    fontSize: '22px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.55',
    letterSpacing: 'normal',
    color: '#111111',
  },
  reviewContent: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.63',
    letterSpacing: 'normal',
    color: ' #333333',
    whiteSpace: 'pre-wrap',
  },
  divider: {
    margin: 'auto',
    width: '91%',
  },
  captionText: {
    padding: '0 0 0 5px',
    fontSize: '15px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.27',
    letterSpacing: 'normal',
    color: '#1591ff',
  },
  shareText: {
    padding: '0 0 0 5px',
    fontSize: '15px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.27',
    letterSpacing: 'normal',
    color: '#aaaaaa',
  },
  gradeText: {
    padding: '0 0 0 5px',
    fontSize: '15px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.27',
    letterSpacing: 'normal',
    color: '#7c7c7c',
  },
  shareicons: {
    width: '19px',
    height: '19px',
    color: '#aaaaaa',
  },
  gradeicons: {
    width: '19px',
    height: '19px',
    color: '#7c7c7c',
  },
  icons: {
    width: '19px',
    height: '19px',
    color: '#1591ff',
  },
  activeStatus: {
    padding: '0 0 0 16px',
    float: 'left',
  },
  activeRStatus: {
    padding: '0 0 0 16px',
    float: 'right',
  },
  subCard: {
    minWidth: 275,
    width: '80%',
    margin: 'auto',
    border: '1px solid red',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  subTitle: {
    marginBottom: 16,
    fontSize: 14,
  },
  subPos: {
    marginBottom: 12,
  },
  paperRoot: {
    ...theme.mixins.gutters(),
    margin: 'auto',
    width: '95%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.15)`,
    border: 'solid 0.5px rgba(0, 0, 0, 0.05)',
    marginBottom: '20px',
  },
  paperSheetHead: {
    width: '100%',
    margin: '0 0px 10px 0px',
    // float: 'left',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: 'normal',
    position: 'relative',
    // height: 30,
  },
  paperIcons: {
    margin: '0 8px 2px 0px',
    width: '19px',
    height: '19px',
    color: '#1591ff',
  },
  paperSheet: {
    margin: '0 0px 5px 0px',
  },
  paperWordWrap: {
    wordWrap: 'break-word',
    whiteSpace: 'normal',
  },
  paperItem: {
    width: '57px',
    float: 'left',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.29',
    letterSpacing: 'normal',
    color: '#7c7c7c',
    display: 'block',
  },
  paperDetail: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.29',
    letterSpacing: 'normal',
    color: '#333333 ',
    display: 'block',
    marginBottom: '8px',
  },
  scoreBox: {
    backgroundColor: '#f6f6f6',
    width: '100%',
    margin: 'auto',
    height: '69px',
    marginBottom: '20px',
  },
  scoreItem: {
    width: '33%',
    height: '69px',
    float: 'left',
  },
  scoreText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#333333',
    margin: 'auto',
  },
  scoreGradeBox: {
    marginTop: '12px',
    textAlign: 'center',
  },
  // 임시 css - 수정해야함
  fullDivider: {
    width: 'calc(100% + 32px)',
    marginLeft: '-16px',
  },
  newReview: {
    width: '100%',
    marginTop: '15px',
    lineHeight: '20px',
    textAlign: 'center',
  },
  newFont: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '14px',
    fontWeight: '400',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.43',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#333333',
  },
  googleMap: {
    width: '100%',
    position: 'relative',
    height: 127,
    marginBottom: 10,
  },
  mapWrap: {
    position: 'relative',
  },
  talk: {
    width: '22px',
    height: '22px',
    marginRight: '5px',
  },
  recommendOkFont: {
    color: '#1591ff',
  },
  recommendNotFont: {
    color: '#60798f',
  },
  contentsBox: {
    paddingBottom: '10px',
  },
  tagBox: {
    paddingTop: '10px',
    paddingBottom: '20px',
  },
});

/* eslint-disable react/prefer-stateless-function */
class ReviewDetailCard extends React.PureComponent {
  render() {
    const { classes, reviews, surveys, history } = this.props;
    const review = reviews;
    // console.log(reviews);
    // console.log(surveys);
    // console.log(window.location.href);

    // this.props.location.state.from.pathname
    // const avatarImageUrl = review.user.profileImageSmallUrl;
    // const totalNewReview = 1;
    const mediaCollection = review ? review.mediaCollection : false;
    // const mainImageUrl = mediaCollection.length > 0 ? '/' + mediaCollection[0].path + '/' + mediaCollection[0].uuid : '';
    const avatarImageUrl = review.user.profileImageSmallUrl;

    const elAvatar =
      avatarImageUrl != null ? (
        <StyledLink to={`/profile/${review.user.id}`}>
          <Avatar
            aria-label="Recipe"
            className={classes.avatar}
            src={avatarImageUrl}
          />
        </StyledLink>
      ) : (
        <StyledLink to={`/profile/${review.user.id}`}>
          <img
            alt="Recipe"
            aria-label="Recipe"
            className={classes.avatar}
            src={avatarDefault}
          />
        </StyledLink>
      );

    // const formatContent = review.content.split('\n').map( line => {
    //     return (<span>{line}<br/></span>)
    //   });

    let surveyArr = false;
    let categorySurvey = false;
    let storeSurvey = false;
    let svPrd = 0,
      prdCount = 0;
    let svDrv = 0,
      drvCount = 0;
    let svAs = 0,
      asCount = 0;

    if (surveys != false) {
      surveyArr = Object.values(surveys);
      categorySurvey = surveyArr.filter(function(item) {
        return item.reviewSurveyType == 'CATEGORY';
      });

      surveyArr = Object.values(surveys);
      storeSurvey = surveyArr.filter(function(item) {
        return item.reviewSurveyType == 'STORE';
      });

      const svPro = surveyArr.map(function(item) {
        switch (item.sortPosition) {
          case 0:
            svPrd += item.score;
            prdCount++;
            break;
          case 1:
            svDrv += item.score;
            drvCount++;
            break;
          case 2:
            svAs += item.score;
            asCount++;
            break;
          default:
        }
      });
    }

    svPrd = prdCount !== 0 ? svPrd / prdCount : 0;
    svDrv = drvCount !== 0 ? svDrv / drvCount : 0;
    svAs = asCount !== 0 ? svAs / asCount : 0;

    let storeInfo = null;
    switch (review.store) {
      case 'ONLINE':
        storeInfo = (
          <div>
            <div className={classes.paperSheet}>
              <span className={classes.paperItem}>상품명</span>
              <span className={classes.paperDetail}>{review.productName}</span>
            </div>
            <div
              className={classNames(classes.paperSheet, classes.paperWordWrap)}
            >
              <span className={classes.paperItem}>구매처</span>
              <span className={classes.paperDetail}>{review.buyLink}</span>
            </div>
          </div>
        );
        break;
      case 'OFFLINE':
        storeInfo = (
          <div>
            <div className={classes.paperSheet}>
              <span className={classes.paperItem}>장소</span>
              <span className={classes.paperDetail}>{review.productName}</span>
            </div>
            <div
              className={classNames(classes.paperSheet, classes.paperWordWrap)}
            >
              <span className={classes.paperItem}>주소</span>
              <span className={classes.paperDetail}>{review.storeAddress}</span>
            </div>
          </div>
        );
        break;
      case 'ETC':
        storeInfo = (
          <div>
            <div className={classes.paperSheet}>
              <span className={classes.paperItem}>상품이름</span>
              <span className={classes.paperDetail}>{review.productName}</span>
            </div>
            <div
              className={classNames(classes.paperSheet, classes.paperWordWrap)}
            >
              <span className={classes.paperItem}>구매정보</span>
              <span className={classes.paperDetail}>{review.buyLink}</span>
            </div>
          </div>
        );
        break;
      default:
    }

    // console.log(review.store);

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            avatar={elAvatar}
            action={
              // <FollowButton onViewFollow={this.props.handleFollow} followId={review.user.id}/>
              <FollowAjxButton
                followEmail={review.user.username}
                followYn={review.followYn}
                followId={review.user.id}
              />
            }
            title={
              <StyledLink to={`/profile/${review.user.id}`}>
                {review.user.userNickName}
              </StyledLink>
            }
            subheader={<TimeAt date={review.updateAt} />}
          />
          <CardContent>
            <Typography className={classes.reviewTitle} component="p">
              {review.title}
            </Typography>
          </CardContent>
          <div>
            <Divider className={classes.divider} light />
          </div>

          <MediaSlider media={mediaCollection} />

          <CardContent classes={{ root: classes.contentsBox }}>
            <Typography className={classes.reviewContent} component="p">
              {review.content}
            </Typography>
          </CardContent>
          <CardContent classes={{ root: classes.tagBox }}>
            <TagView tags={review.tags} />
          </CardContent>
          <CardContent classes={{ root: classes.survayBox }}>
            <SurvayView surveys={surveys} />
          </CardContent>
          <div>
            <Paper className={classes.paperRoot} elevation={1}>
              {reviews.store === 'OFFLINE' ? (
                <div className={classes.mapWrap}>
                  <div
                    className={classNames(
                      classes.paperSheetHead,
                      review.recommend === 'YES'
                        ? classes.recommendOkFont
                        : classes.recommendNotFont,
                    )}
                  >
                    {review.recommend === 'YES' ? (
                      <span>
                        <img
                          aria-label="recommend"
                          src={TalkIcon}
                          alt="recommend"
                          className={classes.talk}
                        />
                        재방문 할래요!
                      </span>
                    ) : (
                      <span>
                        <img
                          aria-label="recommend"
                          src={TalkNoIcon}
                          alt="recommend"
                          className={classes.talk}
                        />
                        재방문 안할래요!
                      </span>
                    )}
                  </div>
                  <div className={classes.googleMap}>
                    <Map
                      google={this.props.google}
                      zoom={15}
                      initialCenter={{
                        lat: review.storeLat,
                        lng: review.storeLng,
                      }}
                      center={{
                        lat: review.storeLat,
                        lng: review.storeLng,
                      }}
                      className={classes.googleMap}
                    >
                      <Marker
                        position={{
                          lat: review.storeLat,
                          lng: review.storeLng,
                        }}
                      />
                    </Map>
                  </div>
                </div>
              ) : (
                <div
                  className={classNames(
                    classes.paperSheetHead,
                    review.recommend === 'YES'
                      ? classes.recommendOkFont
                      : classes.recommendNotFont,
                  )}
                >
                  {review.recommend === 'YES' ? (
                    <span>
                      <img
                        aria-label="recommend"
                        src={TalkIcon}
                        alt="recommend"
                        className={classes.talk}
                      />
                      재구매 할래요!
                    </span>
                  ) : (
                    <span>
                      <img
                        aria-label="recommend"
                        src={TalkNoIcon}
                        alt="recommend"
                        className={classes.talk}
                      />
                      재구매 안할래요!
                    </span>
                  )}
                </div>
              )}

              {storeInfo}
              {/* <div className={classes.paperSheet}>
                <span className={classes.paperItem}>제품</span>
                <span className={classes.paperDetail}>
                  {review.productName}
                </span>
              </div>
              <div className={classNames(classes.paperSheet, classes.paperWordWrap )}
              >
                <span className={classes.paperItem}>구매처</span>
                <span className={classes.paperDetail}>{review.buyLink}</span>
              </div> */}

              <div className={classes.paperSheet}>
                <span className={classes.paperItem}>총평가</span>
                <span className={classes.paperDetail}>{review.totalScore}</span>
              </div>
              <div className={classes.scoreBox}>
                <div className={classes.scoreItem}>
                  <div className={classes.scoreGradeBox}>
                    <GradeIcon className={classes.gradeicons} />
                    <span>{svPrd}</span>
                  </div>
                  <p className={classes.scoreText}>상품 만족</p>
                </div>
                <div className={classes.scoreItem}>
                  <div className={classes.scoreGradeBox}>
                    <GradeIcon className={classes.gradeicons} />
                    <span>{svDrv}</span>
                  </div>
                  <p className={classes.scoreText}>배송 속도</p>
                </div>
                <div className={classes.scoreItem}>
                  <div className={classes.scoreGradeBox}>
                    <GradeIcon className={classes.gradeicons} />
                    <span>{svAs}</span>
                  </div>
                  <p className={classes.scoreText}>문의 응대</p>
                </div>
              </div>

              <Divider className={classes.fullDivider} light />

              <div className={classes.newReview}>
                {/* <span className={classes.newFont}>{ totalNewReview }개의 최신리뷰 보기</span>
                <KeyboardArrowRightIcon /> */}
                <div style={{ paddingBottom: '5px' }} />
              </div>
            </Paper>
          </div>
        </Card>

        {/* <ReviewCardSlider user={review.user}/> */}

        {/* <div className={classes.floatBottom}>
          <CardActions className={classes.actions} disableActionSpacing>
            <div className={classes.activeStatus}>
              <SmsIcon className={classes.icons} />
              <span className={classes.captionText}>
                <FormattedMessage {...messages.rewardActive} />
              </span>
            </div>
            {/* <div className={classes.activeRStatus}>
              <ShareIcon className={classes.shareicons} />
              <span className={classes.shareText}>
                <FormattedMessage {...messages.sharingText} />
              </span>
            </div> */}
        {/* <ReviewCardBottomBar ref={`detailCard${review.id}`} prKey={`detailCard${review.id}`} reviewId={review.id} /> */}
        <ReviewCardBottomBarView
          likeYn={review.likeYn}
          onViewVote={this.props.handleVoting}
          review={review}
          viewType="fixed"
          history={history}
        />
      </div>
    );
  }
}

ReviewDetailCard.propTypes = {};

// export default withStyles(styles)(ReviewDetailCard);
export default compose(
  GoogleApiWrapper({
    apiKey: 'AIzaSyC8E2pXbUN9C_oDzn8rMH9FXnK76brBSw4',
    language: 'ko',
  }),
  withStyles(styles),
)(ReviewDetailCard);
