/**
 *
 * TabLabel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
    display: 'table',
    marginRight: 6,
  },
  text: {
    verticalAlign: 'middle',
    fontSize: '1.4em',
    float: 'right',
    display: 'table-cel',
    marginTop: 2,
    '@media screen and (device-aspect-ratio: 40/71)': {
      fontSize: '1.1em',
    },
  },
  iconBox: {
    float: 'left',
    verticalAlign: 'middle',
    marginRight: 5,
    display: 'table-cel',
    // color: 'rgb(244, 244, 244)',
  },
  icon: {
    // fontSize: '18px',
    lineHeight: '26px',
    height: '30px',
    '@media screen and (device-aspect-ratio: 40/71)': {
      fontSize: '18px',
      height: '24px',
    },
  },
});
function TabLabel(props) {
  const { classes, selected } = props;
  // console.log(selected);
  return (
    <div className={classes.root}>
      <span className={classes.iconBox}>
        <SvgIcon classes={{ root: classes.icon }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h18v18H0z" />
              <path
                fill={selected === 1 ? '#1591FF' : '#E7E7E7'}
                fill-rule="nonzero"
                d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zM7.5 12.75L3.75 9l1.058-1.058L7.5 10.627l5.693-5.692L14.25 6 7.5 12.75z"
              />
            </g>
          </svg>
        </SvgIcon>
        {/* <div classes={{ root: classes.icon }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h18v18H0z" />
              <path
                fill="#E7E7E7"
                fill-rule="nonzero"
                d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zM7.5 12.75L3.75 9l1.058-1.058L7.5 10.627l5.693-5.692L14.25 6 7.5 12.75z"
              />
            </g>
          </svg>
        </div> */}
      </span>
      <span className={classes.text}>{props.children}</span>
    </div>
  );
}

TabLabel.propTypes = {};

// export default TabLabel;
export default withStyles(styles)(TabLabel);
