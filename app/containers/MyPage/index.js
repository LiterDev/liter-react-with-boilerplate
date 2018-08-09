/**
 *
 * MyPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { FormattedMessage, FormatHTMLMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';

import AlertDialog from 'components/AlertDialog';

import Button from 'components/Button';
import Header from 'components/Header';
import TabList from 'components/TabList';
import EmailAuthPop from '../EmailAuthPop';
import messages from './messages';

import {
  myPageAction,
  loadFollowerCountAction,
  loadFollowingCountAction,
} from './actions';
import * as selectors from './selectors';

import reducer from './reducer';
import saga from './saga';

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
      userData: {
        photoPath:
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIEBQYDB//EACoQAAICAQIGAQMFAQAAAAAAAAABAhEDBCEFEjFBUXFhIjKhIzRCYoET/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APtoIsWBIIsWBIIsWBIIsWBIIsWBIIsWBIIsWBIIsWBUEWLAkEWLAkEWYfENatLCo1LJLovHyBl5MkMcebJJRj5bMWXFdJF/fKXqJoc2bJnnzZZuT+ex5gdJj4lpMjpZeV/2VGUmmk07T7nImRpNZm0sv05XHvB9GB0wPLT54ajDHJB7Pt4PSwJBFiwJBFiwIBUAWBUAWOa1uV5tTkndq6XpHRSlywk/CbOW7AAAAAAGy4Jmcc08T6SVpfKN0c5w51rcXuvwdDYFgVAFgVAFbFlbFgWsWVsWBM/qhJLujmF0Oms53UQ/558kPEmB5gAAAAMnhyvW4vZv7NLwmHNqZS7RizcWBaxZWxYFrFlbFgVsWQAJsWQAJs1XFsVZY5V0kqftG0PLU4VnxOD79H4YGhBbJF45uEtmnRUAAe+kwPUZeX+K3kBseF4+TT876z3/AMMyyqpJJKkuhIE2LIAE2LIAFQVsWBYFbMfLrcWPZS534iBlFZzjBXOSS+TV5dflntCoL46mNKTk7k235bAvqpxyajJOLtN7HkAAM3huWGPJNTko8yVWYQA6BNNWt15JNDjyzxu4TcfTMvFxGa2yxUvlbAbMHhi1OLLtGe/h9T1sCwK2LArZjajWRxPlj9U/widZleLD9PV7I1QHrlz5M33y28LoeQAAAAAAAAAAAADIw6vLjpN80fDMcAbjBqIZl9Oz7pnrZpITcJKUXTXQ3GOanCMl3VgYnEfsh7MEzuIfZD2YIEAAAAAAAAAAAAAAAAG20n7fH6NSbXTft8foD//Z',
      },
      tabs: [
        { tabLabel: '리뷰', type: 'REVIEW' },
        { tabLabel: '보상 내역', type: 'REWARD' },
      ],
      makeWalletPopOpen: false,
      emailSuccessPop: false,
      havingWallet: false,
    };

    this.handleCreateWallet = this.handleCreateWallet.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openEmailSuccesPop = this.openEmailSuccesPop.bind(this);
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
    });
  };

  componentDidMount() {
    const {
      selectMyReview,
      selectFollowerCount,
      selectFollowingCount,
    } = this.props;

    selectMyReview();
    selectFollowerCount();
    selectFollowingCount();
  }

  render() {
    const { classes, myPages, global } = this.props;
    const { userData, havingWallet } = this.state;
    console.log(global.userData.username);

    // 임시코드
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
          <div className={classes.row}>{localStorage.getItem('username')}</div>
          <div className={classes.row}>
            {havingWallet ? (
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
                0
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
              <div className={classes.row}>팔로워</div>
            </div>
            <div className={classes.verticalCol}>
              <div className={classes.verticalDivider} />
            </div>
            <div className={classes.col}>
              <div className={classes.row}>{myPages.followingCount}</div>
              <div className={classes.row}>팔로잉</div>
            </div>
          </div>
        </div>
        <TabList tabs={this.state.tabs} data={myPages} />
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
      </div>
    );
  }
}

MyPage.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectMyReview: PropTypes.func,
  selectFollowerCount: PropTypes.func,
  selectFollowingCount: PropTypes.func,
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
  console.log('mapDispatch');
  return {
    selectMyReview: () => {
      console.log(`select My Review call!!!`);
      dispatch(myPageAction());
    },
    selectFollowerCount: () => {
      console.log(`load My Review - follower Count call!!!`);
      dispatch(loadFollowerCountAction());
    },
    selectFollowingCount: () => {
      console.log(`load My Review - following Count call!!!`);
      dispatch(loadFollowingCountAction());
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
