/**
 *
 * ReplyItem
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
/* material-ui core */
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
/* material-ui icon */
/* containers */
/* components */
import TimeAt from 'components/TimeAt';
import ReReplyItem from 'components/ReReplyItem';
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import avatarDefault from '../../images/ic-avatar.png';

const styles = theme => ({
  // root: {
  //   top: theme.spacing.unit * 0,
  // },
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
  root: {
    position: 'relative',
    // left: 0,
    // bottom: 0,
    width: '100%',
    // minHeight: 72,
    display: 'table',
    // boxShadow: '0 -0.5px 0 0 rgba(0, 0, 0, 0.1)',
    zIndex: 8,
    // text-align: center;
    marginBottom: 24,
  },
  rootContainer: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },

  avatarWrap: {
    position: 'relative',
    float: 'left',
    width: '20%',
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingTop: 5,
    // height: '100%',
    minHeight: 70,
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
  usernickname: {
    fontFamily: 'SFProText',
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.29',
    letterSpacing: 'normal',
    color: 'rgb(17, 17, 17)',
  },
  timeAt: {
    marginLeft: 10,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.38',
    letterSpacing: 'normal',
    color: 'rgb(136, 136, 136)',
  },
  action: {
    display: 'block',
    paddingLeft: 40,
    height: 25,
  },
  content: {
    overflow: 'hidden',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    maxWidth: 290,
  },

  footer: {
    // position: 'fixed',
    // position: 'absolute',
    // left: 0,
    // bottom: 0,
    position: 'relative',
    width: '100%',
    height: 50,
    display: 'table',
    // boxShadow: '0 -0.5px 0 0 rgba(0, 0, 0, 0.1)',
    zIndex: 10,
    backgroundColor: '#ffffff',
    textAlign: 'right',
    // float: 'left',
  },
  footerContainer: {
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingLeft: 10,
  },
  inputWrap: {
    position: 'relative',
    float: 'left',
    width: '65%',
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

  avatarReplyWrap: {
    position: 'relative',
    float: 'left',
    width: '20%',
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    // paddingTop: 5,
  },
  bigReplyAvatar: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    // position: 'relative',
    width: 30,
    height: 30,
  },
  actionText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 13,
    fontWeight: 500,
    opacity: '0.6',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: 'rgb(17, 17, 17)',
    paddingLeft: 0,
    minWidth: 0,
    height: 16,
  },
  moreText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    fontWeight: 500,
    // opacity: '0.6',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: 'rgb(21, 145, 255);',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    height: 16,
  },
  submitBtn: {
    minWidth: 40,
    float: 'left',
    width: 40,
    height: 36,
  },
});

const avatarImgWriter = Boolean(
  localStorage.getItem('profileImageSmallUrl') &&
    localStorage.getItem('profileImageSmallUrl') != 'null',
)
  ? localStorage.getItem('profileImageSmallUrl')
  : avatarDefault;
/* eslint-disable react/prefer-stateless-function */
class ReplyItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rereplyList: [],
      rereplyinputShow: false,
      loading: false,
      loadEnd: false,
      rereplyValue: '',
      pageIndex: 1,
      depCount: this.props.reply.depCount,
      showReReply: false,
      totalReply: this.props.reply.depCount,
    };
    this.handleRReply = this.handleRReply.bind(this);
    this.loadReReplyListClear = this.loadReReplyListClear.bind(this);
  }
  handleRReply = () => {
    console.log(this.props.reply.id);
    this.setState({
      rereplyinputShow: !this.state.rereplyinputShow,
    });
  };
  handleChange = event => {
    // console.log(event.target.value);
    // const self = this;
    if (event.target.value.length > 1000) {
      return false;
    }
    // console.log(event.target.value);
    this.setState({
      rereplyValue: event.target.value,
    });
  };
  loadReReplyListClear = () => {
    this.setState({
      depCount: this.state.totalReply,
      pageIndex: 1,
      rereplyList: [],
      loading: false,
      showReReply: false,
    });
  };
  loadReReplyList = () => {
    if (this.state.loadEnd === false && this.state.loading === false) {
      this.setState({ loading: true });
      const requestURL = `${process.env.API_URL}/reply/${
        this.props.reply.reviewId
      }/${this.props.reply.id}?page=${this.state.pageIndex}`;
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
              // console.log(resp.data.content.length);
              // console.log(resp.data.pageable.totalCnt);
              if (resp.data.content.length > 0) {
                const cloneList = [...this.state.rereplyList];
                const findRemoveIndex = [];
                for (let i = 0; i < cloneList.length; i += 1) {
                  for (let j = 0; j < resp.data.content.length; j += 1) {
                    if (resp.data.content[j].id === cloneList[i].id) {
                      findRemoveIndex.push(i);
                    }
                  }
                }
                if (findRemoveIndex.length > 0) {
                  for (let i = 0; i < findRemoveIndex.length; i += 1) {
                    // this.state.imageComponent.splice(findRemoveIndex[i], 1);
                    cloneList.splice(findRemoveIndex[i], 1);
                  }
                }

                this.setState({
                  depCount: this.state.depCount - resp.data.content.length,
                  pageIndex: (this.state.pageIndex += 1),
                  rereplyList: cloneList.concat(resp.data.content),
                  loading: false,
                  showReReply: true,
                  totalReply: resp.data.pageable.totalCnt,
                });
              }
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
    if (event.key === 'Enter') {
      if (!Boolean(event.target.value)) {
        return false;
      }
      this.handleSend();
    }
  };

  handleSend = () => {
    const sendValue = this.state.rereplyValue;
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
          reviewId: this.props.reply.reviewId,
          parentId: this.props.reply.id,
          content: sendValue,
        },
      })
        .then(resp => {
          // console.log(this.state.parentId);
          if (Boolean(resp.data)) {
            // console.log(resp.data);
            const cloneList = [...this.state.rereplyList];
            // console.log(cloneList);
            // cloneList.unshift(resp.data);
            const resData = resp.data;
            resData.new = true;
            // console.log(resp.data);
            cloneList.push(resp.data);
            // console.log(cloneList);
            this.setState({
              // curPage: pageIndex,
              rereplyList: cloneList,
              loading: false,
              rereplyValue: '',
              // totalReply: resp.data.pageable.totalCnt,
            });
            // this.props.handleLikeState(reviewId);
            // this.setState({ loading: false });
          }
        })
        .catch(error => {
          // console.log(error);
          if (Boolean(error.response.data.code)) {
          }
          this.setState({ loading: false });
        });
    }
  };

  render() {
    const { classes, reply } = this.props;
    const { rereplyinputShow, rereplyList, depCount, showReReply } = this.state;
    // console.log(reply);
    // console.log(reply.depCount);
    const avatarImg = Boolean(reply.user.profileImageUrl)
      ? reply.user.profileImageUrl
      : avatarDefault;

    return (
      <div>
        <div className={classes.root}>
          <div className={classes.rootContainer}>
            <div className={classes.avatarWrap}>
              <Avatar
                alt=""
                src={avatarImg}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            </div>
            {/* <div className={classes.inputWrap}>
              <div className={classes.inputLabel}>
                <input
                  type="text"
                  placeholder="메시지 추가..."
                  className={classes.input}
                  maxLength="100"
                  onKeyPress={this.handleSubmit}
                  value={reply.content}
                />
              </div>
             
            </div> */}
            <div className={classes.replyWrap}>
              <div className={classes.usernickname}>
                {reply.user.userNickName}{' '}
                <span className={classes.timeAt}>
                  <TimeAt date={reply.updateAt} />
                </span>
              </div>
              <div className={classes.content}>{reply.content}</div>
              {showReReply === true ? (
                <div className={classes.action}>
                  <Button
                    onClick={this.loadReReplyListClear}
                    className={classes.moreText}
                  >
                    댓글 접기
                  </Button>
                </div>
              ) : (
                ''
              )}
              {rereplyList &&
                rereplyList.map((item, index) => (
                  <ReReplyItem
                    key={item.id}
                    reply={item}
                    // handleFollowState={this.handleFollowState}
                  />
                ))}
              <div className={classes.action}>
                <Button
                  onClick={this.handleRReply}
                  className={classes.actionText}
                >
                  댓글
                </Button>
              </div>
              {depCount > 0 ? (
                <div className={classes.action}>
                  <Button
                    onClick={this.loadReReplyList}
                    className={classes.moreText}
                  >
                    댓글 {depCount}개 더보기
                  </Button>
                </div>
              ) : (
                ''
              )}
            </div>

            {rereplyinputShow && (
              <div className={classes.footer}>
                <div className={classes.footerContainer}>
                  <div className={classes.avatarReplyWrap}>
                    <Avatar
                      alt=""
                      src={avatarImgWriter}
                      className={classNames(
                        classes.avatar,
                        classes.bigReplyAvatar,
                      )}
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
                        value={this.state.rereplyValue}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  {/* <div className={classes.submitBtnWrap}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.submitBtn}
                      onClick={this.handleSend}
                    >
                      <Icon>edit_icon</Icon>
                    </Button>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ReplyItem.propTypes = {
  reply: PropTypes.object.isRequired,
};

// export default ReplyItem;
export default withStyles(styles)(ReplyItem);
