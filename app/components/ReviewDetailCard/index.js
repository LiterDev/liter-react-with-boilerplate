/**
 *
 * ReviewDetailCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import SmsIcon from '@material-ui/icons/Sms';
import ShareIcon from '@material-ui/icons/Share';
import GradeIcon from '@material-ui/icons/Grade';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ReviewCardSlider from 'containers/ReviewCardSlider';
import MediaSlider from 'components/MediaSlider';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
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
    fonFamily: 'AppleSDGothicNeo',
    fontSize: '22px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.55',
    letterSpacing: 'normal',
    color: '#111111',
  },
  reviewContent: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.63',
    letterSpacing: 'normal',
    color: ' #333333',
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
    float: 'left',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '30px',
    letterSpacing: 'normal',
    color: '#1591ff',
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
    fontFamily: 'AppleSDGothicNeo',
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
    fontFamily: 'AppleSDGothicNeo',
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
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
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
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '14px',
    fontWeight: '400',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.43',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#333333',
  }
});

/* eslint-disable react/prefer-stateless-function */
class ReviewDetailCard extends React.PureComponent {
  render() {
    const { classes, reviews } = this.props;
    const review = reviews;
    console.log(reviews);
    // const avatarImageUrl = review.user.profileImageUrl;
    const totalNewReview = 1;
    const mediaCollection = review ? review.mediaCollection : false;
    // const mainImageUrl = mediaCollection.length > 0 ? '/' + mediaCollection[0].path + '/' + mediaCollection[0].uuid : '';
    const avatarImageUrl = review.user.profileImageUrl;
    const timeDiff = '방금전';
    
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar
                aria-label="Recipe"
                className={classes.avatar}
                src={avatarImageUrl}
              />
            }
            action={
              <Typography>
                <FormattedMessage {...messages.followText} />
              </Typography>
            }
            title={review.user.username}
            subheader={timeDiff}
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

          <CardContent>
            <Typography className={classes.reviewContent} component="p">
              {review.content}
            </Typography>
          </CardContent>

          <div>
            <Paper className={classes.paperRoot} elevation={1}>              
              <div className={classes.paperSheetHead}>
                <SmsIcon className={classes.paperIcons} />
                  <span >재구매할래요!</span>                
              </div>
              <div className={classes.paperSheet}>
                <span className={classes.paperItem}>제품</span>
                <span className={classes.paperDetail}>{review.productName}</span>
              </div>
              <div className={classNames(classes.paperSheet, classes.paperWordWrap)}>
                <span className={classes.paperItem}>구매처</span>
                <span className={classes.paperDetail} >{review.buyLink}</span>
              </div>
              <div className={classes.paperSheet}>
                <span className={classes.paperItem}>총평가</span>
                <span className={classes.paperDetail}>{review.totalScore}</span>
              </div>

              <div className={classes.scoreBox}>
                <div className={classes.scoreItem} >
                  <div className={classes.scoreGradeBox}><GradeIcon className={classes.gradeicons} /><span>{review.totalScore}</span></div>
                  <p className={classes.scoreText}>상품 만족</p>
                </div>
                <div className={classes.scoreItem} >
                  <div className={classes.scoreGradeBox}><GradeIcon className={classes.gradeicons} /><span>{review.totalScore}</span></div>
                  <p className={classes.scoreText}>배송 속도</p>
                </div>
                <div className={classes.scoreItem} >
                  <div className={classes.scoreGradeBox}><GradeIcon className={classes.gradeicons} /><span>{review.totalScore}</span></div>
                  <p className={classes.scoreText}>문의 응대</p>
                </div>
              </div>

              <Divider className={classes.fullDivider} light />

              <div className={classes.newReview}>
                {/* <span className={classes.newFont}>{ totalNewReview }개의 최신리뷰 보기</span>
                <KeyboardArrowRightIcon /> */}
                <div style={{'paddingBottom':'5px'}}></div>
              </div>
            </Paper>
          </div>

        </Card>

        {/* <ReviewCardSlider user={review.user}/> */}

        <div className={classes.floatBottom}>
          <CardActions className={classes.actions} disableActionSpacing>
            <div className={classes.activeStatus}>
              <SmsIcon className={classes.icons} />
              <span className={classes.captionText}>
                <FormattedMessage {...messages.rewardActive} />
              </span>
            </div>
            <div className={classes.activeRStatus}>
              <ShareIcon className={classes.shareicons} />
              <span className={classes.shareText}>
                <FormattedMessage {...messages.sharingText} />
              </span>
            </div>
            <div className={classes.activeRStatus}>
              <GradeIcon className={classes.gradeicons} />
              <span className={classes.gradeText}>{review.totalScore}</span>
            </div>            
          </CardActions>
        </div>

      </div>
    );
  }
}

ReviewDetailCard.propTypes = {};

export default withStyles(styles)(ReviewDetailCard);