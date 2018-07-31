/**
 *
 * ReviewList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ReviewCard from 'components/ReviewCard';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
});
/* eslint-disable react/prefer-stateless-function */
class ReviewList extends React.PureComponent {
  render() {
    const revies = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(']=====]review list[=====[');
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        {revies &&
          revies.map(review => (
            <div key={review.toString()}>
              <ReviewCard />
            </div>
          ))}
      </div>
    );
  }
}

ReviewList.propTypes = {};

export default withStyles(styles)(ReviewList);
