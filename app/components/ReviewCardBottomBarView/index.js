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
import { withStyles } from '@material-ui/core/styles';

/* material-ui icon */
import LikeList from 'components/LikeList';

/* containers */
import { voteAction } from 'containers/ReviewCardBottomBar/actions';
import makeSelectReviewCardBottomBar from 'containers/ReviewCardBottomBar/selectors';
/* components */
import AlertDialog from 'components/popups/AlertDialog';
/* image */
import ShareNonIcon from 'images/ic-share-non.png';
import LikeIcon from 'images/ic-feed-like.png';
import LikeSelIcon from 'images/ic-feed-like-sel.png';
import CommentIcon from 'images/ic-feed-comment.png';
import ShareIcon from 'images/ic-feed-share.png';
import CubeEndIcon from 'images/ic-cube-end.png';
/* ref */
import axios from 'axios';
import FacebookProvider, { Share } from 'react-facebook';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  rootFix: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '52px',
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
    paddingTop: '8px',
    // marginLeft: '10px',
    bottom: '0',
    width: '100%',
    display: 'block',
    height: '52px',
  },
  activeStatusFirst: {
    paddingLeft: '2vh',
    float: 'left',
  },
  activeStatus: {
    paddingLeft: '4vh',
    float: 'left',
  },
  activeRStatus: {
    padding: '0 17px 0 16px',
    float: 'right',
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
  iconPadding: {
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
  dialogTitle: {
    marginTop: '0px',
    textAlign: 'center',
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

// function Transition(props) {
//   return <Slide direction="up" {...props} />;
// }

/* eslint-disable react/prefer-stateless-function */
class ReviewCardBottomBarView extends React.PureComponent {
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

    this.state.viewClass = props.viewType
      ? this.props.classes.rootFix
      : this.props.classes.rootBottom;

    this.state.curLikeCount = this.props.review.likeCount;
    this.state.literCubeState = this.props.review.rewardLitercube;

    if (this.props.review.likeYn) this.state.curLiked = true;
    else this.state.curLiked = false;
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

  sendVoting = () => {
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
        reviewId: this.props.review.id,
      }),
    }).then(resp => {
      // console.log(resp);
      // let tmp = this.state.curLikeCount;
      if (this.state.curLiked) {
        this.setState({ curLiked: false });
        // tmp = tmp - 1;
      } else {
        this.setState({ curLiked: true });
        // tmp = tmp + 1;
      }
      this.setState({ curLikeCount: resp });
      this.loadTotalReward(this.props.review.id);
    });
  };

  handleVoting = () => {
    // console.log(this.state.curLiked);
    // console.log('handleVoting in detail');
    // console.log(`this.props.likeYn =====[ ${this.props.likeYn}]`);
    // console.log(this.props.likeYn);

    if (this.props.likeYn > 0) {
      // this.props.onViewVote(reviewId);
      this.sendVoting();
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
        }).then(resp => {
          if (!resp.data.hasWallet) {
            this.setState({
              openSuccesPop: true,
            });
          } else {
            // this.props.onViewVote(reviewId);
            this.sendVoting();
          }
        });
      } else {
        this.setState({
          openLoginPop: true,
        });
      }
    }
  };

  handleResponse = res => {
    console.log(res);

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
        console.log(resp);
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
    console.log(`handleError:::${res}`);
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
  static contextTypes = {
    router: PropTypes.object,
  };

  renderLikeButton() {
    const { classes } = this.props;
    const curVote = this.state.curLiked ? votingIcons.sel : votingIcons.non;
    return (
      <Button
        color="inherit"
        onClick={() => {
          this.handleVoting();
        }}
        aria-label="service"
        className={classes.iconPadding}
        classes={{
          root: classes.rootButton,
        }}
      >
        {/* <img src={LikeIcon} alt="like" className={classes.icons} /> */}
        <img src={curVote.selImg} alt="like" className={classes.icons} />
        <span className={classNames(classes.numCaption, curVote.styleClass)}>
          {/* {review.likeCount ? review.likeCount : 0} */}
          {this.state.curLikeCount ? this.state.curLikeCount : 0}
        </span>
      </Button>
    );
  }

  renderCommentButton() {
    const { classes, campaign, review } = this.props;
    const curReviewing = campaign ? reviewingIcons.sel : reviewingIcons.non;
    return (
      <Button
        color="inherit"
        aria-label="comment"
        className={classes.votingIcon}
        classes={{
          root: classes.rootButton,
        }}
      >
        <img src={CommentIcon} alt="comment" className={classes.icons} />
        <span
          className={classNames(classes.numCaption, curReviewing.styleClass)}
        >
          {review.replyCount ? review.replyCount : 0}
        </span>
      </Button>
    );
  }

  renderShareButton() {
    const { classes, review } = this.props;
    const { shareCount } = this.state;

    const reviewId = review.id;
    const shareLocation = window.location.hostname.concat(
      `/review/${reviewId}`,
    );
    const curShare = shareIcons.non;

    return (
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
            // onClick={() => {
            //   this.handleShare(this.props.review.id);
            // }}
            aria-label="comment"
            className={classes.iconPadding}
            classes={{
              root: classes.rootButton,
            }}
          >
            <img src={ShareIcon} alt="share" className={classes.icons} />
            <span
              className={classNames(classes.numCaption, curShare.styleClass)}
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
    );
  }

  render() {
    const { classes, onViewVote, campaign, review } = this.props;
    const { viewClass } = this.state;

    // const curVote = likeYn ? votingIcons.sel : votingIcons.non;
    const curReviewing = campaign ? reviewingIcons.sel : reviewingIcons.non;

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
    // 투표가능

    return (
      <div className={onViewVote !== false ? viewClass : classes.root}>
        <div className={classes.actions}>
          <div className={classes.activeStatusFirst}>
            {this.renderLikeButton()}
          </div>
          <div className={classes.activeStatus}>
            {this.renderCommentButton()}
          </div>
          <div className={classes.activeStatus}>{this.renderShareButton()}</div>
          {/* ]]---------  LikeList Popup :: START --------[[ */}
          <LikeList
            reviewId={this.props.review.id}
            rewardLitercube={this.state.literCubeState}
          />
          {/* ]]---------  LikeList Popup :: END  --------[[ */}
        </div>
        <AlertDialog
          // onClose={this.handleClose}
          open={this.state.openSuccesPop}
          submitHandler={this.handleMove}
          title=""
          msg={<FormattedMessage {...messages.needEmailAuth} />}
          btnText="확인"
          fullWidth
        />
        <AlertDialog
          onClose={this.handleLoginClose}
          open={this.state.openLoginPop}
          submitHandler={this.handleSignInMove}
          title=""
          msg={<FormattedMessage {...messages.needLogin} />}
          btnText="로그인페이지 이동"
          fullWidth
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   reviewcardbottombar: makeSelectReviewCardBottomBar(),
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleVote: () => {
//       dispatch(voteAction());
//     },
//   };
// };

ReviewCardBottomBarView.propTypes = {
  onClick: PropTypes.func,
  // router: React.PropTypes.func.isRequired,
};

const withConnect = connect();
// mapStateToProps,
// mapDispatchToProps,

export default compose(
  withConnect,
  withStyles(styles),
)(ReviewCardBottomBarView);
