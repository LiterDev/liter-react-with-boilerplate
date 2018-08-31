/**
 *
 * MediaThumbnail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import StyledLink from 'components/ReviewCard/StyledLink';
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
  },
});

function MediaThumbnail(props) {
  const { classes } = props;
  // console.log(`fullPathMedium =====[ ${props.fullPathMedium}]`);
  // console.log(`reviewId =====[ ${props.reviewId}]`);
  switch (props.mediaType) {
    case 'IMAGE':
      return (
        <div className={classes.iContainer}>
          <StyledLink to={`/review/${props.reviewId}`}>
            <img
              className={classes.iMediaSize}
              src={
                props.imageExt === 'gif' ? props.fullPath : props.fullPathMedium
              }
              alt={props.description}
            />
          </StyledLink>
        </div>
      );
    case 'YOUTUBE':
      return (
        <div className={classes.vContainer}>
          {/* <iframe id="player" type="text/html" className={classes.vMediaSize} src={props.fullPath} frameBorder="0" /> */}
          <iframe
            id="player"
            className={classes.vMediaSize}
            src={`https://www.youtube.com/embed/${props.movieKey}`}
            frameBorder="0"
          />
        </div>
      );
    default:
      return <div />;
  }
}

MediaThumbnail.propTypes = {
  fullPath: PropTypes.any,
  mediaType: PropTypes.string,
  fullPathReduce: PropTypes.any,
  fullPathMedium: PropTypes.any,
  fullPathSmall: PropTypes.any,
  imageExt: PropTypes.any,
  reviewId: PropTypes.any,
};

export default withStyles(styles)(MediaThumbnail);
