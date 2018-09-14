/**
 *
 * UserProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import classNames from 'classnames';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slide from '@material-ui/core/Slide';
import ProfileAddress from 'components/ProfileAddress';
import SelfieControl from 'components/SelfieControl';

import CloseIcon from '@material-ui/icons/Close';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Divider from '@material-ui/core/Divider';

import ProfileBirth from 'components/ProfileBirth';
import ProfileMarried from 'components/ProfileMarried';
import ProfileLife from 'components/ProfileLife';
import ProfileIdentity from 'components/ProfileIdentity';
import ProfileInterest from 'components/ProfileInterest';

import avatarDefault from '../../images/ic-avatar.png';
import makeSelectUserProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadUserDetail } from './actions';

const styles = theme => ({
  root: {
    // backgroundColor: '#f9f9f9',
    // height: '100vh',
    // position: 'absolute'
    fontFamily: 'Apple SD Gothic Neo',
  },
  appBar: {
    // height: theme.spacing.unit * 8,
    height: 64,
    backgroundColor: '#ffffff',
  },
  toolbar: {
    textAlign: 'center',
    minHeight: 64,
    // boxShadow: '0 0.5px 0 0 rgba(0, 0, 0, 0.1)',
  },
  title: {
    position: 'relative',
    width: '100%',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: 'rgb(17, 17, 17)',
    // marginBottom: 37
  },
  close: {
    position: 'absolute',
    left: 11,
    top: 18,
    height: 24,
    width: 24,
    zIndex: 10,
  },
  avatar: {
    // margin: 10,
    // border: 'solid 2px rgb(55, 161, 255)',
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
  avatarWrap: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 23,
  },
  avatarDiv: {
    // marginTop: 15,
  },
  badge: {
    // position: 'absolute',
    top: 57,
    // bottom: 0,
    right: -3,
    // borderRadius: '10.5px',
    backgroundColor: '#1591ff',
    border: 'solid 1px rgb(255, 255, 255)',
    color: '#ffffff',
    width: 24,
    height: 24,
  },
  userNickName: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '-0.2px',
    color: '#333333',
  },
  userNickNameWrap: {
    marginTop: 8,
  },
  procbarWrap: {
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 34,
    position: 'relative',
  },
  barRoot: {
    backgroundColor: '#c8cacf',
    height: 3,
    marginTop: 3,
  },
  bar: {
    backgroundColor: '#1591ff',
  },
  textWrap: {
    position: 'relative',
  },
  procbarText: {
    // position: 'absolute',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: 'normal',
    color: '#999999',
    width: '70%',
    float: 'left',
    textAlign: 'left',
  },
  procbarPercent: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: 'normal',
    color: '#1591ff',
    width: '30%',
    float: 'left',
    textAlign: 'right',
  },
  quicon: {
    marginLeft: 6,
  },
  buttonWrap: {
    marginTop: 13,
    backgroundColor: '#ffffff',
    height: '100%',
    paddingTop: 18,
    paddingLeft: 16,
    paddingRight: 16,
  },
  buttonDiv: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginBottom: 12,
  },
  buttonRoot: {
    width: '100%',
    height: 63,
    border: 'solid 0.5px #8fa6bb',
    borderRadius: 0,
    paddingTop: 4,
    paddingBottom: 4,
  },
  buttonText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 15,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.38',
    letterSpacing: 'normal',
    color: '#8fa6bb',
  },
  badgePhoto: {
    width: 14,
    height: 14,
  },
  userInfoWrap: {
    textAlign: 'left',
    marginTop: 70,
  },
  userInfo: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 15,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.07',
    letterSpacing: 'normal',
    color: '#acacac',
    float: 'left',
    width: '30%',
    // marginBottom: 14,
  },

  userInfoValue: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 15,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.07',
    letterSpacing: 'normal',
    color: '#333333',
    // float: 'left',
    // marginBottom: 14,
  },
  divider: {
    marginTop: 14,
    marginBottom: 14,
  },
  mailEmpty: {
    color: '#acacac',
  },
  profileText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 13,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.07',
    letterSpacing: 'normal',
    color: '#292d39',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 13,
  },
  buttonTextTop: {
    fontSize: 10,
    // fontWeight: 'normal',
    // fontStyle: 'normal',
    // fontStretch: 'normal',
    // lineHeight: 'normal',
    // letterSpacing: 'normal',
    color: 'rgb(21, 145, 255)',
    marginBottom: 4,
  },
  buttonTextBottom: {
    color: 'rgb(51, 51, 51)',
  },
  exDivider: {
    paddingTop: '40px',
  },
  exCaption: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    fontWeight: 400,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.57',
    letterSpacing: 'normal',
    color: '#999999',
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: '13px',
    paddingBottom: '30px',
  }
});

function Transition(props) {
  return <Slide direction="right" {...props} />;
}
/* eslint-disable react/prefer-stateless-function */
export class UserProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      handleBirthPopOpen: false,
      handleAddressPopOpen: false,
      handleMarriedPopOpen: false,
      handleLifePopOpen: false,
      handleIdentityPopOpen: false,
      handleInterestPopOpen: false,
    };

    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleBirthPop = this.handleBirthPop.bind(this);
    this.handleAddressPop = this.handleAddressPop.bind(this);
    this.handleIdentityPop = this.handleIdentityPop.bind(this);

    this.selfie = React.createRef();

    this.interestCategory = {
      '0': '뷰티',
      '1': '라이프',
      '2': '푸드',
      '3': '패션',
      '4': '유아',
      '5': '취미',
      '6': '맛집',
      '7': '펫',
      '8': '그 외'
    };

  }
  handleAddressPop = () => {
    this.setState({
      handleAddressPopOpen: true,
    });
  };
  handleAddressPopClose = () => {
    this.setState({
      handleAddressPopOpen: false,
    });
    this.handleMarriedPop = this.handleMarriedPop.bind(this);
    this.handleLifePop = this.handleLifePop.bind(this);
    this.handleInterestPop = this.handleInterestPop.bind(this);
  };
  handleBirthPop = () => {
    this.setState({
      handleBirthPopOpen: true,
    });
  };
  handleBirthPopClose = () => {
    this.setState({
      handleBirthPopOpen: false,
    });
  };
  handleMarriedPop = () => {
    this.setState({
      handleMarriedPopOpen: true,
    });
  };
  handleMarriedPopClose = () => {
    this.setState({
      handleMarriedPopOpen: false,
    });
  };

  handleInterestPop = () => {
    this.setState({
      handleInterestPopOpen: true,
    });
  };
  handleInterestPopClose = () => {
    this.setState({
      handleInterestPopOpen: false,
    });
  };

  handleLifePop = () => {
    this.setState({
      handleLifePopOpen: true,
    });
  };
  handleLifePopClose = () => {
    this.setState({
      handleLifePopOpen: false,
    });
  };
  handleIdentityPop = () => {
    this.setState({
      handleIdentityPopOpen: true,
    });
  };
  handleIdentityPopClose = () => {
    this.setState({
      handleIdentityPopOpen: false,
    });
  };
  handlePhoto = () => {
    // alert('!');
    console.log("handlePhoto");
  };
  handleCloseMain = () => {
    this.props.history.push('/mypage');
  };
  openUserNickChange = () => {
    console.log('nick change');
    // this.setState({
    //   nickChangePop: true,
    // });
  };
  componentDidMount() {
    this.props.loadUserDetail();
  }
  render() {
    const { classes, userDetail } = this.props;
    const avatarImg = Boolean(
      localStorage.getItem('profileImageSmallUrl') &&
        localStorage.getItem('profileImageSmallUrl') != 'null',
    )
      ? localStorage.getItem('profileImageSmallUrl')
      : avatarDefault;
    console.log(this.props.userprofile.userDetail);
    return (
      <div className={classes.root}>
        <SelfieControl
          changeSelfie={click => (this.changeSelfie = click)}
          callbackFunc={this.handlePhoto}
        />
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              onClick={this.handleCloseMain}
              aria-label="Close"
              className={classes.close}
            >
              <CloseIcon />
            </IconButton>
            {/* <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              프로필 정보 입력
            </Typography> */}
          </Toolbar>
        </AppBar>
        <div className={classes.avatarWrap}>
          <div className={classes.avatarDiv}>
            <Badge
              // badgeContent={<PhotoCamera className={classes.badgePhoto} />}
              color="primary"
              // classes={{ badge: classes.badge }}
              // onClick={this.handlePhoto}
            >
              <Avatar
                alt=""
                src={avatarImg}
                className={classNames(classes.avatar, classes.bigAvatar)}
                // onClick={() => this.changeSelfie()}
              />
            </Badge>
          </div>
          <div className={classes.userInfoWrap}>
            <div>
              <div className={classes.userInfo}>사용자 이름</div>
              <div className={classes.userInfoValue}
                onClick={() => {
                  this.openUserNickChange();
                }}
              >
                {Boolean(localStorage.getItem('userNickName')) ? (
                  localStorage.getItem('userNickName')
                ) : (
                  <div style={{ clear: 'both' }} />
                )}
              </div>
            </div>
            <Divider className={classes.divider} />
            <div>
              <div className={classes.userInfo}>이메일</div>
              <div className={classes.userInfoValue}>
                {Boolean(localStorage.getItem('username')) ? (
                  localStorage.getItem('username')
                ) : (
                  <span className={classes.mailEmpty}>
                    등록한 이메일이 없습니다.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.profileText}>프로필 정보</div>
        <div className={classes.buttonWrap}>
          <div className={classes.buttonDiv}>
            {Boolean(this.props.userprofile.userDetail.gender) ||
            this.props.userprofile.userDetail.gender === 0 ||
            Boolean(this.props.userprofile.userDetail.birthDay) ? (
              <Button
                variant="outlined"
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  text: classes.buttonText,
                }}
                onClick={this.handleBirthPop}
              >
                <div>
                  <div className={classes.buttonTextTop}>성별/생년월일</div>
                  <div className={classes.buttonTextBottom}>
                    {this.props.userprofile.userDetail.gender === 0
                      ? '남'
                      : '여'}
                    {Boolean(this.props.userprofile.userDetail.birthDay)
                      ? ` / ${this.props.userprofile.userDetail.birthDay}`
                      : ''}
                  </div>
                </div>
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  text: classes.buttonText,
                }}
                onClick={this.handleBirthPop}
              >
                성별/생년월일
              </Button>
            )}
          </div>
          <div className={classes.buttonDiv}>
            {Boolean(this.props.userprofile.userDetail.married) ||
            this.props.userprofile.userDetail.married === 0 ? (
              <Button
                variant="outlined"
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  text: classes.buttonText,
                }}
                onClick={this.handleMarriedPop}
              >
                <div>
                  <div className={classes.buttonTextTop}>결혼여부</div>
                  <div className={classes.buttonTextBottom}>
                    {this.props.userprofile.userDetail.married === 0
                      ? '기혼'
                      : '미혼'}
                  </div>
                </div>
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  text: classes.buttonText,
                }}
                onClick={this.handleMarriedPop}
              >
                결혼여부
              </Button>
            )}
          </div>
          <div className={classes.buttonDiv}>
            {Boolean(this.props.userprofile.userDetail.interestCategory) ||
            this.props.userprofile.userDetail.interestCategory === 0 ? (
              <Button
                variant="outlined"
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  text: classes.buttonText,
                }}
                onClick={this.handleInterestPop}
              >
                <div>
                  <div className={classes.buttonTextTop}>관심분야</div>
                  <div className={classes.buttonTextBottom}>
                    { this.props.userprofile.userDetail.interestCategory.trim() && 
                      Object.values(this.props.userprofile.userDetail.interestCategory.split(',')).map(
                      item => { return (
                        `${this.interestCategory[item]} `
                        )}
                    )}
                  </div>
                </div>
              </Button>
            ) : (
            <Button
              variant="outlined"
              className={classes.button}
              classes={{
                root: classes.buttonRoot,
                text: classes.buttonText,
              }}
              onClick={this.handleInterestPop}
            >
              관심분야
            </Button>
            )}
          </div>
          <div className={classes.buttonDiv}>
            {Boolean(this.props.userprofile.userDetail.singleLife) || 
              Boolean(this.props.userprofile.userDetail.pets) ||
              Boolean(this.props.userprofile.userDetail.singleLife) ? (
              <Button
                variant="outlined"
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  text: classes.buttonText,
                }}
                onClick={this.handleLifePop}
              >
                <div>
                  <div className={classes.buttonTextTop}>라이프 스타일</div>
                  <div className={classes.buttonTextBottom}>
                    {
                      this.props.userprofile.userDetail.singleLife && 
                      this.props.userprofile.userDetail.singleLife == 1 ? (
                        '1인가구'
                      ) : ('')
                    }
                    {
                      this.props.userprofile.userDetail.singleLife && 
                      this.props.userprofile.userDetail.pets && Boolean(this.props.userprofile.userDetail.pets)
                      && this.props.userprofile.userDetail.pets !== "NONE" ? (
                        ' / '
                        ) : ('')
                    }
                    {
                      this.props.userprofile.userDetail.pets.split(',').map(item => {
                        if(item == 1) return '개 ';
                        if(item == 2) return '고양이 ';
                        if(item == 3) return '그외 ';
                      })
                    }
                    {
                      this.props.userprofile.userDetail.pets && 
                      this.props.userprofile.userDetail.pets !== "NONE" &&
                      this.props.userprofile.userDetail.skinType 
                      && Boolean(this.props.userprofile.userDetail.skinType) ? (
                        ' / '
                        ) : ('')
                    }
                    {this.props.userprofile.userDetail.skinType == 0 ? ('건성') : ('')}
                    {this.props.userprofile.userDetail.skinType == 1 ? ('지성') : ('')}
                    {this.props.userprofile.userDetail.skinType == 2 ? ('민감성') : ('')}
                    {this.props.userprofile.userDetail.skinType == 3 ? ('복합성') : ('')}
                  </div>
                </div>
              </Button>
            ) : (
            <Button
              variant="outlined"
              className={classes.button}
              classes={{
                root: classes.buttonRoot,
                text: classes.buttonText,
              }}
              onClick={this.handleLifePop}
            >
              라이프 스타일
            </Button>
            )}
          </div>
          <div className={classes.buttonDiv}>
            {Boolean(this.props.userprofile.userAddress.postNumber) ||
            this.props.userprofile.userAddress.postNumber === 0 ? (
              <Button
                variant="outlined"
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  text: classes.buttonText,
                }}
                onClick={this.handleAddressPop}
              >
                <div>
                  <div className={classes.buttonTextTop}>배송지 주소</div>
                  <div className={classes.buttonTextBottom}>
                    { this.props.userprofile.userAddress.addressFirst }
                    { this.props.userprofile.userAddress.addressDetail }
                  </div>
                </div>
              </Button>
            ) : (
            <Button
              variant="outlined"
              className={classes.button}
              classes={{
                root: classes.buttonRoot,
                text: classes.buttonText,
              }}
              onClick={this.handleAddressPop}
            >
              배송지 주소
            </Button>
            )}
          </div>
          <div className={classes.buttonDiv}>
            {Boolean(this.props.userprofile.userDetail.tags) ||
            this.props.userprofile.userDetail.tags === 0 ? (
              <Button
                variant="outlined"
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  text: classes.buttonText,
                }}
                onClick={this.handleIdentityPop}
              >
                <div>
                  <div className={classes.buttonTextTop}>유저 아이덴티티</div>
                  <div className={classes.buttonTextBottom}>
                    { this.props.userprofile.userDetail.tags.trim() && 
                      Object.values(this.props.userprofile.userDetail.tags.split(',')).map(
                      item => { return (
                        `#${item} `
                        )}
                    )}
                  </div>
                </div>
              </Button>
            ) : (
            <Button
              variant="outlined"
              className={classes.button}
              classes={{
                root: classes.buttonRoot,
                text: classes.buttonText,
              }}
              onClick={this.handleIdentityPop}
            >
              유저 아이덴티티
            </Button>
            )}
          </div>
          <div className={classes.exDivider}>
            <Divider />
          </div>
          <div className={classes.exCaption}>
            회원님이 제공해 주신 소중한 정보는 리뷰가 유용하게 쓰일 수 있도록, 추가적인 자료로 활용될 예정입니다. <br/>
            개인정보는 필요에 따라 블록체인에 암호화 하여 기록되고, LITER는 회원님의 소중한 정보를 지켜드리기 위해 최선을 다할 것입니다.
          </div>
        </div>
        <Dialog
          fullScreen
          open={this.state.handleBirthPopOpen}
          onClose={this.handleBirthPopClose}
          TransitionComponent={Transition}
          scroll="paper"
        >
          <ProfileBirth handleClose={this.handleBirthPopClose} />
        </Dialog>
        <Dialog
          fullScreen
          open={this.state.handleMarriedPopOpen}
          onClose={this.handleMarriedPopClose}
          TransitionComponent={Transition}
          scroll="paper"
        >
          <ProfileMarried handleClose={this.handleMarriedPopClose} />
        </Dialog>
        <Dialog
          fullScreen
          open={this.state.handleInterestPopOpen}
          onClose={this.handleInterestPopClose}
          TransitionComponent={Transition}
          scroll="paper"
        >
          <ProfileInterest handleClose={this.handleInterestPopClose} />
        </Dialog>
        <Dialog
          fullScreen
          open={this.state.handleLifePopOpen}
          onClose={this.handleLifePopClose}
          TransitionComponent={Transition}
          scroll="paper"
        >
          <ProfileLife handleClose={this.handleLifePopClose} />
        </Dialog>
        <Dialog
          fullScreen
          open={this.state.handleAddressPopOpen}
          onClose={this.handleAddressPopClose}
          TransitionComponent={Transition}
          scroll="paper"
        >
          <ProfileAddress handleAddressPopClose={this.handleAddressPopClose} />
        </Dialog>
        <Dialog
          fullScreen
          open={this.state.handleIdentityPopOpen}
          onClose={this.handleIdentityPopClose}
          TransitionComponent={Transition}
          scroll="paper"
        >
          <ProfileIdentity
            handleIdentityPopClose={this.handleIdentityPopClose}
          />
        </Dialog>
      </div>
    );
  }
}

UserProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loadUserDetail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userprofile: makeSelectUserProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadUserDetail: () => {
      dispatch(loadUserDetail());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userProfile', reducer });
const withSaga = injectSaga({ key: 'userProfile', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(UserProfile);
