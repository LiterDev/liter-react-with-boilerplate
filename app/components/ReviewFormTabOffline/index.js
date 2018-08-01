/**
 *
 * ReviewFormTabOffline
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
  rowdiv: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingTop: 10,
  },
});
/* eslint-disable react/prefer-stateless-function */
class ReviewFormTabOffline extends React.PureComponent {
  render() {
    // const { classes } = this.props;
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        {/* <div className={classes.rowdiv}>서비스 준비중 입니다.</div> */}
      </div>
    );
  }
}

ReviewFormTabOffline.propTypes = {};

// export default ReviewFormTabOffline;
export default withStyles(styles)(ReviewFormTabOffline);
