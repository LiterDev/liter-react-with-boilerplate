/**
 *
 * ReplyList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import classNames from 'classnames';

import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ReplyItem from 'components/ReplyItem';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectReplyList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import avatarDefault from '../../images/ic-avatar.png';

const styles = theme => ({
  root: {
    // top: theme.spacing.unit * 0,
    // minHeight: '100vh',
    // maxHeight: '100vh',
    // height: '100vh',
    overflowY: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    // overflow: 'hidden',
    // transitionProperty: 'height, min-height',
    // transitionDuration: '.6s',
    // transitionDelay: '.1s',
    // transitionTimingFunction: 'ease-in',
  },
  appBar: {
    position: 'sticky',
    textAlign: 'center',
    top: 0,
  },
  toolbar: {
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    left: 20,
    height: 24,
    width: 24,
    zIndex: 10,
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
  titleSub: {
    height: 16,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: 'rgb(41, 45, 57)',
    margintop: 12,
  },
  container: {
    paddingLeft: 2,
    paddingRight: 17,
  },
  footer: {
    // position: 'fixed',
    position: 'sticky',
    // left: 0,
    bottom: 0,
    width: '100%',
    height: 72,
    display: 'table',
    boxShadow: '0 -0.5px 0 0 rgba(0, 0, 0, 0.1)',
    zIndex: 10,
    backgroundColor: '#ffffff',
    // text-align: center;
  },
  footerContainer: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  inputWrap: {
    position: 'relative',
    float: 'left',
    width: '60%',
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    height: 36,
    paddingRight: 10,
  },
  inputLabel: {
    backgroundColor: 'rgb(250, 250, 250)',
    border: 'solid 1px rgb(238, 238, 238)',
    borderRadius: 19,
    height: 36,
  },
  avatarWrap: {
    position: 'relative',
    float: 'left',
    width: '20%',
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  avatar: {
    // margin: 10,
    // border: 'solid 2px rgb(55, 161, 255)',
    // border: 'solid 0.01em rgb(153, 153, 153)',
  },
  bigAvatar: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    // position: 'relative',
    width: 36,
    height: 36,
    // border: 'solid 0.5px rgb(153, 153, 153)',
  },
  input: {
    font: 'inherit',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 12,
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
    maxLength: 100,
  },
  submitBtn: {
    minWidth: 50,
    float: 'left',
    paddingLeft: 5,
    paddingRight: 5,
  },
});

const avatarImg = Boolean(
  localStorage.getItem('profileImageSmallUrl') &&
    localStorage.getItem('profileImageSmallUrl') != 'null',
)
  ? localStorage.getItem('profileImageSmallUrl')
  : avatarDefault;

const hasVerticalScroll = node => {
  if (!node) {
    if (window.innerHeight) {
      return document.body.offsetHeight > window.innerHeight;
    }
    return (
      document.documentElement.scrollHeight >
        document.documentElement.offsetHeight ||
      document.body.scrollHeight > document.body.offsetHeight
    );
  }
  return node.scrollHeight > node.offsetHeight;
};
/* eslint-disable react/prefer-stateless-function */
export class ReplyList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      totalReply: 0,
      replylist: [],
      loading: false,
      curPage: 1,
      loadEnd: false,
      parentId: 0,
      replyValue: '',
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.loadReplyList = this.loadReplyList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }
  componentWillMount() {
    this.loadReplyList(1, 0);
  }

  handleScroll(event) {
    // console.log('the scroll things', event);
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    if (bottom) {
      // console.log('the scroll things', event);
      this.loadReplyList(this.state.curPage + 1, this.state.parentId);
    }
  }

  loadReplyList = (pageIndex, parentId) => {
    if (this.state.loadEnd === false && this.state.loading === false) {
      this.setState({ loading: true });
      const requestURL = `${process.env.API_URL}/reply/${
        this.props.reviewId
      }/${parentId}?page=${pageIndex}`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;
      // if (accessToken) {
      axios({
        method: 'GET',
        url: requestURL,
        headers: {
          Accept: 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          // Authorization: token,
        },
      })
        .then(resp => {
          if (Boolean(resp.data)) {
            // console.log(resp.data);
            // console.log(resp.data.pageable.totalCnt);
            this.setState({
              curPage: pageIndex,
              replylist: this.state.replylist.concat(resp.data.content),
              loading: false,
              totalReply: resp.data.pageable.totalCnt,
            });
          }
        })
        .catch(error => {
          console.log(error);
          if (error.response.data.code === 300104) {
            this.setState({ loadEnd: true });
          } else if (error.response.data.code === 500000) {
            // console.log('likelist empty > ERROR');
          }
        });
    }
    // }
  };

  handleChange = event => {
    // console.log(event.target.value);
    // const self = this;
    if (event.target.value.length > 1000) {
      return false;
    }
    // console.log(event.target.value);
    this.setState({
      replyValue: event.target.value,
    });
  };

  handleSubmit = event => {
    // console.log(event.target.value);
    // console.log(event.key);
    if (event.key === 'Enter') {
      if (!Boolean(event.target.value)) {
        return false;
      }
      this.handleSend();
    }
  };

  handleSend = () => {
    const sendValue = this.state.replyValue;
    const requestURL = `${process.env.API_URL}/reply`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    if (accessToken) {
      axios({
        method: 'POST',
        url: requestURL,
        headers: {
          Accept: 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: token,
        },
        data: {
          reviewId: this.props.reviewId,
          parentId: this.state.parentId ? this.state.parentId : 0,
          content: sendValue,
        },
      })
        .then(resp => {
          // console.log(this.state.parentId);
          if (Boolean(resp.data)) {
            if (this.state.parentId === 0) {
              // console.log(this.state.parentId);
              this.setState({
                replylist: [],
                loading: false,
                replyValue: '',
              });
              this.loadReplyList(1, 0);
            }
          }
        })
        .catch(error => {
          // console.log(error);
          if (Boolean(error.response.data.code)) {
          }
          this.setState({ loading: false });
        });
    } else {
      alert('로그인이 필요한 서비스 입니다.');
    }
  };

  render() {
    const { classes, handleClose, reviewId } = this.props;
    const { totalReply, replylist } = this.state;
    // const hasVScroll = hasVerticalScroll(document.querySelector('paper'));

    // if (hasVScroll) {
    //   console.log('HAS SCROLL', hasVScroll);
    // }
    // console.log(reviewId);
    return (
      <div onScroll={this.handleScroll} className={classes.root}>
        <AppBar className={classes.appBar} position="sticky">
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
              className={classes.close}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  // fill-rule="evenodd"
                >
                  <path d="M0 0h24v24H0z" opacity=".87" />
                  <path
                    fill="#000"
                    // fill-rule="nonzero"
                    d="M15.725 5.274a.93.93 0 0 0-1.318 0l-6.19 6.189c-.29.29-.29.76 0 1.05l6.19 6.19a.93.93 0 0 0 1.318 0 .93.93 0 0 0 0-1.319l-5.392-5.4 5.4-5.4a.928.928 0 0 0-.008-1.31z"
                  />
                </g>
              </svg>
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              댓글 {this.state.totalReply}개
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          {replylist &&
            replylist.map((item, index) => (
              <ReplyItem
                key={item.id}
                reply={item}
                // handleFollowState={this.handleFollowState}
              />
            ))}
        </div>
        <div className={classes.footer}>
          <div className={classes.footerContainer}>
            <div className={classes.avatarWrap}>
              <Avatar
                alt=""
                src={avatarImg}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            </div>
            <div className={classes.inputWrap}>
              <div className={classes.inputLabel}>
                <input
                  type="text"
                  placeholder="메시지 추가..."
                  className={classes.input}
                  maxLength="100"
                  onKeyPress={this.handleSubmit}
                  value={this.state.replyValue}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className={classes.submitBtnWrap}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.submitBtn}
                onClick={this.handleSend}
              >
                완료
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReplyList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  reviewId: PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
  replylist: makeSelectReplyList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'replyList', reducer });
const withSaga = injectSaga({ key: 'replyList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ReplyList);
