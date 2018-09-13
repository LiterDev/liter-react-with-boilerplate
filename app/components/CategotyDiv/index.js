/**
 *
 * CategotyDiv
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

/* material-ui core */
import Avatar from '@material-ui/core/Avatar';

/* material-ui icon */
/* containers */
/* components */
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  root: {
    textAlign: 'center',
    width: 68,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  iconWrap: {
    position: 'relative',
    // borderRadius: 10,
  },
  avatar: {
    width: 68,
    height: 68,
    // border: 'solid 0.5px rgb(153, 153, 153)',
    backgroundColor: '#ffffff',
    // position: 'relative',
  },
  avatarActive: {
    border: 'solid 1px rgb(21, 145, 255)',
  },
  avatarDeActive: {
    border: 'solid 0.5px rgb(153, 153, 153)',
  },
  text: {
    position: 'relative',
    paddingTop: 10.5,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
  },
  textActive: {
    color: 'rgb(21, 145, 255)',
  },
  textDeActive: {
    color: 'rgb(153, 153, 153)',
  },
});
/* eslint-disable react/prefer-stateless-function */
class CategotyDiv extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps.active);
    if (nextProps.active !== prevState.active) {
      return { active: nextProps.active };
    }
    return null;
  }
  render() {
    const { classes, active, iconText, iconImg, handleToggle } = this.props;
    return (
      <div className={classes.root}>
        {/* <div className={classes.iconWrap}>{iconImg}</div> */}
        <Avatar
          className={classNames(
            classes.avatar,
            active == true ? classes.avatarActive : classes.avatarDeActive,
          )}
          onClick={handleToggle}
        >
          {iconImg}
        </Avatar>
        <div
          className={classNames(
            classes.text,
            active == true ? classes.textActive : classes.textDeActive,
          )}
        >
          {iconText}
        </div>
      </div>
    );
  }
}

CategotyDiv.propTypes = {
  active: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  iconText: PropTypes.string.isRequired,
};

// export default CategotyDiv;
export default withStyles(styles)(CategotyDiv);
