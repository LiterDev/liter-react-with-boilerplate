/**
 *
 * ReviewCardBottomBarView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { createStructuredSelector } from 'reselect';
import { voteAction } from 'containers/ReviewCardBottomBar/actions';
import makeSelectReviewCardBottomBar from 'containers/ReviewCardBottomBar/selectors';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import VoteNonIcon from '../../images/ic-voting-non.png';
import VoteSelIcon from '../../images/ic-voting-sel.png';
import ShareNonIcon from '../../images/ic-share-non.png';
import FacebookProvider, { Share } from 'react-facebook';

import CubeEndIcon from '../../images/ic-cube-end.png';

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
  actions: {
    paddingTop: '12px',
    bottom: '0',
    width: '100%',
    display: 'block',
    height: '52px',
  },
  activeStatus: {
    padding: '0 0 0 16px',
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
    width: '19px',
    height: '19px',
  },
  captionNText: {
    padding: '0 0 0 5px',
    fontSize: '15px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.27',
    letterSpacing: 'normal',
    color: '#7c7c7c',
  },
  captionSText: {
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
  cubeEnd: {
    width: '6px',
    height: '10px',
    objectFit: 'contain',
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
});

const votingIcons = {
  non: {
    selImg: VoteNonIcon,
    styleClass: null,
    caption: '좋아요',
  },
  sel: {
    selImg: VoteSelIcon,
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

/* eslint-disable react/prefer-stateless-function */
class ReviewCardBottomBarView extends React.PureComponent {
  state = {
    voting: false,
    reviewing: false,
    sharing: false,
    openSuccesPop: false,
    openLoginPop: false,
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
  }

  handleVoting = reviewId => {
    // console.log('handleVoting in detail');
    // console.log(`this.props.likeYn =====[ ${this.props.likeYn}]`);
    if (this.props.likeYn > 0) {
      this.props.onViewVote(reviewId);
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
            this.props.onViewVote(reviewId);
          }
        });
      } else {
        this.setState({
          openLoginPop: true,
        });
      }
    }
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

    this.props.history.push('/mypage');
  };
  render() {
    const { classes } = this.props;
    const {
      reviewId,
      onViewVote,
      campaign,
      viewType,
      likeYn,
      review,
    } = this.props;
    const { voting, reviewing, sharing, viewClass } = this.state;

    const curVote = likeYn ? votingIcons.sel : votingIcons.non;
    const curReviewing = campaign ? reviewingIcons.sel : reviewingIcons.non;
    const curShare = shareIcons.non;
    // const curVote = votingIcons.sel;
    // const curVote = votingIcons.non;
    // const curShare = shareIcons.non;
    // const curReviewing = reviewingIcons.non;
    // const curReviewing = reviewingIcons.sel;

    // current status for campaign
    let currentStatus = null;
    switch (review.rewardActive) {
      case 'DOING':
        currentStatus = (
          <span className={curReviewing.styleClass}>
            <FormattedMessage {...messages.rewardActive} />
          </span>
        );
        break;
      case 'END':
        currentStatus = (
          <span className={curReviewing.styleClass}>
            <img src={CubeEndIcon} className={classes.cubeEnd} />
            <span className={curReviewing.styleClass}>
              {review.rewardLitercube}
            </span>
          </span>
        );
        break;
      default:
        break;
    }

    if (onViewVote !== false) {
      return (
        <div className={viewClass}>
          <div className={classes.actions}>
            <div className={classes.activeStatus}>
              <img
                src={curVote.selImg}
                className={classes.icons}
                onClick={() => {
                  this.handleVoting(this.props.reviewId);
                }}
              />
              <span
                className={curVote.styleClass}
                onClick={() => {
                  this.handleVoting(this.props.reviewId);
                }}
              >
                {/* <FormattedMessage {...messages.votingActive} /> */}
                좋아요
              </span>
            </div>
            <div className={classes.activeStatus}>
              {/* <span className={curReviewing.styleClass}> */}
              {currentStatus}
              {/* </span> */}
            </div>
            <div className={classes.activeRStatus}>
              <FacebookProvider appId={process.env.FACEBOOK_APPID}>
                <Share href={window.location.href}>
                  {/* <Share href="http://www.facebook.com"> */}
                  <div>
                    <img src={curShare.selImg} className={classes.shareicons} />
                  </div>
                </Share>
              </FacebookProvider>
            </div>
          </div>
          <Dialog
            open={this.state.openSuccesPop}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.popWrap}
            fullWidth="true"
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
            fullWidth="true"
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
              <Button onClick={this.handleLoginClose} color="secondary">
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <div className={classes.actions}>
            <div className={classes.activeStatus}>
              <img src={curVote.selImg} className={classes.icons} />
              <span className={curVote.styleClass}>
                {/* <FormattedMessage {...messages.votingActive} /> */}
                좋아요
              </span>
            </div>
            <div className={classes.activeStatus}>
              {/* <span className={curReviewing.styleClass}>               */}
              {currentStatus}
              {/* </span> */}
            </div>
            <div className={classes.activeRStatus}>
              <FacebookProvider appId={process.env.FACEBOOK_APPID}>
                <Share href={window.location.href}>
                  {/* <Share href="http://www.facebook.com"> */}
                  <div>
                    <img src={curShare.selImg} className={classes.shareicons} />
                  </div>
                </Share>
              </FacebookProvider>
            </div>
          </div>
          <Dialog
            open={this.state.openSuccesPop}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.popWrap}
            fullWidth="true"
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
        </div>
      );
    }
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
};

const withConnect = connect();
// mapStateToProps,
// mapDispatchToProps,

export default compose(
  withConnect,
  withStyles(styles),
)(ReviewCardBottomBarView);
