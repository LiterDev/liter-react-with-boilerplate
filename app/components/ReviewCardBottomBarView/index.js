/**
 *
 * ReviewCardBottomBarView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import VoteNonIcon from '../../images/ic-voting-non.png';
import VoteSelIcon from '../../images/ic-voting-sel.png';
import ShareNonIcon from '../../images/ic-share-non.png';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
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
   
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote = () => {
    this.props.onViewVote();
  };

  render() {
    const { classes } = this.props;
    const { onViewVote, liked, campaign } = this.props;
    const { voting, reviewing, sharing } = this.state; 
    
    console.log("]] ----- ref ---- [[");
    console.log(this);

    const curVote = (liked)? votingIcons.sel : votingIcons.non;
    const curReviewing = (campaign)? reviewingIcons.sel : reviewingIcons.non;
    const curShare = shareIcons.non;
    // const curVote = votingIcons.sel;
    // const curVote = votingIcons.non;
    // const curShare = shareIcons.non;
    // const curReviewing = reviewingIcons.non;
    // const curReviewing = reviewingIcons.sel;

    if(onViewVote !== false) {
      return (
        <div className={classes.root}>
          <div className={classes.actions}>
            <div className={classes.activeStatus}>
              <img src={curVote.selImg} className={classes.icons} onClick={() => { this.handleVote() }} />
              <span className={curVote.styleClass} onClick={() => this.handleVote} >
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
              <img src={curShare.selImg} className={classes.shareicons} />
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
              <img src={curShare.selImg} className={classes.shareicons} />
            </div>
          </div>          
        </div>
      );
    }    
  }
}

ReviewCardBottomBarView.propTypes = {
  onClick: PropTypes.func,
};

export default withStyles(styles)(ReviewCardBottomBarView);

