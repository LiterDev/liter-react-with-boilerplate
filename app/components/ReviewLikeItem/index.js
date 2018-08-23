/**
 *
 * ReviewLikeItem
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
/* material-ui core */
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
/* material-ui icon */
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
    // width: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 90,
    height: 90,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
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
  },
});

/* eslint-disable react/prefer-stateless-function */
class ReviewLikeItem extends React.PureComponent {
  render() {
    const { classes, review } = this.props;
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
              <Typography variant="subheading" color="textSecondary">
                Mac Miller
              </Typography>
              <Typography variant="headline">Live From Space</Typography>
              <div className={classes.controls}>DDDD</div>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

ReviewLikeItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewLikeItem);
