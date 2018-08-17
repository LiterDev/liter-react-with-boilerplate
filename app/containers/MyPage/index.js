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
/* image */
import avatarDefault from 'images/ic-avatar.png';
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import * as selectors from './selectors';

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
  },
  userCoin: {
    color: '#1591ff',
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
      makeWalletPopOpen: false,
      emailSuccessPop: false,
      nickChangePop: false,
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
    this.setState({
      nickChangePop: false,
    });
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
    selectUserData();
  }
  componentDidMount() {
    // console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    // console.log(`componentWillReceiveProps`);
    // console.log(`this --- ${this.props.myPages.userData.id}`);
    // console.log(`next --- ${nextProps.myPages.userData.id}`);
    const { selectFollowerCount, selectFollowingCount } = this.props;
    if (this.props.myPages.userData.id !== nextProps.myPages.userData.id) {
      selectFollowerCount(nextProps.myPages.userData.id);
      selectFollowingCount(nextProps.myPages.userData.id);
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

    const literCoin =
      myPages.userData.literCoin > 0 ? myPages.userData.literCoin : 0;

    return (
      <div>
        <SelfieControl
          changeSelfie={click => (this.changeSelfie = click)}
          callbackFunc={this.props.selectUserData}
        />
        <div className={classes.container}>
          <Header headerTitle={<FormattedMessage {...messages.header} />} />
        </div>
        <div className={classes.panel}>
          <div className={classes.row}>
            <div className={classes.avatarDiv}>
              <Avatar
                alt=""
                src={
                  myPages.userData.profileImageUrl
                    ? myPages.userData.profileImageUrl
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
              aria-label="Close"
              className={classes.close}
              onClick={() => {
                this.openUserNickChange();
              }}
            >
              {localStorage.getItem('userNickName')}
            </IconButton>
          </div>
          <div className={classes.row}>
            {localStorage.getItem('hasWallet') === 'true' ? (
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
                {literCoin}
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
