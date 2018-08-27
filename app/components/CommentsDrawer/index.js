/**
 *
 * CommentsDrawer
 *
 */

/* react ref */
import React from 'react';
import classNames from 'classnames';
import axios from 'axios';

/* material-ui core */
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import DialogActions from '@material-ui/core/DialogActions';
import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

/* material-ui icon */
import BackArrowIcon from '@material-ui/icons/KeyboardArrowLeft';
import { withStyles } from '@material-ui/core/styles';
/* containers */
/* containers */
/* components */
/* image */
import avatarDefault from 'images/ic-avatar.png';
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { isThisISOWeek } from 'date-fns';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // paddingTop: theme.spacing.unit * 0,
    // textAlign: 'center',
    display: 'flex',
  },
  top_box: {
    // width: '375px',
    // height: 64,
    height: theme.spacing.unit * 8,
    // background: {
    //   color: '#ffffff',
    // },
    boxShadow: '0 0.5px 0 0 #eeeeee',
    transition: theme.transitions.create('width'),
    '@media print': {
      // position: 'absolute',
    },
  },
  container: {
    paddingTop: theme.spacing.unit * 0,
    height: '100vh',
    paddingLeft: 30,
    paddingRight: 30,
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  toolbar: {
    height: '100vh',
    textAlign: 'center',
  },
  paper: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  titleBox: {
    width: '100%',
    paddingRight: '48px',
    textAlign: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#111111',
  },
  bottomInputBar: {
    position: 'fixed',
    bottom: '0',
    width: '100vh',
    height: '72px',
    backgroundColor: '#fcfcfc',
    display: 'flex',
  },
  textInputBox: {
    width: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fafafa',
    borderBottomColor: 'rgba(0,0,0,0.0) !important',
    borderRadius: '3px !important',
    // height: 44,
  },
  avatarBox: {
    flexGrow: '0',
    padding: '18px 16px 18px 16px',
  },
  textBox: {
    width: '70%',
  },
  textField: {
    border: 'solid 1px #eeeeee !important',
    borderRadius: '19px',
    backgroundColor: '#fafafa',
    paddingLeft: '20px',
  },
});

/* eslint-disable react/prefer-stateless-function */
class CommentsDrawer extends React.PureComponent {
  state = {
    comments: [],
  };
  handleOnOpen = () => {
    const { open, loadComments, reviewId } = this.props;
    const parentId = 0;
    const self = this;
    console.log(`handleOnOpen---reviewId::${reviewId},open::${open}`);
    if (open) {
      const requestURL = `${
        process.env.API_URL
      }/reply/${reviewId}/${parentId}?page=1`;
      axios({
        method: 'GET',
        url: requestURL,
        headers: {
          Accept: 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then(resp => {
          if (Boolean(resp.data)) {
            // console.log(resp);
            self.setState({
              comments: resp.data.content,
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  handleKey = e => {
    console.log(e.key);
    if (e.key === 'Enter') {
      const requestURL = `${process.env.API_URL}/reply`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;
      axios({
        method: 'POST',
        url: requestURL,
        headers: {
          Accept: 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: token,
        },
        data: JSON.stringify({
          reviewId: this.props.reviewId,
          parentId: this.props.parentId ? this.props.parentId : 0,
          content: e.target.value,
        }),
      })
        .then(resp => {
          // if (Boolean(resp.data)) {
          console.log(resp);
          // }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  componentDidMount() {
    console.log('mount');
  }
  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    const {
      classes,
      open,
      onOpen,
      onClose,
      handleClose,
      commnetsDrawer,
    } = this.props;

    // iOS is hosted on high-end devices. We can enable the backdrop transition without
    // dropping frames. The performance will be good enough.
    // So: <SwipeableDrawer disableBackdropTransition={false} />
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    console.log('rerender');
    return (
      <div>
        <Hidden>
          <SwipeableDrawer
            classes={{
              paper: classNames(classes.paper, 'algolia-drawer'),
            }}
            disableBackdropTransition={!iOS}
            variant="temporary"
            open={open}
            // onOpen={this.handleOnOpen()}
            // onClose={onClose}
            // ModalProps={{
            //   keepMounted: true,
            // }}
            anchor="right"
          >
            <AppBar position="fixed" className={classes.top_box}>
              <Toolbar className={classes.toolbar}>
                <IconButton
                  className={classes.ic_round_home}
                  color="inherit"
                  aria-label="Menu"
                  onClick={handleClose}
                >
                  {/* <MenuIcon /> */}
                  {/* <Link to="/"> */}
                  <BackArrowIcon className={classes.icon} />

                  {/* </Link> */}
                </IconButton>
                <div className={classes.titleBox}>
                  <Typography variant="title" className={classes.titleText}>
                    댓글
                  </Typography>
                </div>
              </Toolbar>
            </AppBar>
            <div className={classes.container}>
              <List>
                {this.state.comments &&
                  this.state.comments.map(comment => (
                    <ListItem
                      key={comment.id}
                      dense
                      button
                      className={classes.listItem}
                    >
                      <Avatar
                        alt=""
                        src={
                          // myPages.userData.profileImageSmallUrl
                          //   ? myPages.userData.profileImageSmallUrl
                          // : avatarDefault
                          avatarDefault
                        }
                        className={classNames(
                          classes.avatar,
                          classes.bigAvatar,
                        )}
                        // onClick={() => this.changeSelfie()}
                      />
                      <ListItemText>{comment.content}</ListItemText>
                    </ListItem>
                  ))}
              </List>
            </div>
            <div className={classes.bottomInputBar}>
              <Divider />
              <div className={classes.textInputBox}>
                <div className={classes.avatarBox}>
                  <Avatar
                    alt=""
                    src={
                      // myPages.userData.profileImageSmallUrl
                      //   ? myPages.userData.profileImageSmallUrl
                      // : avatarDefault
                      avatarDefault
                    }
                    className={classNames(classes.avatar, classes.bigAvatar)}
                    // onClick={() => this.changeSelfie()}
                  />
                </div>
                <div classNames={classes.textBox}>
                  <TextField
                    id="comment"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    placeholder="메시지 추가..."
                    fullWidth
                    margin="normal"
                    className={classes.textField}
                    rowsMax="5"
                    onKeyPress={this.handleKey}
                  />
                </div>
              </div>
            </div>
          </SwipeableDrawer>
        </Hidden>
      </div>
    );
  }
}

CommentsDrawer.propTypes = {};

export default withStyles(styles)(CommentsDrawer);
