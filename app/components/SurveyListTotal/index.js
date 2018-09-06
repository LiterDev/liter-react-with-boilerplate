/**
 *
 * SurveyList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';
import SurveyItem from 'components/SurveyItem';
import SurveyItemTotal from 'components/SurveyItemTotal';

import Divider from '@material-ui/core/Divider';
import SurveyData from '../../survey.json';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
  surveyWrap: {
    textAlign: 'center',
    color: '#7c7c7c',
    marginBottom: 19,
    // marginTop: 30,
  },
  surveyTitle: {
    marginBottom: 19,
  },
  divider: {
    marginBottom: 30,
  },
});
/* eslint-disable react/prefer-stateless-function */
class SurveyList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // totalRating: 0,
      totalRatingArry: [],
      totalCount: 0,
      surveyCate: [],
      surveyBuyType: [],
      category: -1,
      buyType: -1,
      // this.props.surveyCate.length + this.props.surveyBuyType.length,
    };
    this.totalRate = this.totalRate.bind(this);
  }
  totalRate = (rating, surveyId, surveyType) => {
    // console.log(rating);
    // console.log(surveyId);

    const totalRatingArryTmp = [...this.state.totalRatingArry];
    // console.log(totalRatingArryTmp.includes(surveyId));
    if (totalRatingArryTmp.length > 0) {
      let findCount = 0;
      for (let i = 0; i < totalRatingArryTmp.length; i += 1) {
        // console.log(totalRatingArryTmp[i].surveyId);
        if (totalRatingArryTmp[i].surveyId === surveyId) {
          totalRatingArryTmp[i].rating = rating;
          findCount += 1;
        }
      }
      if (findCount === 0) {
        totalRatingArryTmp.push({
          surveyId,
          rating,
          surveyType,
        });
      }
    } else {
      totalRatingArryTmp.push({
        surveyId,
        rating,
        surveyType,
      });
    }
    // console.log(totalRatingArryTmp);
    // console.log(totalCount);
    this.setState({
      // totalCount: totalCount,
      totalRatingArry: totalRatingArryTmp,
    });
    // console.log(this.state.totalRatingArry);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.category);
    console.log(prevState.category);
    if (nextProps.category !== prevState.category) {
      if (prevState.totalRatingArry.length > 0) {
        if (nextProps.category > -1) {
          const findRemoveId = [];
          // const totalRatingArry = prevState.totalRatingArry;
          const totalRatingArryCopy = [...prevState.totalRatingArry];
          console.log(totalRatingArryCopy);
          if (totalRatingArryCopy.length > 0) {
            let i = totalRatingArryCopy.length;
            while (i--) {
              if (totalRatingArryCopy[i].surveyType === 'CATEGORY') {
                //     // findRemoveId.push(i);
                totalRatingArryCopy.splice(i, 1);
              }
            }
          }
          return {
            totalRatingArry: totalRatingArryCopy,
            category: nextProps.category,
          };
        }
        return {
          category: nextProps.category,
        };
      }
      return {
        category: nextProps.category,
      };
    }

    if (nextProps.buyType !== prevState.buyType) {
      if (prevState.totalRatingArry.length > 0) {
        if (nextProps.buyType > -1) {
          const totalRatingArryCopy = [...prevState.totalRatingArry];
          // console.log(totalRatingArryCopy);
          if (totalRatingArryCopy.length > 0) {
            let i = totalRatingArryCopy.length;
            while (i--) {
              if (totalRatingArryCopy[i].surveyType === 'STORE') {
                //     // findRemoveId.push(i);
                totalRatingArryCopy.splice(i, 1);
              }
            }
          }
          return {
            totalRatingArry: totalRatingArryCopy,
            buyType: nextProps.buyType,
          };
        }
        return {
          buyType: nextProps.buyType,
        };
      }
      return {
        buyType: nextProps.buyType,
      };
    }
    return null;
  }
  componentDidMount = () => {};
  render() {
    const { classes, category, buyType } = this.props;
    let surveyCate = [];
    if (category > -1) {
      surveyCate = SurveyData.surveyCate[category];
    }
    let surveyBuyType = [];
    if (buyType > -1) {
      surveyBuyType = SurveyData.surveyBuyType[buyType];
    }
    // console.log(surveyCate);
    // console.log(surveyBuyType);
    let totalCount = 0;
    if (Boolean(surveyCate) && Boolean(surveyBuyType)) {
      totalCount = surveyCate.length + surveyBuyType.length;
    } else if (Boolean(surveyCate) && !Boolean(surveyBuyType)) {
      totalCount = surveyCate.length;
    } else if (!Boolean(surveyCate) && Boolean(surveyBuyType)) {
      totalCount = surveyBuyType.length;
    }

    return (
      <div className={classes.root}>
        {/* <FormattedMessage {...messages.header} /> */}
        {surveyCate &&
          surveyCate.map((item, index) => (
            <div key={item.surveyId} className={classes.surveyWrap}>
              <div className={classes.surveyTitle}>{item.surveyName}</div>
              <SurveyItem
                starEmptyColor="rgb(184, 237, 226)"
                starRatedColor="rgb(27, 220, 177)"
                starHoverColor="rgb(27, 220, 177)"
                totalRate={this.totalRate}
                surveyId={item.surveyId}
                surveyType="CATEGORY"
                surveyName={item.surveyName}
                sortPosition={index}
              />
            </div>
          ))}
        {surveyBuyType && <Divider className={classes.divider} />}
        {surveyBuyType &&
          surveyBuyType.map((item, index) => (
            <div key={item.surveyId} className={classes.surveyWrap}>
              <div className={classes.surveyTitle}>{item.surveyName}</div>
              <SurveyItem
                starEmptyColor="rgb(254, 226, 188)"
                starRatedColor="rgb(255, 189, 96)"
                starHoverColor="rgb(255, 189, 96)"
                totalRate={this.totalRate}
                surveyId={item.surveyId}
                surveyType="STORE"
                surveyName={item.surveyName}
                sortPosition={index}
              />
            </div>
          ))}
        <Divider className={classes.divider} />

        <div className={classes.surveyWrap}>
          {this.state.totalCount > 0 ? (
            <div className={classes.surveyTitle}>총평가 </div>
          ) : (
            ''
          )}

          <span>
            <SurveyItemTotal
              starEmptyColor="rgb(220, 235, 247)"
              starRatedColor="rgb(21, 145, 255)"
              starHoverColor="rgb(21, 145, 255)"
              totalCount={totalCount}
              totalRatingArry={this.state.totalRatingArry}
              // surveyId={0}
            />
          </span>
        </div>
      </div>
    );
  }
}

SurveyList.propTypes = {
  category: PropTypes.any.isRequired,
  buyType: PropTypes.any.isRequired,
};

// export default SurveyList;
export default withStyles(styles)(SurveyList);
