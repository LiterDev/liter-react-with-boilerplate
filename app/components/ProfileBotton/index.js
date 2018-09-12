/**
 *
 * ProfileBotton
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

/* material-ui core */
import Button from '@material-ui/core/Button';
/* material-ui icon */
/* containers */
/* components */
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  button: {
    width: '95%',
    // marginLeft: 13,
  },
  buttonActive: {
    width: '95%',
    border: 'solid 1px rgb(21, 145, 255)',
  },
  checkIcon: {
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'rgb(170, 170, 170)',
  },
  buttonTextActivs: {
    fontSize: 16,
    color: 'rgb(21, 145, 255)',
  },
});
/* eslint-disable react/prefer-stateless-function */
class ProfileBotton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.active);
    if (nextProps.active !== prevState.active) {
      return { active: nextProps.active };
    }
    return null;
  }
  render() {
    const { classes, active, buttonText, handleToggle } = this.props;
    console.log(active);
    return (
      <div>
        {active == true ? (
          <Button
            variant="outlined"
            className={classes.buttonActive}
            onClick={handleToggle}
          >
            <span className={classes.buttonTextActivs}>{buttonText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className={classes.checkIcon}
            >
              <g fill="none">
                <path d="M0 0h18v18H0z" />
                <path
                  fill="#1591ff"
                  d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zM7.5 12.75L4.279 9.529A.749.749 0 0 1 5.337 8.47L7.5 10.627l5.162-5.161a.748.748 0 0 1 1.06.002.753.753 0 0 1-.003 1.063L7.5 12.75z"
                />
              </g>
            </svg>
          </Button>
        ) : (
          <Button
            variant="outlined"
            className={classes.button}
            onClick={handleToggle}
          >
            <span className={classes.buttonText}>{buttonText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className={classes.checkIcon}
            >
              <g fill="none">
                <path d="M0 0h18v18H0z" />
                <path
                  fill="#CCC"
                  d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zM7.5 12.75L4.279 9.529A.749.749 0 0 1 5.337 8.47L7.5 10.627l5.162-5.161a.748.748 0 0 1 1.06.002.753.753 0 0 1-.003 1.063L7.5 12.75z"
                />
              </g>
            </svg>
          </Button>
        )}
      </div>
    );
  }
}

ProfileBotton.propTypes = {
  active: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

// export default ProfileBotton;
export default withStyles(styles)(ProfileBotton);
