/**
 *
 * MediaSlider
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Media from 'components/Media';

import messages from './messages';
import Slider from 'react-slick';

const styles = theme => ({
  // paddingBottom - floating bar
  root: {
  },
  flex: {
    flex: 1,
  },
  slideItemContainer: {
    paddingRight: 8,
  },
  slideItem: {
    width: '100%',
  },
  container: {
    // border: '1px solid red',
  },
})

/* eslint-disable react/prefer-stateless-function */
class MediaSlider extends React.PureComponent {
  render() {
    const { classes } = this.props;
    const { media, user } = this.props;

    console.log(media);

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    let mediaArray = false;

    if (media !== false) {
      mediaArray = Object.values(media);

      return (
        <div className={classes.root}>
          <Slider {...settings}>
              {
                mediaArray &&
                mediaArray.map(review => (
                  <Media key={review.id} fullPath={review.fullPath} mediaType={review.mediaType} description={review.name} />
                ))
              }
          </Slider>
        </div>
      );
    }

    return (
      <div></div>
    );    
  }
}

MediaSlider.propTypes = {};

export default withStyles(styles)(MediaSlider);
