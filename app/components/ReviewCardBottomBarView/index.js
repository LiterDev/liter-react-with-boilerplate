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

import VoteNonIcon from '../../images/ic-voting-non.png';
import VoteSelIcon from '../../images/ic-voting-sel.png';
import ShareNonIcon from '../../images/ic-share-non.png';
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
  rootBottom: {
  },
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
})

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
  }
}

const reviewingIcons = {
  non: {
    styleClass: null,
  },
  sel: {
    styleClass: null,
  }
}

const shareIcons = {
  non: {
    selImg: ShareNonIcon,
    styleClass: null,
    caption: '공유하기',
  },
}

/* eslint-disable react/prefer-stateless-function */
class ReviewCardBottomBarView extends React.PureComponent {
  state = {
    voting: false,
    reviewing: false,
    sharing: false,
  }
  constructor(props) {
    super(props);
    votingIcons.sel.styleClass = this.props.classes.captionSText;
    votingIcons.non.styleClass = this.props.classes.captionNText;
    reviewingIcons.sel.styleClass = this.props.classes.captionSText;
    reviewingIcons.non.styleClass = this.props.classes.captionNText;
    shareIcons.non.styleClass = this.props.classes.shareText;
   
    this.state.viewClass = (props.viewType)? this.props.classes.rootFix : this.props.classes.rootBottom;

  }

  render() {
    const { classes } = this.props;
    const { reviewId, onViewVote, campaign, viewType, likeYN } = this.props;
    const { voting, reviewing, sharing, viewClass } = this.state; 
    
    console.log(likeYN);

    const curVote = (likeYN)? votingIcons.sel : votingIcons.non;
    const curReviewing = (campaign)? reviewingIcons.sel : reviewingIcons.non;
    const curShare = shareIcons.non;
    // const curVote = votingIcons.sel;
    // const curVote = votingIcons.non;
    // const curShare = shareIcons.non;
    // const curReviewing = reviewingIcons.non;
    // const curReviewing = reviewingIcons.sel;

    if(onViewVote !== false) {
      return (
        <div className={viewClass}>
          <div className={classes.actions}>
            <div className={classes.activeStatus}>
              <img src={curVote.selImg} className={classes.icons} onClick={() => { this.props.onViewVote(this.props.reviewId) }} />
              <span className={curVote.styleClass} onClick={() => { this.props.onViewVote(this.props.reviewId) }} >
                {/* <FormattedMessage {...messages.votingActive} /> */}
                좋아요
              </span>
            </div>
            <div className={classes.activeStatus}>
              <span className={curReviewing.styleClass}>              
                {/* <FormattedMessage {...messages.rewardActive} /> */}
                진행중
              </span>
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
              <span className={curReviewing.styleClass}>              
                {/* <FormattedMessage {...messages.rewardActive} /> */}
                진행중
              </span>
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

const withConnect = connect(
  // mapStateToProps,
  // mapDispatchToProps,
);

export default compose(
  withConnect,
  withStyles(styles)
)(ReviewCardBottomBarView);

