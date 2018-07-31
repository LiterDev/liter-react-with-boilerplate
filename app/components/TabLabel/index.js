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
    fontSize: 17,
    float: 'right',
    display: 'table-cel',
    marginTop: 2,
  },
  icon: {
    float: 'left',
    verticalAlign: 'middle',
    marginRight: 5,
    display: 'table-cel',
  },
});
function TabLabel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <span className={classes.icon}>
        <Icon>check_circle</Icon>
      </span>
      <span className={classes.text}>{props.children}</span>
    </div>
  );
}

TabLabel.propTypes = {};

// export default TabLabel;
export default withStyles(styles)(TabLabel);
