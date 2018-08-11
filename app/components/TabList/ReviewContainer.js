import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Star from '@material-ui/icons/Star';

import Media from 'components/Media';
import TimeAt from 'components/TimeAt';
import StyledLink from '../ReviewCard/StyledLink';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const styles = {
  line: {
    display: 'flex',
    justifyContent: 'left',
    position: 'relative',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '14px',
    paddingBottom: '14px',
    borderBottom: '1px solid #eeeeee',
  },
  row: {
    display: 'flex',
    justifyContent: 'left',
    position: 'relative',
    paddingTop: '2px',
    paddingBottom: '2px',
  },
  col: {
    justifyContent: 'left',
    textAlign: 'left',
  },
  col1: {
    flexGrow: 1,
    justifyContent: 'left',
    textAlign: 'left',
  },
  col3: {
    flexGrow: 3,
    justifyContent: 'left',
    paddingLeft: '12px',
    paddingRight: '17px',
  },
  col3Non: {
    flexGrow: 3,
    justifyContent: 'left',
  },
  reviewPhoto: {
    width: '90px',
    height: '90px',
    borderRadius: '2px',
    border: '1px solid #eeeeee',
  },
  left: {
    float: 'left',
  },
  right: {
    postion: 'relative',
    marginLeft: 'auto',
    textAlign: 'right',
  },
  fontSize12: {
    fontSize: '12px',
  },
  fontSize13: {
    fontSize: '13px',
  },
  fontSize14: {
    fontSize: '14px',
  },
  leftPadding0: {
    paddingLeft: '0px',
  },
  leftPadding6: {
    paddingLeft: '6px',
  },
  leftPadding10: {
    paddingLeft: '10px',
  },
  leftpadding12: {
    paddingLeft: '12px',
  },
  leftpadding16: {
    paddingLeft: '16px',
  },
  colBottom: {
    dispaly: 'inline-block',
    verticalAlign: 'bottom',
    linHeight: 1,
  },
  topRow: {
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.25',
  },
  userName: {
    // fontFamily: 'SFProText',
    // fontWeight: '500',
    color: '#7c7c7c',
  },
  update: {
    // fontFamily: 'AppleSDGothicNeo',
    // fontWeight: '300',
    color: '#aaaaaa',
  },
  follow: {
    marginLeft: 'auto',
    // fontFamily: 'AppleSDGothicNeo',
    color: '#6d9fcc',
  },
  title: {
    textAlign: 'left',
    color: '#111111',
  },
  ingTrue: {
    color: '#1591ff',
  },
  ingFalse: {
    color: '#aaaaaa',
  },
  saveAlt: {
    display: 'inline-block',
    textAlign: 'left',
    color: '#aaaaaa',
  },
  star: {
    color: '#7c7c7c',
  },
};

function ReviewContainer(props) {
  const { classes } = props;
  const { review } = props;

  const mediaCollection = review ? review.mediaCollection : false;
  const mediaItem = mediaCollection ? mediaCollection[0] : false;

  // const timeDiff = '방금전';
  return (
    <div className={classes.line}>
      <Card>
        <span className={classes.col}>
          <div className={classes.reviewPhoto}>
            {mediaItem ? (
              <Media
                fullPath={mediaItem.fullPath}
                mediaType={mediaItem.mediaType}
                description={mediaItem.name}
              />
            ) : (
              <div />
            )}
          </div>
        </span>
        <span className={classes.col3}>
          <div
            className={classNames(
              classes.row,
              classes.topRow,
              classes.fontSize12,
            )}
          >
            <span className={classNames(classes.left, classes.userName)}>
              {review.user.userNickName}
            </span>
            <span className={classNames(classes.leftPadding10, classes.update)}>
              <TimeAt date={review.updateAt} />
            </span>
          </div>
          <CardContent
            className={classNames(
              classes.row,
              classes.title,
              classes.fontSize14,
              classes.paddingBottom,
              classes.leftPadding0,
            )}
          >
            <StyledLink to={`/review/${review.id}`}>
              <Typography className={classes.reviewTitle} component="p">
                {review.title}
              </Typography>
            </StyledLink>
          </CardContent>
          <CardActions>
            <CheckCircleOutline style={{ fontSize: 13 }} />
          </CardActions>
          <div className={classNames(classes.row, classes.fontSize13)}>
            <div className={classNames(classes.left, classes.col1)}>
              <span
                className={
                  review.rewardActive === 'DOING'
                    ? classes.ingTrue
                    : classes.ingFalse
                }
              >
                <CheckCircleOutline style={{ fontSize: 13 }} />
                <span className={classes.leftPadding6}>진행중</span>
              </span>
            </div>
            <div className={classNames(classes.right, classes.col3Non)}>
              <span className={classNames(classes.col1, classes.saveAlt)}>
                <SaveAlt style={{ fontSize: 13 }} />
                <span className={classes.leftPadding6}>{review.linkCount}</span>
              </span>
              <span
                className={(classes.col1, classes.star, classes.leftpadding16)}
              >
                <Star style={{ fontSize: 13 }} />
                <span className={classes.leftPadding6}>
                  {review.totalScore}
                </span>
              </span>
            </div>
          </div>
        </span>
      </Card>
    </div>
  );
}

export default withStyles(styles)(ReviewContainer);
