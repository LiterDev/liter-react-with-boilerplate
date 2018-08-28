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

const styles = theme => ({
  root: {
    top: theme.spacing.unit * 0,
  },
  appBar: {
    position: 'relative',
    textAlign: 'center',
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
    paddingLeft: 17,
    paddingRight: 17,
  },
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 72,
    display: 'table',
    boxShadow: '0 -0.5px 0 0 rgba(0, 0, 0, 0.1)',
    // text-align: center;
  },
  footerContainer: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  inputWrap: {
    position: 'relative',
    float: 'left',
    width: '80%',
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    height: 36,
    paddingRight: 16,
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
    border: 'solid 0.01em rgb(153, 153, 153)',
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
});

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
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.loadReplyList = this.loadReplyList.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }
  componentWillMount() {
    this.loadReplyList(1);
  }

  handleScroll(event) {
    // console.log('the scroll things', event);
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    if (bottom) {
      // console.log('the scroll things', event);
      this.loadReplyList(this.state.curPage + 1);
    }
  }

  loadReplyList = pageIndex => {
    if (this.state.loadEnd === false && this.state.loading === false) {
      this.setState({ loading: true });
      const requestURL = `${
        process.env.API_URL
      }/review/myLike?page=${pageIndex}`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;
      if (accessToken) {
        axios({
          method: 'GET',
          url: requestURL,
          headers: {
            Accept: 'application/json;charset=UTF-8',
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: token,
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
    }
  };

  handleSubmit = event => {
    // console.log(reviewId);
    const self = this;
    if (e.key === 'Enter') {
      const requestURL = `${process.env.API_URL}/engagement`;
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
            parentId: this.props.parentId ? this.props.parentId : 0,
            content: event.target.value,
          },
        })
          .then(resp => {
            // console.log(resp);
            // if (Boolean(resp.data)) {
            this.props.handleLikeState(reviewId);
            self.setState({ loading: false });
            // }
          })
          .catch(error => {
            if (Boolean(error.response.data.code)) {
            }
            self.setState({ loading: false });
          });
      }
    }
  };

  render() {
    const { classes, handleClose } = this.props;
    const { totalReply, replylist } = this.state;
    return (
      <div onScroll={this.handleScroll}>
        <AppBar className={classes.appBar}>
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
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z" opacity=".87" />
                  <path
                    fill="#000"
                    fill-rule="nonzero"
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
          {/* {reviewlist &&
            reviewlist.map((item, index) => (
              <ReviewLikeItem
                key={item.id}
                review={item}
                handleFollowState={this.handleFollowState}
              />
            ))} */}
        </div>
        <div className={classes.footer}>
          <div className={classes.footerContainer}>
            <div className={classes.avatarWrap}>
              <Avatar
                alt=""
                src="https://www.carusopizza.cz/258-large_default/coca-cola-can-033l.jpg"
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
                  onKeyPress={this.handleKey}
                />
              </div>
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
