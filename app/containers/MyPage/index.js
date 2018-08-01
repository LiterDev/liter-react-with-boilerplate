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
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';

import Header from 'components/Header';
import Tabs from 'components/Tabs';
import messages from './messages';

import { myPageAction } from './actions';
import { makeSelectMyPage } from './selectors';

import reducer from './reducer';
import saga, { mypage } from './saga';

import { makeSelectSignInSuccess } from '../SignIn/selectors';

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
  userCoin: {
    color: '#1591ff',
  },
};

/* eslint-disable react/prefer-stateless-function */
export class MyPage extends React.PureComponent {
  state = {
    userData: {
      userId: '1',
      photoPath:
        'http://www.bigjungbo.com/xe/files/attach/images/163/825/047/578a17e481940d85a81c5e3c7f184c80.jpg',
    },
    tabs: [
      { tabLabel: '리뷰', type: 'REVIEW' },
      { tabLabel: '보상 내역', type: 'REWARD' },
    ],
    // data: [
      // // {
      //     {
      //       index: 1,
      //       imgUrl:
      //         'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426',
      //       userName: 'test1',
      //       update: '방금전',
      //       title: '켬 김에 왕까지!! 플레이스테이션4 패드 놓을 수 없는 순간!',
      //       ingBoolean: true,
      //       exportsCnt: 22,
      //       starAvg: '3.0',
      //     },
      //     {
      //       index: 2,
      //       imgUrl:
      //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxadr9ykSPoaet-5e7-_YZtueYaRJSvggWtEShh2EJyAjAf5-D',
      //       userName: 'test1',
      //       update: '5분전',
      //       title:
      //         'Test. 켬 김에 왕까지!! 플레이스테이션4 패드 놓을 수 없는 순간!',
      //       ingBoolean: true,
      //       exportsCnt: 22,
      //       starAvg: '3.0',
      //     },
      //     {
      //       index: 3,
      //       imgUrl:
      //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84hMKGYnLjbYASltpjWRIIumEGrwWPmkDFVkkr4hppCPekUIY',
      //       userName: 'test2',
      //       update: '2018-07-27',
      //       title:
      //         '초보 커플을 위한, 플레이스테이션4 PS4 2인용 게임 낵(KNACK) 1, 2 모든 연령을 위한 공략법',
      //       ingBoolean: false,
      //       exportsCnt: 433,
      //       starAvg: '4.0',
      //     },
        // ],
      // },
      // {
          // {
          //   date: '2018-07-18 13:10:23',
          //   coin: '12.00',
          //   sum: '217.00',
          // },
          // {
          //   date: '2018-07-18 13:10:23',
          //   coin: '3.0',
          //   sum: '205.0',
          // },
          // {
          //   date: '2018-07-18 13:10:23',
          //   coin: '100.0',
          //   sum: '202.0',
          // },
          // {
          //   date: '2018-07-18 13:10:23',
          //   coin: '100.0',
          //   sum: '102.0',
          // },
          // {
          //   date: '2018-07-18 13:10:23',
          //   coin: '1.00',
          //   sum: '2.00',
          // },
          // {
          //   date: '2018-07-18 13:10:23',
          //   coin: '1.00',
          //   sum: '1.00',
          // },
        // ],
      // },
    // ],
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

  componentDidMount() {
    const { selectMyReview, signinSuccess } = this.props;
    selectMyReview(signinSuccess);
    // const newStateArray = { ...this.state.tabData };
    // newStateArray.list = selectMyReview(signinSuccess);
    // this.setState(newStateArray);
  }

  render() {
    const { classes, signinSuccess, myPages } = this.props;
    const { userData } = this.state;

    // signIn.signinSuccess.username

    return (
      <div>
        <div className={classes.container}>
          <Header headerTitle={<FormattedMessage {...messages.header} />} />
        </div>
        <div className={classes.panel}>
          <div className={classes.row}>
            <div className={classes.avatarDiv}>
              <Avatar
                alt=""
                src={userData.photoPath}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <span className={classes.levelTagInner}>Lv 1</span>
            </div>
          </div>
          <div className={classes.row}>{signinSuccess.username}</div>
          <div className={classes.row}>
            <Typography variant="headline" className={classes.userCoin}>
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
        <Tabs tabs={this.state.tabs} data={myPages} />
      </div>
    );
  }
}

MyPage.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // rewardsReviews: PropTypes.oneOfType([PropTypes.array(), PropTypes.bool()]),
  selectMyReview: PropTypes.func,
  myPages: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  myPages: makeSelectMyPage(),
  signinSuccess: makeSelectSignInSuccess(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  console.log('mapDispatch');
  return {
    selectMyReview: data => {
      console.log(`select My Review call!!!${data.username}`);
      dispatch(myPageAction(data));
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
