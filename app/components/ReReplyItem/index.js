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
import classNames from 'classnames';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
/* material-ui icon */
/* containers */
/* components */
import TimeAt from 'components/TimeAt';
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
    marginTop: 18,
    position: 'relative',
    // left: 0,
    // bottom: 0,
    width: '100%',
    // height: 72,
    display: 'table',
    // boxShadow: '0 -0.5px 0 0 rgba(0, 0, 0, 0.1)',
    zIndex: 8,
    // text-align: center;
    paddingLeft: 70,
  },
  rootContainer: {
    display: 'table-cell',
    verticalAlign: 'middle',
    zIndex: 12,
  },

  avatarWrap: {
    position: 'relative',
    float: 'left',
    // width: '10%',
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingTop: 0,
    marginRight: 18,
  },
  avatar: {
    // margin: 10,
    // border: 'solid 2px rgb(55, 161, 255)',
    // border: 'solid 0.01em rgb(153, 153, 153)',
  },
  bigAvatar: {
    // display: 'block',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // position: 'relative',
    width: 24,
    height: 24,
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
    paddingLeft: 50,
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
  },
  footerContainer: {
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingLeft: 10,
  },
  inputWrap: {
    position: 'relative',
    float: 'left',
    width: '80%',
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    height: 36,
    // paddingRight: 16,
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
  actionBottom: {
    paddingLeft: 70,
  },
  actionRereply: {
    textAlign: 'right',
    paddingBottom: 10,
    position: 'relative',
  },
  actionTextBlue: {
    color: 'rgb(21, 145, 255)',
  },
  actionTextRed: {
    color: 'rgb(255, 94, 77)',
  },
  actionRereplyWrap: {
    paddingLeft: 112,
  },
  popFooter: {
    textAlign: 'center',
  },
  popWrap: {
    // width: 295,
    marginRight: 0,
    marginLeft: 0,
  },
  popRoot: {
    textAlign: 'center',
    justifyContent: 'center',
    // borderTop: '1px',
    // marginRight: 0,
    // marginLeft: 0,
  },
  popPaper: {
    width: 295,
    textAlign: 'center',
    // marginRight: 0,
    // marginLeft: 0,
  },
  button: {
    // margin: 'auto',
    // display: 'block',
  },
  closeBtn: {
    color: '#000000',
    position: 'absolute',
    right: 5,
    top: 5,
  },
  dialogContent: {
    paddingTop: '20px',
  },
  cancelBtn: {
    marginRight: 30,
  },
  confirmBtn: {
    marginLeft: 30,
  },
  contentDelete: {
    paddingTop: 10,
  },
});
/* eslint-disable react/prefer-stateless-function */
class ReReplyItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      loadEnd: false,
      openDeletePop: false,
      deleteYn: this.props.reply.active < 1 ? false : true,
      editMode: false,
      replyValue: this.props.reply.content,
      originReplyContent: this.props.reply.content,
    };
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleEditModeCancel = this.handleEditModeCancel.bind(this);
    this.handleSendEdit = this.handleSendEdit.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
  }
  handleDelete = () => {
    this.setState({ openDeletePop: true });
  };
  handleDeleteClose = () => {
    this.setState({ openDeletePop: false });
  };
  handleDeleteAction = () => {
    console.log(this.props.reply.id);
    this.setState({ openDeletePop: false });
    const requestURL = `${process.env.API_URL}/reply/${this.props.reply.id}`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    if (accessToken) {
      axios({
        method: 'DELETE',
        url: requestURL,
        headers: {
          Accept: 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: token,
        },
      })
        .then(resp => {
          // console.log(resp);
          if (Boolean(resp.status)) {
            // console.log(resp.data);
            this.setState({
              // curPage: pageIndex,
              loading: false,
              deleteYn: true,
              // totalReply: resp.data.pageable.totalCnt,
            });
            this.setState({ loading: false });
            this.props.handleDeleteRereply(this.props.reply.id);
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

  handleChangeEdit = event => {
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
  handleEditMode = () => {
    this.setState({ editMode: true });
  };
  handleEditModeCancel = () => {
    this.setState({
      editMode: false,
      replyValue: this.state.originReplyContent,
    });
  };
  handleSendEdit = () => {
    const sendValue = this.state.replyValue;
    // console.log(sendValue);
    const requestURL = `${process.env.API_URL}/reply/${this.props.reply.id}`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    if (accessToken) {
      axios({
        method: 'PUT',
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
          // console.log(resp);
          if (Boolean(resp.data)) {
            // console.log(resp.data);
            this.setState({
              // curPage: pageIndex,
              loading: false,
              replyValue: resp.data.content,
              originReplyContent: resp.data.content,
              editMode: false,
            });
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
    const { classes, reply } = this.props;
    const { deleteYn, editMode, replyValue, originReplyContent } = this.state;
    // console.log(reply);
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
            <div className={classes.replyWrap}>
              <div className={classes.usernickname}>
                {reply.user.userNickName}{' '}
                <span className={classes.timeAt}>
                  <TimeAt date={reply.updateAt} />
                </span>
              </div>
              {editMode == true ? (
                <div className={classes.content}>
                  <div
                    className={classes.inputWrap}
                    style={{ width: '100%', zIndex: 10 }}
                  >
                    <div className={classes.inputLabel}>
                      <input
                        type="text"
                        // placeholder="메시지 추가..."
                        className={classes.input}
                        maxLength="100"
                        // onKeyPress={this.handleEdit}
                        value={replyValue}
                        onChange={this.handleChangeEdit}
                      />
                    </div>
                  </div>
                  <div
                    className={classNames(
                      // classes.action,
                      classes.actionRereply,
                    )}
                  >
                    <Button
                      onClick={this.handleEditModeCancel}
                      className={classes.actionText}
                    >
                      취소
                    </Button>
                    <Button
                      onClick={this.handleSendEdit}
                      className={classNames(
                        classes.actionText,
                        classes.actionTextBlue,
                      )}
                    >
                      완료
                    </Button>
                  </div>
                </div>
              ) : (
                <div className={classes.content}>{originReplyContent}</div>
              )}
            </div>
          </div>
        </div>
        <div className={classNames(classes.action, classes.actionRereplyWrap)}>
          {reply.userId == localStorage.getItem('userId') ? (
            <Button
              onClick={this.handleEditMode}
              className={classes.actionText}
            >
              수정
            </Button>
          ) : (
            ''
          )}
          {reply.userId == localStorage.getItem('userId') ? (
            <Button
              onClick={this.handleDelete}
              className={classNames(classes.actionText, classes.actionTextRed)}
            >
              삭제
            </Button>
          ) : (
            ''
          )}
        </div>
        <Dialog
          open={this.state.openDeletePop}
          onClose={this.handleDeleteClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className={classes.popWrap}
          fullWidth
          // maxWidth="false"
          classes={{
            root: classes.popRoot,
            paper: classes.popPaper,
          }}
        >
          <DialogContent className={classes.dialogContent}>
            <DialogContentText id="alert-dialog-description">
              댓글을 삭제하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogActions
            // className={classes.popFooter}
            classes={{
              root: classes.popRoot,
              // paper: classes.popFooter,
            }}
          >
            <Button
              onClick={this.handleDeleteClose}
              color="secondary"
              className={classes.cancelBtn}
            >
              취소
            </Button>
            <Button
              onClick={this.handleDeleteAction}
              color="secondary"
              className={classes.confirmBtn}
            >
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ReReplyItem.propTypes = {
  reply: PropTypes.object.isRequired,
  handleDeleteRereply: PropTypes.func.isRequired,
};

// export default ReplyItem;
export default withStyles(styles)(ReReplyItem);
