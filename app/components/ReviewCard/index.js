/**
 *
 * ReviewCard
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Media from 'components/Media';
import MediaSlider from 'components/MediaSlider';
import ReviewCardBottomBar from 'containers/ReviewCardBottomBar';
import ReviewCardBottomBarView from 'components/ReviewCardBottomBarView';
import FollowButton from 'components/FollowButton';
import FollowAjxButton from 'components/FollowAjxButton';

import TimeAt from 'components/TimeAt';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ShareIcon from '@material-ui/icons/Share';
import GradeIcon from '@material-ui/icons/Grade';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
// import classnames from 'classnames';
// import SvgIcon from '@material-ui/core/SvgIcon';

import FacebookProvider, { Share } from 'react-facebook';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import { prototype } from 'node-notifier/notifiers/balloon';

import StyledLink from './StyledLink';

import avatarDefault from '../../images/ic-avatar.png';

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
    display: 'flex',
    height: '48px',
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
    title: {
      backgroundColor: 'black',
    },
  },
  reviewTitle: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '18px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.44',
    letterSpacing: 'normal',
    color: '#111111',
    paddingBottom: '8px',
  },
  reviewSummary: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '16px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.6',
    letterSpacing: 'normal',
    color: '#333333',
    height: '48px',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
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
  followButton: {
    display: 'block',
  },
  cardContent: {
    paddingTop: '50px',
  },
  contentWrapper: {
    height: '110px',
    overflow: 'hidden',
  },
});

/* eslint-disable react/prefer-stateless-function */
class ReviewCard extends React.PureComponent {
  // state = { expanded: false };

  handleVoting = reviewId => {
    this.props.handleVoting(reviewId);
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    // console.log(window.location.href);
    // console.log(this.props.history);
    const { classes } = this.props;
    const { idx, review, viewType } = this.props;
    const { handleVoting } = this.props;

    const mediaCollection = review ? review.mediaCollection : false;
    const mediaItem = mediaCollection ? mediaCollection[0] : false;
    // let mainImageUrl = mediaCollection.length > 0 ? '/' + mediaCollection[0].path + '/' + mediaCollection[0].uuid + mediaCollection[0].name : '';
    const avatarImageUrl = review.user.profileImageSmallUrl;
    // temp date
    // call time-diff function (6 level)
    const timeDiff = '방금전';

    // const elAvatar =
    //   avatarImageUrl != null ? (
    //     <Link to={`/profile/${this.props.review.user.id}`}>
    //     <Avatar
    //       aria-label="Recipe"
    //       className={classes.avatar}
    //       src={avatarImageUrl}
    //       // onClick={this.moveProfilePage}
    //     />
    //     </Link>
    //   ) : (
    //     <Link to={`/profile/${this.props.review.user.id}`}>
    //     <img
    //       aria-label="Recipe"
    //       className={classes.avatar}
    //       src={avatarDefault}
    //       // onClick={this.moveProfilePage}
    //     />
    //     </Link>
    //   );

    const elAvatar =
      avatarImageUrl != null ? (
        <StyledLink to={`/profile/${this.props.review.user.id}`}>
          <Avatar
            aria-label="Recipe"
            className={classes.avatar}
            src={avatarImageUrl}
          />
        </StyledLink>
      ) : (
        <StyledLink to={`/profile/${this.props.review.user.id}`}>
          <img
            aria-label="Recipe"
            className={classes.avatar}
            src={avatarDefault}
          />
        </StyledLink>
      );

    return (
      <div>
        <Card className={classes.card}>
          {viewType ? (
            <CardHeader
              className={classes.cardHeader}
              avatar={elAvatar}
              action={
                // <FollowButton
                //   followYn={review.followYn}
                //   onViewFollow={this.props.handleFollow}
                //   followId={review.user.id}>
                // </FollowButton>

                <FollowAjxButton
                  followEmail={review.user.username}
                  followYn={review.followYn}
                  followId={review.user.id}
                />
              }
              title={
                <StyledLink to={`/profile/${this.props.review.user.id}`}>
                  {review.user.userNickName}
                </StyledLink>
              }
              // subheader={timeDiff}
              subheader={<TimeAt date={review.updateAt} />}
            />
          ) : (
            <div />
          )}

          {/* { mediaItem ? ( <Media fullPath={mediaItem.fullPath} mediaType={mediaItem.mediaType} description={mediaItem.name} /> ) : ( <div></div> ) } */}

          <MediaSlider media={mediaCollection} reviewId={review.id} />

          {/* <CardMedia
            className={classes.media}
            image={mainImageUrl}
            title={review.username}
          /> */}

          <ReviewCardBottomBarView
            likeYn={review.likeYn}
            onViewVote={this.handleVoting}
            review={review}
          />
          <CardContent className={classes.cardContent}>
            <div className={classes.contentWrapper}>
              <StyledLink to={`/review/${review.id}`}>
                <Typography className={classes.reviewTitle} component="p">
                  {review.title}
                </Typography>
                <Typography className={classes.reviewSummary} component="p">
                  {review.content}
                </Typography>
              </StyledLink>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
};

ReviewCard.defaultProps = {
  viewType: true,
};

// export default ReviewCard;
export default withStyles(styles)(ReviewCard);
