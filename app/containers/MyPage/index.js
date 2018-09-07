/**
 *
 * MyPage
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
/* material-ui core */
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
/* material-ui icon */
/* containers */
import EmailAuthPop from 'containers/EmailAuthPop';
/* components */
import AlertDialog from 'components/popups/AlertDialog';
import Button from 'components/Button';
import Header from 'components/Header';
import ModifyPop from 'components/popups/ModifyPop';
import SelfieControl from 'components/SelfieControl';
import TabList from 'components/TabList';
import ErrorMessages from 'components/ErrorMessages';
/* image */
import avatarDefault from 'images/ic-avatar.png';
/* ref */
import { FormattedMessage, FormattedNumber } from 'react-intl';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import * as selectors from './selectors';

import axios from 'axios';

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
    right: '0px',
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
    textAlign: 'right',
    borderRadius: '10px',
    backgroundColor: '#6a88a5',
    color: '#ffffff',
    paddingRight: '8px',
    border: 'solid 1px rgb(255, 255, 255)',
  },
  userCoin: {
    color: '#1591ff',
    fontWeight: 800,
    fontSize: '18px',
    fontFamily: 'SFProText',
  },
  userNickName: {
    // fontWeight: 800,
    fontSize: '18px',
    fontFamily: 'SFProText',
  },
  makeWalletLink: {
    marginTop: '10px',
    padding: '8px 45px 8px 45px',
    border: 'solid 1px #8fa6bb',
    color: '#8fa6bb',
    fontSize: '13px',
    lineHeight: '1.8em',
    textAlign: 'center',
  },
  verticalCol: {
    height: '100%',
    paddingTop: '15px',
  },
  verticalDivider: {
    backgroundColor: '#aaaaaa',
    width: '1px',
    height: '35%',
  },
  nickNameButtion: {
    width: '100%',
    borderRadius: 'unset',
  },
  lcbText: {
    fontWeight: 800,
    fontSize: '13px',
    fontFamily: 'SFProText',
    // marginLeft: 5,
    marginRight: 3,
  },
};

/* eslint-disable react/prefer-stateless-function */
export class MyPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { tabLabel: '리뷰', type: 'REVIEW' },
        { tabLabel: '보상 내역', type: 'REWARD' },
      ],
      pageLoading: false,
      makeWalletPopOpen: false,
      emailSuccessPop: false,
      nickChangePop: false,
      totalLiterCube: 0,
      errorMessage: false,
    };

    this.handleCreateWallet = this.handleCreateWallet.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNickChange = this.handleNickChange.bind(this);
    this.openEmailSuccesPop = this.openEmailSuccesPop.bind(this);

    this.selfie = React.createRef();
  }

  // handleChange = e => {
  //   this.setState({
  //     // userId: e.target.value,
  //   });
  // };

  requestAjx = (method, sendType, requestURL, data, options) => {
    const self = this;
    axios({
      method: sendType,
      headers: options,
      url: requestURL,
      data: data,
    })
      .then(function(response) {
        if (method == 'getClaim') {
          // console.log(self);
          self.props.selectAcquire();
          self.props.selectMyRewards();

          // console.log(']] **)*)*)*)*) getClaim Response (*(*(*(*(*(*(* [[');
          // console.log(response);

          self.setState({
            totalLiterCube: response.data.totalLiterCube,
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleRewardClaim = () => {
    // console.log('Claim');
    const requestURL = `${process.env.API_URL}/reward/claim`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    const options = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: token,
    };
    const data = {};
    this.requestAjx('getClaim', 'GET', requestURL, data, options);
  };

  handleSubmit = e => {
    const { resendEmailAuth } = this.props;
    this.setState({
      makeWalletPopOpen: false,
      // havingWallet: true,
    });
    resendEmailAuth();
    console.log('ok');
    e.preventDefault();
  };

  openEmailSuccesPop = e => {
    this.setState({
      makeWalletPopOpen: false,
      emailSuccessPop: true,
      // havingWallet: true,
    });
    console.log('email ok');
    e.preventDefault();
  };

  handleInitInfo = () => {
    // PrivateRoute
    // console.log("Init");
    // const requestURL = `${process.env.API_URL}/user/authInfo`;
    // const accessToken = localStorage.getItem('accessToken');
    // const token = `Bearer ${accessToken}`;
    // const options = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Authorization': token,
    // };
    // const data = {};
    // this.requestAjx('getClaim', 'GET', requestURL, data, options);
  };

  handleCreateWallet = () => {
    console.log('makeWallet');
    this.setState({
      makeWalletPopOpen: true,
    });
  };

  handleClose = () => {
    console.log('close');
    this.setState({
      makeWalletPopOpen: false,
      emailSuccessPop: false,
      nickChangePop: false,
    });
  };

  handleNickChange = userNickName => {
    const { changeUserNick } = this.props;
    changeUserNick(userNickName);
  };

  openUserNickChange = () => {
    console.log('nick change');
    this.setState({
      nickChangePop: true,
    });
  };

  tabListHandler = type => {
    const {
      selectMyReviews,
      selectMyRewards,
      selectAcquire,
      selectEstimated,
    } = this.props;
    console.log(type);
    switch (type) {
      case 0:
        console.log('REVIEW call');
        selectMyReviews();
        break;
      case 1:
        console.log('REWARD call');
        selectAcquire();
        selectMyRewards();
        selectEstimated();
        break;
      default:
        selectMyReviews();
        console.log('default');
    }
  };

  componentWillMount() {
    // console.log('componentWillMount');
    const { selectUserData } = this.props;
    const { pageLoading } = this.state;
    console.log(`pageLoading::: ${pageLoading}`);
    this.setState({
      pageLoading: true,
    });
    selectUserData();
  }
  componentDidMount() {
    this.setState({
      totalLiterCube:
        Boolean(localStorage.getItem('literCubeKrw')) &&
        localStorage.getItem('literCubeKrw') != 'null'
          ? localStorage.getItem('literCubeKrw')
          : 0,
    });
  }
  componentWillReceiveProps(nextProps) {
    // console.log(`componentWillReceiveProps`);
    // console.log(`this --- ${this.props.myPages.userData.id}`);
    // console.log(`next --- ${nextProps.myPages.userData.id}`);

    const { selectFollowerCount, selectFollowingCount } = this.props;
    const { pageLoading } = this.state;
    // console.log(
    //   `pageLoading::: ${pageLoading}=== ${nextProps.myPages.userData.id}`,
    // );

    if (nextProps.myPages.userData.id) {
      if (pageLoading) {
        selectFollowerCount(nextProps.myPages.userData.id);
        selectFollowingCount(nextProps.myPages.userData.id);
        this.setState({
          pageLoading: false,
        });
      }
    }
    if (nextProps.myPages.error !== this.props.myPages.error) {
      if (nextProps.myPages.error !== false) {
        // console.log(nextProps.myPages.error);
        const msg = ErrorMessages(nextProps.myPages.error);
        // console.log(msg);
        this.setState({ errorMessage: msg });
      } else {
        this.setState({
          nickChangePop: false,
        });
      }
    }
  }

  navigateFollower = () => {
    const { myPages } = this.props;
    console.log('Follower');
    this.props.history.push(`/follow/${myPages.userData.id}`);
  };

  navigateFollowing = () => {
    const { myPages } = this.props;
    console.log('Following');
    this.props.history.push(`/following/${myPages.userData.id}`);
    // this.props.history.pushState('/following');
  };

  render() {
    const { classes, myPages } = this.props;
    const { errorMessage } = this.state;
    const { action } = this.props.history;

    if (action === 'PUSH') {
      window.scrollTo(0, 0);
    }
    // const literCoin =
    //   myPages.userData.literCoin > 0 ? myPages.userData.literCoin : 0;
    const literCoin = Number(
      Boolean(this.state.totalLiterCube) ? this.state.totalLiterCube : 0,
    );

    return (
      <div>
        <SelfieControl
          changeSelfie={click => (this.changeSelfie = click)}
          callbackFunc={this.props.selectUserData}
        />
        <div className={classes.container}>
          <Header
            // headerTitle={<FormattedMessage {...messages.header} />}
            transparency={true}
          />
        </div>
        <div className={classes.panel}>
          <div className={classes.row}>
            <div className={classes.avatarDiv}>
              <Avatar
                alt=""
                src={
                  myPages.userData.profileImageSmallUrl
                    ? myPages.userData.profileImageSmallUrl
                    : avatarDefault
                }
                className={classNames(classes.avatar, classes.bigAvatar)}
                onClick={() => this.changeSelfie()}
              />
              <span className={classes.levelTagInner}>Lv 1</span>
            </div>
          </div>
          <div className={classes.row}>
            <IconButton
              color="inherit"
              aria-label="nickName"
              classes={{
                root: classes.nickNameButtion,
              }}
              onClick={() => {
                this.openUserNickChange();
              }}
            >
              <span className={classes.userNickName}>
                {myPages.userData.userNickName}
              </span>
            </IconButton>
          </div>
          <div className={classes.row}>
            {localStorage.getItem('hasWallet') === 'true' ? (
              <Typography variant="headline" className={classes.userCoin}>
                <span className={classes.lcbText}>₩</span>
                <FormattedNumber value={literCoin} />
                {/* <span className={classes.lcbText}>LCB</span> */}
              </Typography>
            ) : (
              <Button
                className={classes.makeWalletLink}
                onClick={this.handleCreateWallet}
              >
                {<FormattedMessage {...messages.createWallet} />}
                <br />
                {<FormattedMessage {...messages.requiredWalletMsg} />}
              </Button>
            )}
          </div>
          <div className={classNames(classes.row, classes.panelInfo)}>
            <div className={classes.col}>
              <div className={classes.row}>{myPages.followerCount}</div>
              <div className={classes.row} onClick={this.navigateFollower}>
                팔로워
              </div>
            </div>
            <div className={classes.verticalCol}>
              <div className={classes.verticalDivider} />
            </div>
            <div className={classes.col}>
              <div className={classes.row}>{myPages.followingCount}</div>
              <div className={classes.row} onClick={this.navigateFollowing}>
                팔로잉
              </div>
            </div>
          </div>
        </div>
        <TabList
          tabs={this.state.tabs}
          data={myPages}
          tabListHandler={this.tabListHandler}
          handleRewardClaim={this.handleRewardClaim}
        />
        <AlertDialog
          onClose={this.handleClose}
          open={this.state.makeWalletPopOpen}
          submitHandler={this.openEmailSuccesPop}
          title={<FormattedMessage {...messages.emailAuthTitle} />}
          msg={<FormattedMessage {...messages.emailAuthMsg} />}
        />
        <EmailAuthPop
          onClose={this.handleClose}
          open={this.state.emailSuccessPop}
          submitHandler={this.handleSubmit}
        />
        <ModifyPop
          defaultValue={localStorage.getItem('userNickName')}
          onClose={this.handleClose}
          open={this.state.nickChangePop}
          submitHandler={this.handleNickChange}
          errorMsg={errorMessage}
        />
      </div>
    );
  }
}

MyPage.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectMyReviews: PropTypes.func,
  selectMyRewards: PropTypes.func,
  selectAcquire: PropTypes.func,
  selectFollowerCount: PropTypes.func,
  selectFollowingCount: PropTypes.func,
  selectUserData: PropTypes.func,
  changeUserNick: PropTypes.func,
  myPages: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  global: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  follwerCount: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  follwingCount: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  myPages: selectors.makeSelectMyPage(),
  global: selectors.makeSelectGlobal(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    selectMyReviews: () => {
      dispatch(actions.myReviewsAction());
    },
    selectMyRewards: () => {
      dispatch(actions.myRewardsAction());
    },
    selectAcquire: () => {
      dispatch(actions.myRewardAcquireAction());
    },
    selectEstimated: () => {
      dispatch(actions.myRewardEstimatedAction());
    },
    selectFollowerCount: userId => {
      // console.log(`load My Review - follower Count call!!! --- ${userId}`);
      dispatch(actions.loadFollowerCountAction(userId));
    },
    selectFollowingCount: userId => {
      // console.log(`load My Review - following Count call!!! --- ${userId}`);
      dispatch(actions.loadFollowingCountAction(userId));
    },
    selectUserData: () => {
      console.log('selectUserData');
      dispatch(actions.loadUserData());
    },
    changeUserNick: userNickName => {
      // console.log(`load User Nick Name --  call!!! --- ${userNickName}`);
      // console.log(userNickName);
      dispatch(actions.changeNickNameAction(userNickName));
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
