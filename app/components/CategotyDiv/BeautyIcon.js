/**
 *
 * CategotyDiv
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
/* material-ui core */
/* material-ui icon */
/* containers */
/* components */
/* image */
import Beauty from '../../images/ic-beauty-sel-2@3x.png';
import BeautyNone from '../../images/ic-beauty-non@3x.png';
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';
const styles = theme => ({
  icon: {
    // maxHeight: '100%',
    // maxWidth: '100%',
    // width: 'auto',
    // height: 'auto',
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // margin: 'auto',
    width: 40,
  },
});
/* eslint-disable react/prefer-stateless-function */
class BeautyIcon extends React.PureComponent {
  render() {
    const { classes, active } = this.props;
    return (
      <div>
        {active == true ? (
          // <svg
          //   className={classes.icon}
          //   xmlns="http://www.w3.org/2000/svg"
          //   width="40"
          //   height="40"
          //   viewBox="0 0 40 40"
          // >
          //   <g
          //     fill="none"
          //     // fill-rule="evenodd"
          //     stroke="#1591FF"
          //     transform="translate(14.035 4.21)"
          //   >
          //     <rect
          //       width="9.474"
          //       height="13.737"
          //       x=".877"
          //       y="16.965"
          //       // stroke-width="1.754"
          //       rx=".591"
          //     />
          //     <rect
          //       width="8.273"
          //       height="2.994"
          //       x="1.477"
          //       y="14.59"
          //       // stroke-width="1.773"
          //       rx=".591"
          //     />
          //     <path
          //       // stroke-width="1.773"
          //       d="M3.25 14.424h4.728V1.78a.886.886 0 0 0-1.596-.532L3.428 5.183a.886.886 0 0 0-.178.533v8.708z"
          //     />
          //     <path
          //       // stroke-width="1.773"
          //       d="M3.546 6.391a3.594 3.594 0 0 0 3.42-2.49l.682-2.114"
          //     />
          //   </g>
          // </svg>
          <img src={Beauty} alt="" className={classes.icon} />
        ) : (
          <img src={BeautyNone} alt="" className={classes.icon} />
        )}
      </div>
    );
  }
}

BeautyIcon.propTypes = {
  active: PropTypes.bool.isRequired,
};

// export default BeautyIcon;
export default withStyles(styles)(BeautyIcon);
