/**
 *
 * ReviewBottomBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import AtPrefix from './AtPrefix';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  badge: {
    top: -10,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  }
});

/* eslint-disable react/prefer-stateless-function */
class ReviewBottomBar extends React.PureComponent {
  
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="outlined" className={classes.button}>
          좋아요
        <Badge className={classes.badge} badgeContent={2} color="secondary" >
          </Badge>
        </Button>
        <IconButton aria-label="Cart">
        <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      </div>
    );
  }
}

ReviewBottomBar.propTypes = {};

export default withStyles(styles)(ReviewBottomBar);
