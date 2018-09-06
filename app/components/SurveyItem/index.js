/**
 *
 * SurveyItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StarRatings from 'react-star-ratings';

// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },

  scoreLetter :{
    width: '25px;',
    height: '20px',
    fontFamily: 'SFProDisplay',
    fontSize: '16px',
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch:'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#333333',

  },
});

/* eslint-disable react/prefer-stateless-function */
class SurveyItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.changeRating = this.changeRating.bind(this);
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });
    // console.log(newRating);

    this.props.totalRate(newRating, this.props.surveyId);
  }
  render() {
    const {
      starEmptyColor,
      starRatedColor,
      starHoverColor,
      surveyId,
      surveyType,
      surveyName,
      sortPosition,
    } = this.props;
    const { classes } = this.props;

    return (
      <div>
        
        <StarRatings
          rating={this.state.rating}
          changeRating={this.changeRating}
          numberOfStars={5}
          starSpacing="17"
          name="rating"
          starDimension="40px"
          starEmptyColor={starEmptyColor}
          starRatedColor={starRatedColor}
          starHoverColor={starHoverColor}
          svgIconPath="M19.77 29.503l6.838 4.288c1.252.786 2.784-.376 2.455-1.845l-1.813-8.063 6.047-5.433c1.104-.99.51-2.87-.94-2.99l-7.957-.7-3.114-7.62a1.626 1.626 0 0 0-3.031 0l-3.114 7.603-7.958.7c-1.45.12-2.043 2-.939 2.99l6.047 5.432-1.813 8.064c-.33 1.469 1.203 2.63 2.455 1.845l6.838-4.271z"
        />
        <span className={classes.scoreLetter}> {this.state.rating}.0 </span>
         
        <input
          type="hidden"
          value={`${surveyId}|${surveyType}|${
            this.state.rating
          }|${sortPosition}|${surveyName}`}
          // name={`startRating[${surveyId}].rating`}
          name="surveyRating"
        />
        {/* <StarRatings
          rating={this.state.rating}
          changeRating={this.changeRating}
          numberOfStars={5}
          starSpacing="0"
          name="rating"
          starEmptyColor="rgb(254, 226, 188)"
          starRatedColor="rgb(255, 189, 96)"
          starHoverColor="rgb(255, 189, 96)"
          svgIconPath="M19.77 29.503l6.838 4.288c1.252.786 2.784-.376 2.455-1.845l-1.813-8.063 6.047-5.433c1.104-.99.51-2.87-.94-2.99l-7.957-.7-3.114-7.62a1.626 1.626 0 0 0-3.031 0l-3.114 7.603-7.958.7c-1.45.12-2.043 2-.939 2.99l6.047 5.432-1.813 8.064c-.33 1.469 1.203 2.63 2.455 1.845l6.838-4.271z"
        />
        <StarRatings
          rating={this.state.rating}
          changeRating={this.changeRating}
          numberOfStars={5}
          starSpacing="0"
          name="rating"
          starEmptyColor="rgb(220, 235, 247)"
          starRatedColor="rgb(21, 145, 255)"
          starHoverColor="rgb(21, 145, 255)"
          svgIconPath="M19.77 29.503l6.838 4.288c1.252.786 2.784-.376 2.455-1.845l-1.813-8.063 6.047-5.433c1.104-.99.51-2.87-.94-2.99l-7.957-.7-3.114-7.62a1.626 1.626 0 0 0-3.031 0l-3.114 7.603-7.958.7c-1.45.12-2.043 2-.939 2.99l6.047 5.432-1.813 8.064c-.33 1.469 1.203 2.63 2.455 1.845l6.838-4.271z"
        /> */}
        <input
          type="hidden"
          name={`startRating[${surveyId}].rating`}
          value={this.state.rating}
        />
        <input
          type="hidden"
          name={`startRating[${surveyId}].rateTitle`}
          value={this.props.surveyName}
        />
      </div>
    );
  }
}

SurveyItem.propTypes = {
  starEmptyColor: PropTypes.string.isRequired,
  starRatedColor: PropTypes.string.isRequired,
  starHoverColor: PropTypes.string.isRequired,
  totalRate: PropTypes.func,
  surveyId: PropTypes.number.isRequired,
  surveyType: PropTypes.string.isRequired,
  surveyName: PropTypes.string.isRequired,
  sortPosition: PropTypes.number.isRequired,
};

// export default SurveyItem;
export default withStyles(styles)(SurveyItem);
