/**
 *
 * ReplyItem
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
/* material-ui core */
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
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
});
/* eslint-disable react/prefer-stateless-function */
class ReReplyItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, reply } = this.props;
    console.log(reply);
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
              <div className={classes.content}>{reply.content}</div>
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
          </div>
        </div>
      </div>
    );
  }
}

ReReplyItem.propTypes = {
  reply: PropTypes.object.isRequired,
};

// export default ReplyItem;
export default withStyles(styles)(ReReplyItem);
