/**
 *
 * SurveyItemTotal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StarRatings from 'react-star-ratings';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
  scoreBox: {
    width: '25px',
    height: '20px',
    fontFamily: 'SFProDisplay',
    fontSize: '16px',
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#333333',
  },
});

/* eslint-disable react/prefer-stateless-function */
class SurveyItemTotal extends React.PureComponent {
  render() {
    const {
      starEmptyColor,
      starRatedColor,
      starHoverColor,
      totalCount,
      totalRatingArry,
      classes,
    } = this.props;
    //const ratePoint = Number.toFixed(1);
    // console.log(totalCount);
    // console.log("]-----****---totalRatingArr--------[");
    // console.log(totalRatingArry);
    let ratePoint = 0;
    let ratePointcaption = '0.0';
    //const ratePoint = Number.toFixed(1);
    if (totalCount > 0) {
      // console.log(totalRatingArry.length);
      if (totalRatingArry.length > 0) {
        let totalpoint = 0;
        const totalRatingArryTmp = [...totalRatingArry];
        // console.log(totalRatingArryTmp);
        for (let i = 0; i < totalRatingArryTmp.length; i += 1) {
          totalpoint += totalRatingArry[i].rating;
        }
        // for (let i = 0; i < totalRatingArry.length; i = +1) {
        // totalpoint += totalRatingArry[i].rating;
        // }
        ratePoint = totalpoint / totalCount;

        ratePointcaption = ratePoint.toFixed(1);
        if (ratePoint === 0) {
          ratePointcaption = '0.0';
        }
        //ratePoint = ratePoint.toFixed(1);
        // ratePoint = parseInt(totalpoint / totalCount);
        // console.log(ratePoint);
      }
    }
    // console.log(ratePointcaption);
    return (
      <div>
        <StarRatings
          rating={ratePoint}
          // changeRating={this.changeRating}
          numberOfStars={5}
          starSpacing="17"
          starDimension="40px"
          name="rating"
          starEmptyColor={totalCount > 0 ? starEmptyColor : '#dfdfdf'}
          starRatedColor={starRatedColor}
          starHoverColor={starHoverColor}
          svgIconPath="M19.77 29.503l6.838 4.288c1.252.786 2.784-.376 2.455-1.845l-1.813-8.063 6.047-5.433c1.104-.99.51-2.87-.94-2.99l-7.957-.7-3.114-7.62a1.626 1.626 0 0 0-3.031 0l-3.114 7.603-7.958.7c-1.45.12-2.043 2-.939 2.99l6.047 5.432-1.813 8.064c-.33 1.469 1.203 2.63 2.455 1.845l6.838-4.271z"
        />
        <input name="totalScore" value={ratePoint} type="hidden" />
        <span>{ratePointcaption}</span>
      </div>
    );
  }
}

SurveyItemTotal.propTypes = {
  starEmptyColor: PropTypes.string.isRequired,
  starRatedColor: PropTypes.string.isRequired,
  starHoverColor: PropTypes.string.isRequired,
  totalCount: PropTypes.number.isRequired,
  totalRatingArry: PropTypes.array.isRequired,
};

// export default SurveyItemTotal;
export default withStyles(styles)(SurveyItemTotal);
