/**
 *
 * ReviewLikeItem
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import axios from 'axios';
/* material-ui core */
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import TimeAt from 'components/TimeAt';
import Button from '@material-ui/core/Button';
/* material-ui icon */
import LikeIcon from 'images/ic-feed-like.png';
import LikeSelIcon from 'images/ic-feed-like-sel.png';

/* containers */
/* components */
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  card: {
    display: 'flex',
    paddingTop: 14,
    paddingBottom: 14,
    height: 118,
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 90,
    height: 90,
  },
  controls: {
    position: 'relative',
    height: 36,
    // width: '100%',
    // display: 'flex',
    // alignItems: 'center',
    // paddingLeft: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cardWarp: {
    borderBottom: 'solid 1px rgb(238, 238, 238)',
  },
  cardContentRoot: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  userNickName: {
    height: 15,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 12,
    fontWeight: 500,
    fontstyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.25',
    letterSpacing: 'normal',
    color: 'rgb(124, 124, 124)',
  },
  timeAt: {
    marginLeft: 10,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 12,
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.25',
    letterSpacing: 'normal',
    color: 'rgb(170, 170, 170)',
  },
  flexWarp: {
    display: 'flex',
    flexDirection: 'row',
  },
  follow: {
    position: 'absolute',
    right: 20,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 12,
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.25',
    letterSpacing: 'normal',
    color: '#1591ff',
  },
  followButton: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 12,
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.25',
    letterSpacing: 'normal',
    color: '#1591ff',
    paddingTop: 0,
    paddingRight: 0,
    minHeight: 10,
  },
  unFollowButton: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 12,
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.25',
    letterSpacing: 'normal',
    color: '#111111',
    paddingTop: 0,
    minHeight: 10,
  },
  contents: {
    lineHeight: '1.5em',
    height: '3em',
    overflow: 'hidden',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: 'rgb(17, 17, 17)',
    marginTop: 8,
    // width: '70%',
    // maxWidth: 235,
    // minWidth: 200,
  },
  icons: {
    width: 16,
    height: 16,
    position: 'absolute',
    left: 0,
    bottom: 12,
  },
  activeStatusFirst: {
    position: 'absolute',
    // paddingLeft: '2vh',
    float: 'left',
    textAlign: 'left',
  },
  votingIcon: {
    // width: '100px',
    padding: '0px 0px 0px 0px',
  },
  reviewing: {
    paddingTop: '8px',
  },
  numCaption: {
    // paddingTop: 3,
    // position: 'absolute',
    fontFamily: 'SFProDisplay',
    fontSize: 11,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: 'rgb(21, 145, 255)',
    // right: 0,
    bottom: 12,
  },
  activeStatusLast: {
    position: 'absolute',
    display: 'block',
    textAlign: 'right',
    fontFamily: 'SFProDisplay',
    fontSize: 11,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    lineHeight: '1em',
    right: 0,
    bottom: 12,
    // display: 'flex',
    // flexDrection: 'column',
    // justifyContent: 'center',
    color: 'rgb(21, 145, 255)',
  },
  followButtonText: {
    textAlign: 'right',
    display: 'block',
  },
});

/* eslint-disable react/prefer-stateless-function */
class ReviewLikeItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      followYn: this.props.review.followYn,
    };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleVoting = this.handleVoting.bind(this);
  }
  handleVoting = reviewId => {
    console.log(reviewId);
    const requestURL = `${process.env.API_URL}/engagement`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    if (accessToken) {
      axios({
        method: 'POST',
        url: requestURL,
        headers: {
          Accept: 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: token,
        },
        data: {
          reviewId,
        },
      })
        .then(resp => {
          console.log(resp);
          // if (Boolean(resp.data)) {
          this.props.handleLikeState(reviewId);
          // }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  handleFollow = userId => {
    // console.log(userId);
    // console.log(this.state.followYn);
    let requestURL = `${process.env.API_URL}/follow`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    if (accessToken) {
      let method = 'POST';
      let data = { followId: userId };
      if (this.state.followYn > 0) {
        method = 'DELETE';
        data = {};
        requestURL = `${process.env.API_URL}/follow/${userId}`;
      }

      axios({
        method,
        url: requestURL,
        headers: {
          Accept: 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: token,
        },
        data,
      })
        .then(resp => {
          if (Boolean(resp.data)) {
            // console.log(resp.data);

            if (method === 'DELETE') {
              this.setState({ followYn: 0 });
              this.props.handleFollowState(userId, 0);
            } else {
              this.setState({ followYn: 1 });
              this.props.handleFollowState(userId, 1);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.review.followYn !== prevState.followYn) {
      return { followYn: nextProps.review.followYn };
    }
    return null;
  }
  render() {
    const { classes, review } = this.props;
    // console.log(review);
    return (
      <div className={classes.cardWarp}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            // image={review.mediaCollection[0].fullPathMedium}
            image="https://s3-ap-northeast-1.amazonaws.com/liter-review/resized/m/DlS7RBN9UlrvdF38sMtO.jpg"
            title="Live from space album cover"
          />
          <div className={classes.details}>
            <CardContent
              className={classes.content}
              classes={{
                root: classes.cardContentRoot,
              }}
            >
              <div className={classes.flexWarp}>
                <Typography
                  variant="subheading"
                  color="textSecondary"
                  className={classes.userNickName}
                >
                  {review.user.userNickName}
                </Typography>
                <div className={classes.timeAt}>
                  <TimeAt date={review.updateAt} />
                </div>
                <div className={classes.follow}>
                  <Button
                    type="button"
                    onClick={() => this.handleFollow(review.userId)}
                    className={
                      this.state.followYn > 0
                        ? classes.followButton
                        : classes.unFollowButton
                    }
                    classes={{
                      label: classes.followButtonText,
                    }}
                  >
                    팔로우
                  </Button>
                </div>
              </div>
              <div>
                <Typography variant="headline" className={classes.contents}>
                  {review.content}
                </Typography>
              </div>

              <div className={classes.controls}>
                <div className={classes.activeStatusFirst}>
                  <Button
                    color="inherit"
                    onClick={() => {
                      this.handleVoting(review.id);
                    }}
                    aria-label="service"
                    className={classes.votingIcon}
                    classes={{
                      root: classes.rootButton,
                    }}
                  >
                    {/* <img src={LikeIcon} alt="like" className={classes.icons} /> */}
                    <img
                      src={LikeSelIcon}
                      alt="like"
                      className={classes.icons}
                    />
                    <span className={classNames(classes.numCaption)}>
                      {/* {review.likeCount ? review.likeCount : 0} */}
                      {review.curLikeCount ? review.curLikeCount : 0}
                    </span>
                  </Button>
                </div>
                <div className={classes.activeStatusLast}>
                  <div>{review.rewardLitercube} LCB</div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

ReviewLikeItem.propTypes = {
  review: PropTypes.object.isRequired,
  handleFollowState: PropTypes.func.isRequired,
  handleLikeState: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReviewLikeItem);
