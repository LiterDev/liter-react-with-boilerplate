/**
 *
 * SurveyView
 *
 */
/* react ref */
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
/* material-ui core */
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import StarRatings from 'react-star-ratings';
/* material-ui icon */
/* containers */
/* components */
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  line: {
    position: 'relative',
    lineHeight: '32px',
    width: '100%',
  },
  contentsBox: {
    display: 'inline-block',
    fontSize: '13px',
    color: '#7c7c7c',
    fontFamily: 'Apple SD Gothic Neo',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    width: '60%',
  },
  ratingBox: {
    position: 'absolute',
    right: '0px',
  },
  scoreBox: {
    fontfamily: 'SFProDisplay',
    fontSize: 14,
    fontWeight: 500,
    color: '#333333',
    paddingRight: '10px',
  },
  // starBox: {
  //   lineHeight: '32px',
  // },
  divider: {
    marginTop: '10px',
    marginBottom: '10px',
  },
});

/* eslint-disable react/prefer-stateless-function */
class SurveyView extends React.PureComponent {
  render() {
    const { classes, surveys } = this.props;
    let categorySurveyArr = false;
    if (surveys !== false) {
      const surveyArr = Object.values(surveys);
      categorySurveyArr = surveyArr.filter(
        item => item.reviewSurveyType === 'CATEGORY',
      );
      const storeSurveyArr = surveyArr.filter(
        item => item.reviewSurveyType === 'STORE',
      );
      return (
        <Paper>
          <Divider className={classes.divider} />
          {categorySurveyArr.map(survey => {
            const surveyScore = Number(survey.score).toFixed(1);
            return (
              <div className={classes.line} key={survey.id}>
                <div className={classes.contentsBox}>
                  {survey.surveyContent}
                </div>
                <span className={classes.ratingBox}>
                  <span className={classes.scoreBox}> {surveyScore}</span>
                  <span>
                    <StarRatings
                      rating={survey.score}
                      changeRating={false}
                      numberOfStars={5}
                      starSpacing="0"
                      name="rating"
                      starDimension="20px"
                      starEmptyColor="rgb(184, 237, 226)"
                      starRatedColor="rgb(27, 220, 177)"
                      starHoverColor="rgb(27, 220, 177)"
                      svgIconPath="M19.77 29.503l6.838 4.288c1.252.786 2.784-.376 2.455-1.845l-1.813-8.063 6.047-5.433c1.104-.99.51-2.87-.94-2.99l-7.957-.7-3.114-7.62a1.626 1.626 0 0 0-3.031 0l-3.114 7.603-7.958.7c-1.45.12-2.043 2-.939 2.99l6.047 5.432-1.813 8.064c-.33 1.469 1.203 2.63 2.455 1.845l6.838-4.271z"
                    />
                  </span>
                </span>
              </div>
            );
          })}
          <Divider className={classes.divider} />
          {storeSurveyArr.map(survey => {
            const surveyScore = Number(survey.score).toFixed(1);
            return (
              <div className={classes.line} key={survey.id}>
                <span className={classes.contentsBox}>
                  {survey.surveyContent}
                </span>
                <span className={classes.ratingBox}>
                  <span className={classes.scoreBox}> {surveyScore}</span>
                  <span>
                    <StarRatings
                      rating={survey.score}
                      changeRating={false}
                      numberOfStars={5}
                      starSpacing="0"
                      name="rating"
                      starDimension="20px"
                      starEmptyColor="rgb(254, 226, 188)"
                      starRatedColor="rgb(255, 189, 96)"
                      starHoverColor="rgb(255, 189, 96)"
                      svgIconPath="M19.77 29.503l6.838 4.288c1.252.786 2.784-.376 2.455-1.845l-1.813-8.063 6.047-5.433c1.104-.99.51-2.87-.94-2.99l-7.957-.7-3.114-7.62a1.626 1.626 0 0 0-3.031 0l-3.114 7.603-7.958.7c-1.45.12-2.043 2-.939 2.99l6.047 5.432-1.813 8.064c-.33 1.469 1.203 2.63 2.455 1.845l6.838-4.271z"
                    />
                  </span>
                </span>
              </div>
            );
          })}
        </Paper>
      );
    }
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

SurveyView.propTypes = {};

export default withStyles(styles)(SurveyView);
