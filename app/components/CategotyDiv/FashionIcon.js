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
import Icon from '../../images/ic-fashion-sel-2@3x.png';
import IconNone from '../../images/ic-fashion-non@3x.png';

/* containers */
/* components */
/* image */
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
class LifeIcon extends React.PureComponent {
  render() {
    const { classes, active } = this.props;
    return (
      <div>
        {active == true ? (
          <img src={Icon} alt="" className={classes.icon} />
        ) : (
          <img src={IconNone} alt="" className={classes.icon} />
        )}
      </div>
    );
  }
}

LifeIcon.propTypes = {
  active: PropTypes.bool.isRequired,
};

// export default BeautyIcon;
export default withStyles(styles)(LifeIcon);
