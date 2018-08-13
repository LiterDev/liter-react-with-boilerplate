/**
 *
 * AgreeDetailPop
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { withStyles } from '@material-ui/core/styles';

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
  },
  literlogo: {
    width: 130,
    height: 35,
    objectFit: 'contain',
  },
  bodytext: {
    marginTop: 22,
    // width: 255,
    height: 19,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#111111',
  },
});


/* eslint-disable react/prefer-stateless-function */
class AgreeDetailPop extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              // onClick={this.props.history.goBack()}
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
        <FormattedMessage {...messages.header} />
        <div className={classes.container}>
          <div className={classes.litertext}>
            리터란?
          </div>
          <div className={classes.bodytext}>
            <FormattedMessage {...messages.bodytext} />
          </div>
        </div>
      </div>
    );
  }
}

AgreeDetailPop.propTypes = {};

export default AgreeDetailPop;
