/**
 *
 * ReviewFormTabOnline
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { fade } from '@material-ui/core/styles/colorManipulator';

import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import TagInput from 'components/TagInput';
import SurveyList from 'components/SurveyList';

// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import LinkIcon from '../../images/ic-link-on@3x.png';
import WriteIcon from '../../images/ic-write@3x.png';
import StartTitle from '../../images/ic-star@3x.png';

// import RemoveIcon from '../../images/ic-close-photo@3x.png';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
  rowdiv: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingTop: 10,
  },
  rowdivSec: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
    marginTop: 12,
  },

  inputWrap: {
    backgroundColor: '#f4f4f4',
    // marginTop: 20,
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    // marginRight: theme.spacing.unit * 2,
    // marginLeft: theme.spacing.unit,
    borderRadius: 2,
    // background: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      // background: fade(theme.palette.common.white, 0.25),
    },
    '& $input': {
      // transition: theme.transitions.create('width'),
      // width: 200,
      '&:focus': {
        // width: 250,
      },
    },
    minHeight: 40,
    marginBottom: 16,
  },
  search: {
    width: theme.spacing.unit * 6,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2979ff',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${
      theme.spacing.unit
    }px ${theme.spacing.unit * 6}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
    height: 40,
  },
  divider: {
    width: '100%',
  },
  inputLabel: {
    marginTop: 12,
    marginBottom: 12,
    textAlign: 'left',
    color: '#7c7c7c',
  },
  linkIcon: {
    width: 22,
    height: 22,
    objectFit: 'contain',
  },
  buyWrap: {
    // paddingTop: 16,
    textAlign: 'left',
    color: '#333333',
    fontSize: 16,
    marginBottom: 19,
    // display: 'table',
  },
  iconShopping: {
    color: '#7c7c7c',
    lineHeight: 0,
    fontSize: 14,
  },
  iconWrite: {
    width: 24,
    height: 24,
    marginRight: 14,
  },
  cateText: {
    verticalAlign: 'middle',
    fontSize: 17,
  },
  inputReview: {
    minWidth: '100%',
    maxWidth: '100%',
    paddingTop: 20,
  },
});

const surveyCate = [
  {
    surveyId: 1,
    surveyName: '상품에 만족하시나요?',
    sortPosition: 0,
  },
  {
    surveyId: 2,
    surveyName: '배송속도는 어땠나요?',
    sortPosition: 1,
  },
  {
    surveyId: 3,
    surveyName: '문의 사항에 대해 신속하게 응답하나요?',
    sortPosition: 2,
  },
];
const surveyBuyType = [
  {
    surveyId: 4,
    surveyName: '상품에 만족하시나요?',
    sortPosition: 0,
  },
  {
    surveyId: 5,
    surveyName: '배송속도는 어땠나요?',
    sortPosition: 1,
  },
  {
    surveyId: 6,
    surveyName: '문의 사항에 대해 신속하게 응답하나요?',
    sortPosition: 2,
  },
];
/* eslint-disable react/prefer-stateless-function */
class ReviewFormTabOnline extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <div className={classes.rowdiv}>
          <Divider className={classes.divider} />
          <div className={classes.inputLabel}>상품명</div>
          <div className={classes.inputWrap}>
            <div className={classes.search}>
              <SearchIcon />
            </div>
            <input
              className={classes.input}
              placeholder="상품명을 입력해 주세요"
              name="productName"
            />
          </div>
          <Divider className={classes.divider} />
          <div className={classes.inputLabel}>구매처</div>
          <div className={classes.inputWrap}>
            <div className={classes.search}>
              <img src={LinkIcon} alt="link" className={classes.linkIcon} />
            </div>
            <input
              className={classes.input}
              placeholder="구매처를 입력해 주세요"
              name="buyLink"
            />
          </div>
        </div>

        <div className={classes.rowdivSec}>
          <div className={classes.buyWrap}>
            <img src={WriteIcon} alt="write" className={classes.iconWrite} />
            <span className={classes.cateText}>리뷰를 작성하세요.</span>
          </div>
          <Divider className={classes.divider} />
          <Input
            className={classes.inputReview}
            placeholder="사용 및 이용 후기 또는 도움이 되는 정보를 남겨주세요."
            disableUnderline="true"
            multiline
            name="content"
          />
        </div>
        <div className={classes.rowdivSec}>
          <div className={classes.buyWrap}>
            <img src={WriteIcon} alt="write" className={classes.iconWrite} />
            <span className={classes.cateText}>태그</span>
          </div>
          {/* <Divider className={classes.divider} /> */}
          <TagInput />
        </div>
        <div className={classes.rowdivSec}>
          <div className={classes.buyWrap}>
            <img src={StartTitle} alt="write" className={classes.iconWrite} />
            <span className={classes.cateText}>별평점</span>
          </div>

          <SurveyList
            surveyCate={surveyCate}
            surveyBuyType={surveyBuyType}
            // categoryId={this.state.categoryId}
          />
        </div>
        <input name="totalScore" value="0" type="hidden" />
        <input name="recommend" value="YES" type="hidden" />
      </div>
    );
  }
}

ReviewFormTabOnline.propTypes = {};

// export default ReviewFormTabOnline;
export default withStyles(styles)(ReviewFormTabOnline);
