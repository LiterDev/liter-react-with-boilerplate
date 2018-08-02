/**
 *
 * ReviewCardSlide
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { withStyles } from '@material-ui/core/styles';
import ReviewCard from 'components/ReviewCard';
import Slider from 'react-slick';

const styles = theme => ({
  // paddingBottom - floating bar
  root: {
    paddingBottom: '14px',
    marginLeft: '14px',
    marginBottom: '50px',
  },
  flex: {
    flex: 1,
  },
  slideItemContainer: {
    paddingRight: 8,
  },
  slideItem: {
    width: 340,
    borderRadius: 4,
    marginLeft: 8,
  },
  container: {
    // border: '1px solid red',
  },
  slideHeader: {
    marginTop: '15px',
    padding: '5px 10px',
    // border: '1px solid blue',
  },
  slideFontBase: {
    fontSize: '13px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    color: '#292d39',
  },
  slideHeaderFont: {
    fonFamily: 'AppleSDGothicNeo',
    fontWeight: '500',
  }
})

/* eslint-disable react/prefer-stateless-function */
class ReviewCardSlide extends React.PureComponent {

  render() {
    const { classes } = this.props;
    const { reviews, user } = this.props;

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1.2,
      slidesToScroll: 1,
    };

    let reviewArray = false;
    
    if (reviews !== false) {
      reviewArray = reviews.reviews;
    }
    
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classNames(classes.slideHeader, classes.slideFontBase, classes.slideHeaderFont)}>
            {user.username} 님의 다른 리뷰(13)
          </div>
        </div>
        <Slider {...settings}>
            {
              reviewArray &&
              reviewArray.map(review => (
                <div className={classes.slideItemContainer} key={review.id}>
                  <ReviewCard className={classes.slideItem} review={review} viewType={false}/>
                </div>
              ))
            }
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles)(ReviewCardSlide);
