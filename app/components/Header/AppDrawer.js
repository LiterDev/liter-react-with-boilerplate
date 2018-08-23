import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ReviewsMyLike from 'containers/ReviewsMyLike/Loadable';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';

import avatarDefault from '../../images/ic-avatar.png';

// import HeaderLink from './HeaderLink';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  paper: {
    width: '85%',
    maxWidth: '300px',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing.unit / 2,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  // https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
  toolbarIe11: {
    display: 'flex',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  anchor: {
    color: theme.palette.text.secondary,
  },
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    height: '49px',
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
  },
  buttonLeaf: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  link: {
    textDecoration: 'none',
  },
  btnCaption: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#111111',
  },
  btnLogOutCaption: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#7c7c7c',
  },
  btnLogInCaption: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '18px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#1591ff',
  },
  close: {
    position: 'absolute',
    right: 6.4,
  },
  panel: {
    // height: '160px',
    height: 94,
    marginLeft: '10px',
    // marginBottom: '18px',
  },
  avatar: {
    margin: 10,
    border: 'solid 2px rgb(55, 161, 255)',
  },
  bigAvatar: {
    width: 50,
    height: 50,
  },
  avatarDiv: {
    float: 'left',
    textAlign: 'left',
  },
  userNickName: {
    display: 'inline-block',
    wordWrap: 'normal',
    maxWidth: '150px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'SFProDisplay',
    fontSize: '18px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    // lineHeight: '1.2',
    letterSpacing: '-0.2px',
    color: '#111111',
    marginTop: 10,
    marginLeft: 14,
    height: 22,
  },
  userName: {
    display: 'inline-block',
    wordWrap: 'normal',
    maxWidth: '150px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'SFProDisplay',
    fontSize: '12px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '-0.1px',
    // lineHeight: '1.2',
    color: 'rgb(153, 153, 153)',
    marginTop: 0,
    marginLeft: 14,
    height: 22,
  },
  userLevel: {
    paddingLeft: '6px',
    fontFamily: 'SFProDisplay',
    fontSize: '12px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '-0.3px',
    color: '#7d9ab4',
  },
  userContent: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '15px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: 'normal',
    color: '#aaaaaa',
  },
  userLiterCube: {
    fontFamily: 'SFProDisplay',
    fontSize: '15px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: 'normal',
    color: '#1591ff',
  },
  userContentNum: {
    paddingLeft: '6px',
    paddingRight: '6px',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '15px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: 'normal',
    color: '#aaaaaa',
  },
  rowPaddingName: {
    paddingTop: '5px',
  },
  rowPaddingFollow: {
    paddingTop: '5px',
  },
  rowPaddingLiterCube: {
    paddingTop: '10px',
  },

  badge: {
    // position: 'absolute',
    top: 40,
    right: -5,
    // The border color match the background color.
    // border: `2px solid ${
    //   theme.palette.type === 'light'
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[900]
    // }`,
    borderRadius: '10.5px',
    backgroundColor: 'rgb(125, 154, 180)',
    border: 'solid 1px rgb(255, 255, 255)',
    color: '#ffffff',
    width: 33,
    height: 21,
  },
  literCube: {
    // position: 'aboslute',
    height: 16,
    fontFamily: 'SFProText',
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: -0.2,
    textAlign: 'right',
    color: 'rgb(21, 145, 255)',
    // float: 'right',
    justifyContent: 'flex-end',
    display: 'flex',
    width: '60%',
    // right: 0,
  },
  literCubeLcb: {
    fontWeight: 300,
    marginLeft: 5,
  },
});

// iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

class AppDrawer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      reviewListOpen: false,
    };

    this.reviewListOpen = this.reviewListOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  reviewListOpen = () => {
    this.setState({
      reviewListOpen: true,
    });
    this.props.onClose();
  };
  handleClose = () => {
    this.setState({ reviewListOpen: false });
  };

  render() {
    // function AppDrawer(props) {
    const {
      classes,
      className,
      // disablePermanent,
      mobileOpen,
      onClose,
      onOpen,
      onHelp,
      // onClick,
      // href,
      location,
      logout,
    } = this.props;
    // const style = {
    //   paddingLeft: 8 * (3 + 2 * 0),
    // };
    // console.log(`location -----[ ${location.pathname}]`);
    // const pathname = location.pathname;
    const logoutDrawer = (
      <div className={classes.nav}>
        <div className={classes.toolbarIe11}>
          <div className={classes.toolbar}>
            <Typography variant="title" color="inherit" />
          </div>
        </div>
        <List>
          <ListItem className={classes.itemLeaf}>
            {
              // eslint-disable-next-line anchor-is-valid
            }
            <Link
              to="/signin"
              onClick={onClose}
              role="button"
              className={classes.link}
            >
              <Button className={classes.btnLogInCaption}>로그인</Button>
            </Link>
          </ListItem>

          <ListItem className={classes.itemLeaf}>
            <Link
              to="/about"
              onClick={onClose}
              role="button"
              className={classes.link}
            >
              <Button className={classes.btnCaption}>리터소개</Button>
            </Link>
          </ListItem>
          <ListItem className={classes.itemLeaf}>
            {/* <Link
            to="/qa"
            onClick={onHelp}
            role="button"
            className={classes.link}
          > */}
            <div className={classes.link} onClick={onHelp}>
              <Button className={classes.btnCaption}>문의하기</Button>
            </div>
            {/* </Link> */}
          </ListItem>
        </List>
      </div>
    );

    const avatarImg = Boolean(
      localStorage.getItem('profileImageSmallUrl') &&
        localStorage.getItem('profileImageSmallUrl') != 'null',
    )
      ? localStorage.getItem('profileImageSmallUrl')
      : avatarDefault;
    const LiterCubeIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="21"
        viewBox="0 0 10 21"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M-155-201h375v667h-375z" />
          <path
            fill="#fff"
            fillRule="nonzero"
            stroke="#fff"
            strokeWidth=".1"
            d="M7.886 6.502l.114.1v.972l-.034.072-.142.08A3.67 3.67 0 0 0 4.776 9.37l3.108.048.116.106-.059 1.022-.12.096-3.388-.042c-.018.139-.027.26-.027.376l.001.075v.028c.003.104.003.174-.002.233l3.48.05.115.105-.059 1.023-.12.096-3-.067c.596 1.045 1.747 1.71 3.066 1.757l.113.107-.059 1.022-.117.096c-2.01 0-3.798-1.186-4.44-2.918l-1.272-.048L2 12.428l.059-1.022.125-.096.861.048a4.1 4.1 0 0 1-.018-.383c0-.14.01-.25.037-.341l-.953-.043L2 10.485l.059-1.023.121-.096 1.153.033c.704-1.78 2.504-2.948 4.553-2.897z"
          />
        </g>
      </svg>
    );

    const loginDrawer = (
      <div className={classes.nav}>
        <div className={classes.toolbarIe11}>
          <div className={classes.toolbar}>
            <Typography variant="title" color="inherit" />
          </div>
        </div>
        <div className={classes.panel}>
          <div className={classes.row}>
            <div className={classes.avatarDiv}>
              <Badge
                badgeContent={'Lv 1'}
                color="primary"
                classes={{ badge: classes.badge }}
              >
                <Avatar
                  alt=""
                  src={avatarImg}
                  className={classNames(classes.avatar, classes.bigAvatar)}
                />
              </Badge>
            </div>
          </div>
          <div className={classNames(classes.row, classes.rowPaddingName)}>
            {/* <Link
            to="/mypage"
            onClick={onClose}
            role="button"
            className={classes.link}
          > */}
            <div>
              <div className={classes.userNickName}>
                {localStorage.getItem('userNickName')}
              </div>
              {/* </Link> */}
              <div className={classes.userName}>
                {localStorage.getItem('username')}
              </div>
            </div>
            {/* <span className={classes.userLevel}>Lv 1</span> */}
          </div>
          {/* <div className={classNames(classes.row, classes.rowPaddingFollow)}>
          <span className={classes.userContent}>팔로워</span>
          <span className={classes.userContentNum}>123</span>
          <span className={classes.userContent}>팔로잉</span>
          <span className={classes.userContentNum}>123</span>
        </div>
        <div className={classNames(classes.row, classes.rowPaddingLiterCube)}>
          <span className={classes.userContent}>나의 총 보유량</span>
          <span className={classes.userLiterCube}>{LiterCubeIcon} 662</span>
        </div> */}
        </div>
        <Divider />
        {/* {renderNavItems({ props, pages: context.pages, activePage: context.activePage, depth: 0 })} */}
        {/* <HeaderLink to="/features">
        <FormattedMessage {...messages.features} />
      </HeaderLink> */}
        <List>
          <ListItem className={classes.itemLeaf}>
            <Button className={classes.btnCaption}>나의 보상</Button>
            <div className={classes.literCube}>
              <span>{localStorage.getItem('literCube')}</span>
              <span className={classes.literCubeLcb}>LCB</span>
            </div>
            <div style={{ clear: 'both' }} />
          </ListItem>
          {location.pathname !== '/mypage' && (
            <ListItem className={classes.itemLeaf}>
              <Link
                to="/mypage"
                onClick={onClose}
                role="button"
                className={classes.link}
              >
                <Button className={classes.btnCaption}>마이페이지</Button>
              </Link>
            </ListItem>
          )}
          {location.pathname !== '/' && (
            <ListItem className={classes.itemLeaf}>
              <Link
                to="/"
                onClick={onClose}
                role="button"
                className={classes.link}
              >
                <Button className={classes.btnCaption}>메인페이지</Button>
              </Link>
            </ListItem>
          )}
          {location.pathname !== '/review/write' && (
            <ListItem className={classes.itemLeaf}>
              <Link
                to="/review/write"
                onClick={onClose}
                role="button"
                className={classes.link}
              >
                <Button className={classes.btnCaption}>리뷰작성하기</Button>
              </Link>
            </ListItem>
          )}

          {/* <ListItem className={classes.itemLeaf}>
            <Button
              className={classes.btnCaption}
              onClick={this.reviewListOpen}
            >
              좋아요 리스트 보기
            </Button>
          </ListItem> */}

          <ListItem className={classes.itemLeaf}>
            <Link
              to="/about"
              onClick={onClose}
              role="button"
              className={classes.link}
            >
              <Button className={classes.btnCaption}>리터소개</Button>
            </Link>
          </ListItem>
          <ListItem className={classes.itemLeaf}>
            {/* <Link
            to="/qa"
            onClick={onHelp}
            role="button"
            className={classes.link}
          > */}
            <div className={classes.link} onClick={onHelp}>
              <Button className={classes.btnCaption}>문의하기</Button>
            </div>
            {/* </Link> */}
          </ListItem>

          <ListItem className={classes.itemLeaf}>
            <div className={classes.link} onClick={logout}>
              <Button className={classes.btnLogOutCaption}>로그아웃</Button>
            </div>
          </ListItem>
        </List>
        <Dialog
          fullScreen
          open={this.state.reviewListOpen}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <ReviewsMyLike handleClose={this.handleClose} />
        </Dialog>
      </div>
    );

    let drawer = logoutDrawer;
    if (Boolean(localStorage.getItem('accessToken'))) drawer = loginDrawer;

    return (
      <div className={className}>
        <Hidden>
          <SwipeableDrawer
            classes={{
              paper: classNames(classes.paper, 'algolia-drawer'),
            }}
            disableBackdropTransition={!iOS}
            variant="temporary"
            open={mobileOpen}
            onOpen={onOpen}
            onClose={onClose}
            ModalProps={{
              keepMounted: true,
            }}
            anchor="right"
          >
            <IconButton
              color="inherit"
              // onClick={this.props.history.goBack()}
              aria-label="Close"
              className={classes.close}
              onClick={() => {
                onClose();
              }}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </SwipeableDrawer>
        </Hidden>
      </div>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  mobileOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

AppDrawer.contextTypes = {
  //   activePage: PropTypes.object.isRequired
};

export default withStyles(styles)(AppDrawer);
