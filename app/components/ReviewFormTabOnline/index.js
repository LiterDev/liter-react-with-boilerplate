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
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import TabLabel from 'components/TabLabel';
import Tab from '@material-ui/core/Tab';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import LinkIcon from '../../images/ic-link-on@3x.png';
import WriteIcon from '../../images/ic-write@3x.png';
import StartTitle from '../../images/ic-star@3x.png';
import CheckIcon from '../../images/ic-repurchase@3x.png';
import SurveyData from '../../survey.json';
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
  tabRoot: {
    // minHeight: 60,
    paddingTop: 10,
    width: '40%',
    fontSize: '1.5rem',
  },
  tabPaper: {
    heght: 20,
    marginTop: 10,
  },
});

/* eslint-disable react/prefer-stateless-function */
class ReviewFormTabOnline extends React.PureComponent {
  state = {
    value: false,
  };

  handleChange = (event, value) => {
    this.setState({
      value,
    });
  };
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
            disableUnderline
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

          {this.props.category > 0 ? (
            <SurveyList
              surveyCate={SurveyData.surveyCate[this.props.category]}
              surveyBuyType={SurveyData.surveyBuyType[1]}
            />
          ) : (
            <SurveyList
              surveyCate={SurveyData.surveyCate[99999]}
              surveyBuyType={SurveyData.surveyBuyType[1]}
            />
          )}
          {/* <SurveyList
            surveyCate={surveyCate}
            surveyBuyType={surveyBuyType}
            // categoryId={this.state.categoryId}
          /> */}
        </div>
        <div className={classes.rowdivSec}>
          <div className={classes.buyWrap}>
            <img src={CheckIcon} alt="check" className={classes.iconWrite} />
            <span className={classes.cateText}>재구매를 하겠습니까?</span>
          </div>
          <Divider className={classes.divider} />
          <Paper className={classes.tabPaper}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="secondary"
              centered
            >
              <Tab
                label={<TabLabel>예</TabLabel>}
                classes={{
                  root: classes.tabRoot,
                  labelIcon: classes.tabIcon,
                }}
              />
              <Tab
                label={<TabLabel>아니오</TabLabel>}
                classes={{
                  root: classes.tabRoot,
                  labelIcon: classes.tabIcon,
                }}
              />
            </Tabs>
          </Paper>
        </div>
        <input
          name="recommend"
          value={this.state.value === 0 ? 'YES' : 'NO'}
          type="hidden"
        />
        <input type="hidden" name="store" value="ONLINE" />
      </div>
    );
  }
}

ReviewFormTabOnline.propTypes = {};

// export default ReviewFormTabOnline;
export default withStyles(styles)(ReviewFormTabOnline);
