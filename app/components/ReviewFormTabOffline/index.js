/**
 *
 * ReviewFormTabOffline
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

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
    textAlign: 'center',
  },
});
/* eslint-disable react/prefer-stateless-function */
class ReviewFormTabOffline extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        {/* <div className={classes.rowdiv}>서비스 준비중 입니다.</div> */}
        <div className={classes.rowdiv}>
          <Divider className={classes.divider} />
          <div className={classes.inputLabel}>상품명</div>
          <div className={classes.inputWrap}>
            <div className={classes.search}>
              <SearchIcon />
            </div>
            <input
              className={classes.input}
              placeholder="상품명을 입력해 주세요"
              name="productName"
            />
          </div>
          <Divider className={classes.divider} />
          <div className={classes.inputLabel}>구매처</div>
          <div className={classes.inputWrap}>
            <div className={classes.search}>
              <img src={LinkIcon} alt="link" className={classes.linkIcon} />
            </div>
            <input
              className={classes.input}
              placeholder="구매처를 입력해 주세요"
              name="buyLink"
            />
          </div>
        </div>
      </div>
    );
  }
}

ReviewFormTabOffline.propTypes = {};

// export default ReviewFormTabOffline;
export default withStyles(styles)(ReviewFormTabOffline);
