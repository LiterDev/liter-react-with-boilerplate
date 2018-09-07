/**
 *
 * ReviewCardBottomBarView
 *
 */

/* react ref */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

/* material-ui core */
import Button from '@material-ui/core/Button';

import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

/* material-ui icon */
import CloseIcon from '@material-ui/icons/Close';

import LikeList from 'components/LikeList';

/* containers */
import { voteAction } from 'containers/ReviewCardBottomBar/actions';
import makeSelectReviewCardBottomBar from 'containers/ReviewCardBottomBar/selectors';

/* components */
import ReplyList from 'containers/ReplyList/Loadable';
import axios from 'axios';

import VoteNonIcon from 'images/ic-voting-non.png';
import VoteSelIcon from 'images/ic-voting-sel.png';
import ShareNonIcon from 'images/ic-share-non.png';
import LikeIcon from 'images/ic-feed-like.png';
import LikeSelIcon from 'images/ic-feed-like-sel.png';
import CommentIcon from 'images/ic-feed-comment.png';
import ShareIcon from 'images/ic-feed-share.png';
import FacebookProvider, { Share } from 'react-facebook';

import CubeEndIcon from 'images/ic-cube-end.png';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  rootFix: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '90px',
    backgroundColor: '#fcfcfc',
    boxShadow: `0 -1px 7px 0 rgba(0, 0, 0, 0.1)`,
  },
  rootBottom: {},
  rootButton: {
    display: 'inline-flex',
    minWidth: '50px',
    minHeight: '36px',
    alignItems: 'center',
  },
  actions: {
    bottom: '0',
    width: '100%',
    display: 'block',
    height: '46px',
  },
  listPadding: {
    padding: 0,
  },
  rowList: {
    padding: 0,
    margin: 'auto',
    paddingBottom: '2px',
    textAlign: 'center',
  },
  cellList: {
    margin: 'auto',
    textAlign: 'center',
  },
  cellWrapper: {
    margin: 'auto',
    minHeight: 36,
  },
  divider: {
    margin: '3px auto 3px auto',
    textAlign: 'center',
    width: '90%',
    color: '#e3e3e3',
  },
  shareicons: {
    width: '19px',
    height: '19px',
  },
  gradeicons: {
    width: '19px',
    height: '19px',
  },
  icons: {
    width: '24px',
    height: '24px',
  },
  smallIcons: {
    width: '16px',
    height: '16px',
  },
  smallFont: {
    padding: '0 0 0 10px',
    fontSize: '12px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#111111',
  },
  captionNText: {
    padding: '0 0 0 10px',
    fontSize: '17px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.27',
    letterSpacing: 'normal',
    color: '#7c7c7c',
  },
  captionSText: {
    padding: '0 0 0 10px',
    fontSize: '17px',
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
    color: '#7c7c7c',
  },
  cubeEnd: {
    width: '6px',
    height: '10px',
    objectFit: 'contain',
    marginBottom: '2px',
  },
  popFooter: {
    textAlign: 'center',
  },
  popWrap: {
    // width: 295,
    marginRight: 0,
    marginLeft: 0,
  },
  popRoot: {
    textAlign: 'center',
    justifyContent: 'center',
    // borderTop: '1px',
    // marginRight: 0,
    // marginLeft: 0,
  },
  popPaper: {
    width: 295,
    textAlign: 'center',
    // marginRight: 0,
    // marginLeft: 0,
  },
  button: {
    // margin: 'auto',
    // display: 'block',
  },
  closeBtn: {
    color: '#000000',
    position: 'absolute',
    right: 5,
    top: 5,
  },
  dialogContent: {
    paddingTop: '20px',
  },
  votingIcon: {
    // width: '100px',
    padding: '0px 0px 0px 0px',
  },
  reviewing: {
    paddingTop: '8px',
  },
  numCaption: {
    paddingTop: 5,
    fontFamily: 'SFProDisplay',
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
  },
  captionWrapper: {
    paddingTop: 6,
  },
  popper: {
    zIndex: 0,
    opacity: 0.9,
  },
  toolStyle: {
    maxWidth: 351,
    backgroundColor: '#ffffff !important',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 11,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: '1.27',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: '#111111 !important',
    boxShadow: '0 1px 7px 0 rgba(0, 0, 0, 0.2)',
  },
  statusLeft: {
    margin: 'auto',
    marginLeft: '20px',
    textAlign: 'left',
  },
  statusRight: {
    margin: 'auto',
    textAlign: 'Right',
  },
});

const votingIcons = {
  non: {
    selImg: LikeIcon,
    styleClass: null,
    caption: '좋아요',
  },
  sel: {
    selImg: LikeSelIcon,
    styleClass: null,
    caption: '좋아요',
  },
};

const reviewingIcons = {
  non: {
    styleClass: null,
  },
  sel: {
    styleClass: null,
  },
};

const shareIcons = {
  non: {
    selImg: ShareNonIcon,
    styleClass: null,
    caption: '공유하기',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function TransitionReply(props) {
  return <Slide direction="left" {...props} />;
}

/* eslint-disable react/prefer-stateless-function */
class ReviewCardBottomBarView extends React.Component {
  state = {
    voting: false,
    reviewing: false,
    sharing: false,
    openSuccesPop: false,
    openLoginPop: false,
    totalLikeCount: 0,
    shareCount: 0,
    curLiked: false,
    curLikeCount: 0,
    literCubeState: 0,
    loading: false,
    replyPopOpen: false,
    selfVoting: false,
  };
  constructor(props) {
    super(props);
    votingIcons.sel.styleClass = this.props.classes.captionSText;
    votingIcons.non.styleClass = this.props.classes.captionNText;
    reviewingIcons.sel.styleClass = this.props.classes.captionSText;
    reviewingIcons.non.styleClass = this.props.classes.captionNText;
    shareIcons.non.styleClass = this.props.classes.shareText;

    this.handleVoting = this.handleVoting.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleCloseReply = this.handleCloseReply.bind(this);
    this.handleReplyPop = this.handleReplyPop.bind(this);

    this.state.viewClass = props.viewType
      ? this.props.classes.rootFix
      : this.props.classes.rootBottom;

    this.state.curLikeCount = this.props.review.likeCount;
    this.state.literCubeState = this.props.review.rewardLitercubeKrw;

    if (this.props.review.likeYn) this.state.curLiked = true;
    else this.state.curLiked = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      literCubeState: nextProps.review.rewardLitercubeKrw,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.review.likeCount !== this.props.review.likeCount) {
      console.log(nextState);
      nextState.loading = false;
      return nextProps.review.likeCount !== this.props.review.likeCount;
    } else {
      return true;
    }
  }

  loadTotalReward = reviewId => {
    const requestURL = `${process.env.API_URL}/review/reward/${reviewId}`;
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
    })
      .then(resp => {
        if (Boolean(resp.data)) {
          console.log(']]]-------------load TotalReward-------------[[[');
          console.log(resp.data);
          this.setState({ literCubeState: resp.data.reward });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  sendVoting = reviewId => {
    const accessToken = localStorage.getItem('accessToken');
    const requestURL = `${process.env.API_URL}/engagement`;
    const token = `Bearer ${accessToken}`;
    axios({
      method: 'POST',
      url: requestURL,
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
      data: JSON.stringify({
        reviewId: reviewId,
      }),
    }).then(resp => {
      // console.log(resp);
      let tmp = this.state.curLikeCount;
      if (this.state.curLiked) {
        this.setState({ curLiked: false });
        tmp = tmp - 1;
      } else {
        this.setState({ curLiked: true });
        tmp = tmp + 1;
      }
      this.setState({ curLikeCount: tmp });
      this.loadTotalReward(reviewId);
    });
  };

  handleVoting = reviewId => {
    // console.log(this.state.curLiked);
    // console.log('handleVoting in detail');
    // console.log(`this.props.likeYn =====[ ${this.props.likeYn}]`);
    // console.log(this.props.likeYn);
    const self = this;

    if (this.state.loading == false) {
      self.setState({ loading: true });
      if (this.props.likeYn > 0) {
        this.props.onViewVote(reviewId);
        // this.sendVoting(reviewId);
      } else {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
          const requestURL = `${process.env.API_URL}/user/authInfo`;
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
          })
            .then(resp => {
              if (!resp.data.hasWallet) {
                this.setState({
                  openSuccesPop: true,
                });
              } else {
                this.props.onViewVote(reviewId);
                // this.sendVoting(reviewId);
              }
            })
            .catch(error => {
              console.log(error);
              self.setState({ loading: false });
            });
        } else {
          self.setState({ loading: false });
          this.setState({
            openLoginPop: true,
          });
        }
      }
    }
  };

  handleResponse = res => {
    // console.log(res);

    if (res.error_code) {
      console.log(`facebook share error:::${res.error_code}`);
    } else {
      // console.log(`add share +1`);
      const accessToken = localStorage.getItem('accessToken');
      const requestURL = `${process.env.API_URL}/share`;
      const headerText = {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      };

      if (accessToken) {
        console.log(`accessToken::${accessToken}`);
        const token = `Bearer ${accessToken}`;
        headerText.Authorization = token;
      }
      // console.log(headerText);

      axios({
        method: 'POST',
        url: requestURL,
        headers: headerText,
        data: JSON.stringify({
          reviewId: this.props.review.id,
        }),
      }).then(resp => {
        // console.log(resp);
        if (resp) {
          this.setState({
            shareCount: resp.data,
          });
        }
      });
    }
  };
  handleReady = req => {
    // console.log(this.props.review.id);
    // console.log(req);
  };
  handleError = res => {
    // console.log(`handleError:::${res}`);
  };

  handleClose = () => {
    this.setState({
      openSuccesPop: false,
    });

    // this.props.history.push('/mypage');
  };
  handleLoginClose = () => {
    this.setState({
      openLoginPop: false,
    });

    // this.props.history.push('/mypage');
  };
  handleMove = () => {
    this.setState({
      openSuccesPop: false,
    });

    // this.props.history.push('/mypage');
    this.context.router.history.push(`/mypage`);
  };
  handleSignInMove = () => {
    this.setState({
      openLoginPop: false,
    });

    // this.props.history.push('/signin');
    this.context.router.history.push(`/signin`);
  };

  componentWillMount() {
    // console.log(this.props.review.shareCount);
    if (this.props.review.shareCount) {
      this.setState({
        shareCount: this.props.review.shareCount,
      });
    }
  }

  handleCloseReply = () => {
    console.log('close reply');
    this.setState({ replyPopOpen: false });
  };
  handleReplyPop = () => {
    console.log(`open reply`);
    this.setState({ replyPopOpen: true });
  };
  static contextTypes = {
    router: PropTypes.object,
  };

  selfVoting = bOpen => {
    if (bOpen) {
      setTimeout(() => {
        this.setState({ selfVoting: false });
      }, 1500);
    }
    this.setState({ selfVoting: bOpen });
  };

  render() {
    const { classes } = this.props;
    const {
      onViewVote,
      campaign,
      viewType,
      likeYn,
      review,
      reviewId,
    } = this.props;
    const {
      voting,
      reviewing,
      sharing,
      viewClass,
      shareCount,
      literCubeState,
    } = this.state;

    const curVote = likeYn ? votingIcons.sel : votingIcons.non;
    // const curVote = this.state.curLiked ? votingIcons.sel : votingIcons.non;
    const curReviewing = campaign ? reviewingIcons.sel : reviewingIcons.non;
    const curShare = shareIcons.non;
    const shareLocation = window.location.hostname.concat(
      `/review/${review.id}`,
    );
    // console.log(review.id);
    // console.log(`router ::: ${this.context.router}`);
    // const curVote = votingIcons.sel;
    // const curVote = votingIcons.non;
    // const curShare = shareIcons.non;
    // const curReviewing = reviewingIcons.non;
    // const curReviewing = reviewingIcons.sel;
    // current status for campaign
    // console.log(shareLocation);

    let currentStatus = null;
    switch (review.reviewTimeLimit) {
      case 'UNLIMIT':
        currentStatus = (
          <div
            className={classNames(curReviewing.styleClass, classes.reviewing)}
          >
            <FormattedMessage {...messages.rewardActive} />
          </div>
        );
        break;
      case 'LIMIT':
        currentStatus = (
          <div
            className={classNames(curReviewing.styleClass, classes.reviewing)}
          >
            <img alt="EndCube" src={CubeEndIcon} className={classes.cubeEnd} />
            <span className={curReviewing.styleClass}>
              {this.state.literCubeState}
            </span>
          </div>
        );
        break;
      default:
        break;
    }

    // 좋아요 가능
    if (onViewVote !== false) {
      return (
        <div className={viewClass}>
          <List
            classes={{ padding: classes.listPadding }}
            className={classes.actions}
          >
            <ListItem className={classes.rowList}>
              {/*----------Like Button:START ----------*/}
              {/* <ListItem className={classes.activeStatusFirst}> */}
              <ListItemText className={classes.cellList}>
                {review.user.username === localStorage.getItem('username') ? (
                  <Tooltip
                    placement="top"
                    classes={{
                      popper: classes.popper,
                      tooltip: classes.toolStyle,
                    }}
                    open={this.state.selfVoting}
                    onClose={() => this.selfVoting(false)}
                    title="본인이 작성한 리뷰에는 좋아요를 추가할 수 없습니다."
                  >
                    <Button
                      // color="inherit"
                      // onClick={() => {
                      //   this.handleVoting(this.props.review.id);
                      // }}
                      onClick={() => this.selfVoting(true)}
                      aria-label="service"
                      className={classes.votingIcon}
                      classes={{
                        root: classes.rootButton,
                      }}
                    >
                      {/* <img src={LikeIcon} alt="like" className={classes.icons} /> */}
                      <img
                        src={curVote.selImg}
                        alt="like"
                        className={classes.icons}
                      />
                      <span
                        className={classNames(
                          classes.numCaption,
                          curVote.styleClass,
                        )}
                      >
                        {review.likeCount ? review.likeCount : 0}
                      </span>
                    </Button>
                  </Tooltip>
                ) : (
                  <Button
                    // color="inherit"
                    onClick={() => {
                      this.handleVoting(this.props.review.id);
                    }}
                    aria-label="service"
                    className={classes.votingIcon}
                    classes={{
                      root: classes.rootButton,
                    }}
                  >
                    {/* <img src={LikeIcon} alt="like" className={classes.icons} /> */}
                    <img
                      src={curVote.selImg}
                      alt="like"
                      className={classes.icons}
                    />
                    <span
                      className={classNames(
                        classes.numCaption,
                        curVote.styleClass,
                      )}
                    >
                      {review.likeCount ? review.likeCount : 0}
                    </span>
                  </Button>
                )}
              </ListItemText>
              {/*----------Like Button:END ----------*/}
              {/*----------Reply Button:START ----------*/}
              {/* <ListItem className={classes.activeStatus}> */}
              <ListItemText className={classes.cellList}>
                <Button
                  color="inherit"
                  onClick={this.handleReplyPop}
                  aria-label="service"
                  className={classes.votingIcon}
                  classes={{
                    root: classes.rootButton,
                  }}
                >
                  <img
                    src={CommentIcon}
                    alt="comment"
                    className={classes.icons}
                  />
                  <span
                    className={classNames(
                      classes.numCaption,
                      curReviewing.styleClass,
                    )}
                  >
                    {review.replyCount ? review.replyCount : 0}
                  </span>
                </Button>
              </ListItemText>
              {/*----------Reply Button:END ----------*/}
              {/*----------Share Button:START ----------*/}
              {/* <ListItem className={classes.activeStatus}> */}
              <ListItemText className={classes.cellList}>
                <div className={classes.cellWrapper}>
                  <FacebookProvider
                    appId={process.env.FACEBOOK_APPID}
                    mobileIframe
                    hashtag="#LITER"
                  >
                    <Share
                      href={shareLocation}
                      onReady={this.handleReady}
                      onResponse={this.handleResponse}
                      onError={this.handleError}
                      // mobileIframe
                      hashtag="#LITER"
                    >
                      {/* <Share href="http://www.facebook.com"> */}
                      <div className={classes.captionWrapper}>
                        <img
                          src={ShareIcon}
                          alt="share"
                          className={classes.icons}
                        />
                        <span
                          className={classNames(
                            classes.numCaption,
                            curShare.styleClass,
                          )}
                        >
                          {shareCount}
                        </span>
                      </div>
                    </Share>
                  </FacebookProvider>
                </div>
              </ListItemText>
              {/*----------Share Button:END ----------*/}
            </ListItem>
            <Divider className={classes.divider} />

            <ListItem className={classes.rowList}>
              <ListItemText
                className={classNames(classes.cellList, classes.statusLeft)}
              >
                <div>
                  <img
                    src={LikeSelIcon}
                    alt="like"
                    className={classes.smallIcons}
                  />
                  {review.likeCount ? (
                    <span
                      className={classes.smallFont}
                      onClick={() => this.showLikeList()}
                    >
                      {' '}
                      도움이 됐어요 {review.likeCount}명
                    </span>
                  ) : (
                    <span className={classes.smallFont}>
                      {' '}
                      도움이 됐어요 {0}명
                    </span>
                  )}
                </div>
              </ListItemText>

              <ListItemText
                className={classNames(classes.cellList, classes.statusRight)}
              >
                {/* ]]---------  LikeList Popup :: START --------[[ */}
                <LikeList
                  showLikeList={click => (this.showLikeList = click)}
                  reviewId={this.props.review.id}
                  rewardLitercube={this.state.literCubeState}
                />
                {/* ]]---------  LikeList Popup :: END  --------[[ */}
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
          </List>

          <Dialog
            open={this.state.openSuccesPop}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.popWrap}
            fullWidth
            // maxWidth="false"
            classes={{
              root: classes.popRoot,
              paper: classes.popPaper,
            }}
          >
            <DialogTitle id="alert-dialog-title">
              {/* {"Use Google's location service?"} */}
            </DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                이메일 인증이 필요한 서비스 입니다.
              </DialogContentText>
            </DialogContent>
            <Divider />
            <DialogActions
              // className={classes.popFooter}
              classes={{
                root: classes.popRoot,
                // paper: classes.popFooter,
              }}
            >
              <Button onClick={this.handleMove} color="secondary">
                확인
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.openLoginPop}
            onClose={this.handleLoginClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.popWrap}
            fullWidth
            // maxWidth="false"
            classes={{
              root: classes.popRoot,
              paper: classes.popPaper,
            }}
          >
            <IconButton
              color="inherit"
              onClick={this.handleLoginClose}
              aria-label="Close"
              className={classes.closeBtn}
            >
              <CloseIcon />
            </IconButton>
            <DialogTitle id="alert-dialog-title">
              {/* {"Use Google's location service?"} */}
            </DialogTitle>

            <DialogContent className={classes.dialogContent}>
              <DialogContentText id="alert-dialog-description">
                로그인이 필요한 서비스 입니다.
              </DialogContentText>
            </DialogContent>
            <Divider />
            <DialogActions
              // className={classes.popFooter}
              classes={{
                root: classes.popRoot,
                // paper: classes.popFooter,
              }}
            >
              <Button onClick={this.handleSignInMove} color="secondary">
                로그인페이지 이동
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            fullScreen
            open={this.state.replyPopOpen}
            onClose={this.handleCloseReply}
            TransitionComponent={TransitionReply}
            scroll="paper"
          >
            <ReplyList
              handleClose={this.handleCloseReply}
              reviewId={review.id}
            />
          </Dialog>
        </div>
      );
    }
    // 좋아요 시 로그인
    return (
      <div className={classes.root}>
        <div className={classes.actions}>
          <div className={classes.activeStatusFirst}>
            <Button
              color="inherit"
              onClick={() => {
                this.handleVoting(this.props.review.id);
              }}
              aria-label="like"
              className={classes.votingIcon}
              classes={{
                root: classes.rootButton,
              }}
            >
              {/* <img src={LikeIcon} alt="like" className={classes.icons} /> */}
              <img src={curVote.selImg} alt="like" className={classes.icons} />
              <span
                className={classNames(classes.numCaption, curVote.styleClass)}
              >
                {review.likeCount ? review.likeCount : 0}
              </span>
            </Button>
          </div>
          <div className={classes.activeStatus}>
            <Button
              color="inherit"
              onClick={this.handleReplyPop}
              aria-label="comment"
              className={classes.votingIcon}
              classes={{
                root: classes.rootButton,
              }}
            >
              <img src={CommentIcon} alt="comment" className={classes.icons} />
              <span
                className={classNames(
                  classes.numCaption,
                  curReviewing.styleClass,
                )}
              >
                {/* <FormattedMessage {...messages.votingActive} /> */}
                {review.replyCount ? review.replyCount : 0}
              </span>
            </Button>
          </div>
          <div className={classes.activeStatus}>
            <FacebookProvider appId={process.env.FACEBOOK_APPID}>
              <Share
                href={shareLocation}
                onReady={this.handleReady}
                onResponse={this.handleResponse}
                onError={this.handleError}
                // mobileIframe
                hashtag="#LITER"
              >
                <Button
                  color="inherit"
                  onClick={() => {
                    this.handleShare(this.props.review.id);
                  }}
                  aria-label="comment"
                  className={classes.votingIcon}
                  classes={{
                    root: classes.rootButton,
                  }}
                >
                  <img src={ShareIcon} alt="share" className={classes.icons} />
                  <span
                    className={classNames(
                      classes.numCaption,
                      curShare.styleClass,
                    )}
                  >
                    {shareCount}
                  </span>
                </Button>
                {/* <div className={classes.rootButton}>
                  <img src={ShareIcon} alt="share" className={classes.icons} />
                  <span className={curVote.styleClass}>
                    {review.shareCount ? review.shareCount : 0}
                  </span>
                </div> */}
              </Share>
            </FacebookProvider>
          </div>

          {/* <div className={classes.activeStatus}> */}
          {/* <span className={curReviewing.styleClass}>               */}
          {/* {currentStatus} */}
          {/* </span> */}
          {/* </div> */}
          {/* <div className={classes.activeRStatus}>
            <FacebookProvider appId={process.env.FACEBOOK_APPID}>
              <Share href={window.location.href}>
                <div>
                  <img
                    alt="공유하기"
                    src={curShare.selImg}
                    className={classes.shareicons}
                  />
                </div>
              </Share>
            </FacebookProvider>
          </div> */}
          {/* ]]---------  LikeList Popup :: START --------[[ */}
          <LikeList
            reviewId={this.props.review.id}
            rewardLitercube={this.state.literCubeState}
          />
          {/* ]]---------  LikeList Popup :: END  --------[[ */}
        </div>
        <Dialog
          open={this.state.openSuccesPop}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className={classes.popWrap}
          fullWidth
          // maxWidth="false"
          classes={{
            root: classes.popRoot,
            paper: classes.popPaper,
          }}
        >
          <DialogTitle id="alert-dialog-title">
            {/* {"Use Google's location service?"} */}
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              이메일 인증이 필요한 서비스 입니다.
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogActions
            // className={classes.popFooter}
            classes={{
              root: classes.popRoot,
              // paper: classes.popFooter,
            }}
          >
            <Button onClick={this.handleMove} color="secondary">
              확인
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          fullScreen
          open={this.state.replyPopOpen}
          onClose={this.handleCloseReply}
          TransitionComponent={TransitionReply}
          scroll="paper"
        >
          <ReplyList handleClose={this.handleCloseReply} reviewId={review.id} />
        </Dialog>
      </div>
    );
  }
}

ReviewCardBottomBarView.propTypes = {
  onClick: PropTypes.func,
};

const withConnect = connect();

export default compose(
  withConnect,
  withStyles(styles),
)(ReviewCardBottomBarView);
