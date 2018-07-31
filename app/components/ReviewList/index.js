/**
 *
 * ReviewList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ReviewCard from 'components/ReviewCard';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
});
/* eslint-disable react/prefer-stateless-function */
class ReviewList extends React.PureComponent {
  render() {
    const { reviews } = this.props;
    // const revies = [1, 2, 3, 4, 5, 6, 7, 8];
    let reviewArray = null;

    if(reviews !== false) {
      console.log(']=====]review list[=====[');
      console.log(reviews.reviews);
      reviewArray = reviews.reviews;

      return (
        <div>
          {
            reviewArray && reviewArray.map(review => (
              <div key={review.id}>
                <ReviewCard review={review}/>
              </div>
              ))
          }
        </div>
      );
    }

    return (
      <div>
        <Typography >
          <FormattedMessage {...messages.noexistreview} />
        </Typography>
      </div>
    );
  }
}

ReviewList.propTypes = {};

export default withStyles(styles)(ReviewList);
