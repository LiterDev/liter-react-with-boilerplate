/**
 *
 * ReviewDetailCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
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
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
  card: {
    // maxWidth: 400,
    marginTop: 12,
    marginBottom: 60,
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
    marginBottom: '30px',
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
  }
});

/* eslint-disable react/prefer-stateless-function */
class ReviewDetailCard extends React.PureComponent {
  state = {
    review: {
      id: '1',
      username: 'Jimmy',
      title: '여름철 보양식으로 손꼽히는 투뿔등심에 대해 소개하도록 한다.',
      content: '애플이 글로벌 스마트폰 시장 침체를 딛고 2분기 어닝 서프라이즈를 기록했다 애플은 2분기 매출 533억 달러(약 59조6000억원), 영업이익 126억1200만 달러(약 14조1300억원)를 기록했다고 지난달 31일(현지시간) 밝혔다. \
                이는 지난해 같은 기간 대비 각각 17.4%, 17.1% 증가한 수치다. 매출의 경우 월스트리트 예상치(523억 달러)보다 10억 달러 높았다. \
                팀 쿡 애플 최고경영자(CEO)는 역대 최상의 2분기 실적을 보고하게 돼 흥분된다며 4분기 연속 두자릿수 매출 증가를 이뤄냈다고 말했다. ',
      totalScore: '4.0',
      productName: '플레이스테이션4',
      buyLink: 'http://aisa.playstation.com/ko-kr/',
      user: {
        username: 'Jimmy',
      }
    },
  }

  render() {
    // const avatarImageUrl = review.user.profileImageUrl;
    const avatarImageUrl = 'https://cdn-images-1.medium.com/fit/c/32/32/1*lMyRgLJZ3yjlklS1zzEcgg.jpeg';
    const timeDiff = '방금전';
    const mainImageUrl = 'http://cfile217.uf.daum.net/image/27458C4B5427B61919A21A';

    const { classes } = this.props;
    // const { review } = this.props;
    const { review } = this.state;

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
          <CardMedia
            className={classes.media}
            image={mainImageUrl}
            title={review.username}
          />
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
              <div className={classes.paperSheet}>
                <span className={classes.paperItem}>구매처</span>
                <span className={classes.paperDetail}>{review.buyLink}</span>
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

            </Paper>
          </div>

        </Card>

        {/* <div>
        </div> */}

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
