/**
 *
 * About
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
  appBar: {
    height: theme.spacing.unit * 8,
    textAlign: 'right',

    // position: 'relative',
  },
  container: {
    paddingTop: theme.spacing.unit * 0,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    height: '100vh',
    paddingLeft: 30,
    paddingRight: 30,
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  close: {
    position: 'absolute',
    right: 6.4,
  },
  litertext: {
    paddingTop: 22,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 20,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#1591ff',
  },
  literlogo: {
    width: 130,
    height: 35,
    objectFit: 'contain',
  },
  bodytext: {
    marginTop: 22,
    // width: 255,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#333333',
    paddingBottom: '30px',
    whiteSpace: 'pre-wrap',
  },
  literBox: {
    // border: '1px solid red',
    display: 'inline-block',
  }
});

/* eslint-disable react/prefer-stateless-function */
class About extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Close"
              className={classes.close}
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className={classes.container}>
          <div className={classes.literBox}>
            <div className={classes.litertext}>
              리터란?
            </div>
            <div className={classes.bodytext}>
              <FormattedMessage {...messages.aboutliter} />
            </div>
          </div>
          <div className={classes.literBox}>
            <div className={classes.litertext}>
              지갑과 보상받기
            </div>
            <div className={classes.bodytext}>
              <FormattedMessage {...messages.walletnreward} />
            </div>
          </div>
          <div className={classes.literBox}>
            <div className={classes.litertext}>
              LITER CUBE
            </div>
            <div className={classes.bodytext}>
              <FormattedMessage {...messages.litercube} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {};

export default withStyles(styles)(About);
