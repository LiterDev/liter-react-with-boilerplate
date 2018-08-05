/**
 *
 * Media
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  iContainer: {
    width: '100%',
    height: '100%',
  },
  iMediaSize: {
    width: '100%',
    height: '100%',
    maxHeight: '280px',
  },
  vContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',
  },
  vMediaSize: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
});

function Media(props) {

  const { classes } = props;

  console.log(props.movieKey);

  switch(props.mediaType) {
    case 'IMAGE':
        return (
          <div className={classes.iContainer}>
            <img className={classes.iMediaSize} src={props.fullPath} alt={props.description}/>
          </div>
        );
    case 'YOUTUBE':
        return (
          <div className={classes.vContainer}>
              {/* <iframe id="player" type="text/html" className={classes.vMediaSize} src={props.fullPath} frameBorder="0" /> */}
              <iframe id="player" className={classes.vMediaSize} src={`https://www.youtube.com/embed/${props.movieKey}`} frameborder="0" />
          </div>
        );
    default:
        return (
          <div></div>
        )
  }
}

Media.propTypes = {
  fullPath: PropTypes.any,
  mediaType: PropTypes.string,
};

export default withStyles(styles)(Media);
