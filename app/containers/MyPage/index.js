/**
 *
 * MyPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';

// import styled from 'styled-components';
// import H2 from 'components/H2';
import Header from 'components/Header';
import Tabs from 'components/Tabs';
// import AtPrefix from './AtPrefix';
// import Form from './Form';
// import Section from './Section';
import messages from './messages';
// import defaultMessage from '../App/messages';
// import homeMessage from '../HomePage/messages';

import { mypageAction } from './actions';
import { makeSelectMyPage } from './selectors';

import reducer from './reducer';
import saga from './saga';

// import messages from './messages';

// import Panel from './Panel';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
  },
  panel: {
    flexGrow: 1,
    backgroundColor: '#fbfbfb',
  },
  panelInfo: {
    marginTop: 20,
    height: 88,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  col: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  avatarDiv: {
    position: 'relative',
  },
  levelTagInner: {
    position: 'absolute',
    bottom: '10px',
    width: '34px',
    height: '18px',
    fontFamily: 'SFProText',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '-0.3px',
    textAlign: 'rigth',
    borderRadius: '10px',
    backgroundColor: '#6a88a5',
    color: '#ffffff',
    zIndex: '9999',
  },
};

/* eslint-disable react/prefer-stateless-function */
export class MyPage extends React.PureComponent {
  state = {
    // userId: '',
    tabData: [
      {
        tabLabel: '리뷰',
        hit: 10,
        list: {
          imgUrl: 'aaa,jpg',
          userName: 'test1',
          update: '111',
          title: '켬 김에 왕까지!! 플레이스테이션4 패드 놓을 수 없는 순간!',
          ingBoolean: true,
          exportsCnt: 22,
          starAvg: 3,
        },
      },
      {
        tabLabel: '보상 내역',
        hit: 20,
        list: {
          imgUrl: 'bbb.jpg',
          userName: 'test2',
          update: '111',
          title:
            '초보 커플을 위한, 플레이스테이션4 PS4 2인용 게임 낵(KNACK) 1, 2 모든 연령을 위한 공략법',
          ingBoolean: 662.11,
          exportsCnt: 433,
          starAvg: 4,
        },
      },
    ],
  };
  // handleChange = e => {
  //   this.setState({
  //     // userId: e.target.value,
  //   });
  // };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      // userId: '',
    });
  };
  render() {
    const { classes } = this.props;
    const photoPath =
      'http://www.bigjungbo.com/xe/files/attach/images/163/825/047/578a17e481940d85a81c5e3c7f184c80.jpg';
    return (
      <div>
        <div className={classes.container}>
          <Header headerTitle={<FormattedMessage {...messages.header} />} />
        </div>
        <div className={classes.panel}>
          <div className={classes.row}>
            <div className={classes.avatarDiv}>
              <Avatar
                alt="Adelle Charles"
                src={photoPath}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <span className={classes.levelTagInner}>Lv 1</span>
            </div>
          </div>
          <div className={classes.row}>numero</div>
          <div className={classes.row}>
            <Typography variant="headline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="21"
                viewBox="0 0 10 21"
              >
                <g fill="none" fillRule="evenodd">
                  <path fill="#FFF" d="M-155-201h375v667h-375z" />
                  <path
                    fill="#1591FF"
                    fillRule="nonzero"
                    stroke="#1591FF"
                    strokeWidth=".2"
                    d="M7.886 6.502l.114.1v.972l-.034.072-.142.08A3.67 3.67 0 0 0 4.776 9.37l3.108.048.116.106-.059 1.022-.12.096-3.388-.042c-.018.139-.027.26-.027.376l.001.075v.028c.003.104.003.174-.002.233l3.48.05.115.105-.059 1.023-.12.096-3-.067c.596 1.045 1.747 1.71 3.066 1.757l.113.107-.059 1.022-.117.096c-2.01 0-3.798-1.186-4.44-2.918l-1.272-.048L2 12.428l.059-1.022.125-.096.861.048a4.1 4.1 0 0 1-.018-.383c0-.14.01-.25.037-.341l-.953-.043L2 10.485l.059-1.023.121-.096 1.153.033c.704-1.78 2.504-2.948 4.553-2.897z"
                  />
                </g>
              </svg>
              662.11
            </Typography>
          </div>
          <div className={classNames(classes.row, classes.panelInfo)}>
            <div className={classes.col}>
              <div className={classes.row}>144</div>
              <div className={classes.row}>팔로워</div>
            </div>
            <div className={classes.col}>
              <div className={classes.row}>654</div>
              <div className={classes.row}>팔로잉</div>
            </div>
          </div>
        </div>
        <Tabs tabData={this.state.tabData} />
        {/* <Tabs>
          <Tab label="리뷰" />
          <Tab label="보상 내역" />
        </Tabs>
        <div>
          <p>
            <FormattedMessage {...defaultMessage.startProjectHeader} />
          </p>
          <Section>
            <H2>
              <FormattedMessage {...homeMessage.trymeHeader} />
            </H2>
            <form onSubmit={this.props.onSubmitForm}>
              <FormattedMessage {...homeMessage.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...homeMessage.trymeAtPrefix} />
              </AtPrefix>
              <Input
                name="userId"
                placeholder="이름"
                value={this.state.userId}
                onChange={this.handleChange}
                // value={this.props.username}
                // onChange={this.props.onChangeUsername}
              />
              <H2>
                <div>{this.state.userId}</div>
              </H2>
              <Button type="submit"> 로딩 </Button>
            </form>

            <RewardingList>
              보상 진행중인 리뷰가 없습니다.
              <RewardingListItem />
            </RewardingList>
          </Section>
        </div> */}
      </div>
    );
  }
}
/** Panel
   Tab
   LiterCoin
   rewarding review
   <LikeCount>
* */

MyPage.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // rewardsReviews: PropTypes.oneOfType([PropTypes.array(), PropTypes.bool()]),
  onSubmitForm: PropTypes.func,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  rewardsReviews: makeSelectMyPage(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),

    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      const data = new FormData(evt.target);
      console.log('submit');
      dispatch(mypageAction(data));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'myPage', reducer });
const withSaga = injectSaga({ key: 'myPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(MyPage);
