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
    marginBottom: '-24px',
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
  slideCaptionBox: {
    position: 'relative',
    top: '-40px',
    left: '87%',
    display: 'inline-block',
    height: '24px',
    opacity: '0.65',
    borderRadius: '2px',
    backgroundColor: '#000000',
  },
  slideCaption: {
    display: 'block',
    margin: 'auto',
    padding: '3px 6px 3px 6px',
    fontFamily: 'SFProDisplay',
    fontSize: '13px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.6',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
});

/* eslint-disable react/prefer-stateless-function */
class MediaSlider extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
      currentSlide: 1,
    };
  }

  render() {
    const { classes } = this.props;
    const { media, user, reviewId } = this.props;

    const settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    let mediaArray = false;

    if (media !== false) {
      mediaArray = Object.values(media);

      
      // console.log(mediaArray);

      return (
        <div className={classes.root}>
          <Slider
            {...settings}
            afterChange={currentSlide => {
              this.setState({ currentSlide: currentSlide + 1 });
            }}
          >
            {mediaArray &&
              mediaArray.map((review, idx) => (
                <Media
                  key={idx}
                  fullPath={review.fullPath}
                  fullPathReduce={review.fullPathReduce}
                  fullPathSmall={review.fullPathSmall}
                  fullPathMedium={review.fullPathMedium}
                  imageExt={review.imageExt}
                  mediaType={review.mediaType}
                  description={review.name}
                  reviewId={reviewId}
                  movieKey={review.movieKey}
                />
              ))}
          </Slider>
          <div className={classes.slideCaptionBox}>
            <span className={classes.slideCaption}>
              {this.state.currentSlide} / {mediaArray.length}
            </span>
          </div>
        </div>
      );
    }

    return <div />;
  }
}

MediaSlider.propTypes = {};

export default withStyles(styles)(MediaSlider);
