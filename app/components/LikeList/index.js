/**
 *
 * LikeList
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
/* material-ui core */
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
/* material-ui icon */
/* containers */
/* components */
import FollowAjxButton from 'components/FollowAjxButton';
/* image */
import avatarDefault from '../../images/ic-avatar.png';
/* ref */
import messages from './messages';

import * as bsLock from 'utils/bodyScrollLock';

import axios from 'axios';

const styles = {
  root: {
    borderTopLeftRadius: '18px !important',
    borderTopRightRadius: '18px !important',
  },
  dialogBox: {
    borderTopLeftRadius: '18px !important',
    borderTopRightRadius: '18px !important',
    top: '50%',
  },
  appBar: {
    position: 'sticky',
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
    top: 0,
    boxShadow: '0 0.5px 0 0 rgba(0, 0, 0, 0.2)',
    height: '47.8px',
  },
  flex: {
    flex: 1,
    paddingLeft: 20,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: '#7c7c7c',
  },
  avatar: {
    width: '36px',
    height: '36px',
  },
  cubeCaption: {
    paddingRight: 30,
    fontFamily: 'SFProDisplay',
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: '#1591ff',
  },
  totalLiterCube: {
    paddingRight: 30,
    float: 'right',
    fontFamily: 'SFProDisplay',
    fontSize: 15,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: '#1591ff',
  },
  totalLiterCubeNon: {
    paddingRight: 30,
    paddingTop: 10,
    float: 'right',
    fontFamily: 'SFProDisplay',
    fontSize: 15,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: '#1591ff',
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

/* eslint-disable react/prefer-stateless-function */
class LikeList extends React.PureComponent {
  targetElem = null;

  constructor(props) {
    super(props);
  }

  state = {
    open: false,
    reviewId: false,
    totalReward: 0,
    likelist: null,
    loading: false,
    curPage: 1,
    loadEnd: false,
    totalVoter: 0,
  };

  componentDidMount() {
    this.targetElem = document.querySelector('#app');
  }

  componentWillUnmount() {
    bsLock.clearAllBodyScrollLocks();
  }

  handleClickOpen = (e) => {
    // console.log(this.state.reviewId);
    console.log(this.props.reviewId);
    this.loadLikeList(this.props.reviewId);
    this.loadTotalReward(this.props.reviewId);
    // this.loadLikeList(this.state.reviewId);
    // this.loadTotalReward(this.state.reviewId);
    this.setState({ open: true });
    bsLock.disableBodyScroll(this.targetElement);
  };

  handleClose = (e) => {
    this.setState({ open: false });
    bsLock.enableBodyScroll(this.targetElement);
  };

  handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      this.loadLikeMore(this.props.reviewId);
    }
  };

  loadTotalReward = (reviewId) => {
    if(this.state.loading === false) {
      this.setState({'loading': true});
      const requestURL = `${process.env.API_URL}/review/reward/${reviewId}`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;

      let headerObj = {
        'Accept': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      }
      if(accessToken)
        headerObj.Authorization = token;

      axios({
        method: 'GET',
        url: requestURL,
        headers: headerObj,
      }).then(resp => {
        if(Boolean(resp.data)) {
          console.log(']]]-------------load TotalReward-------------[[[');
          console.log(resp.data);
          this.setState({'totalReward': resp.data.reward});
          this.setState({'totalVoter': resp.data.totalCcount});
          this.setState({'loading': false});
        }
      }).catch(error => {
          console.log(error);
      });
    }
  }

  loadLikeList = (reviewId) => {
    if(this.state.loadEnd === false && this.state.loading === false) {
      this.setState({'loading': true});
      const requestURL = `${process.env.API_URL}/engagement/${reviewId}?page=1`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;

      let headerObj = {
        'Accept': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      }
      if(accessToken)
        headerObj.Authorization = token;

      axios({
        method: 'GET',
        url: requestURL,
        headers: headerObj,
      }).then(resp => {
        if(Boolean(resp.data)) {
          console.log(']]]-------------loaded likelist-------------[[[');
          this.setState({'curPage': 1});
          this.setState({'likelist': resp.data});
          console.log(resp.data);
          this.setState({'loading': false});
        }
      }).catch(error => {
          if(error.response.data.code === 300104) {
            console.log("no more data");
            this.setState({'loadEnd': true});
          } else if(error.response.data.code === 500000) {
            console.log("likelist empty > ERROR");  
          }
          console.log(error.response);
      });
    }
  }

  loadLikeMore = (reviewId) => {
    if(this.state.loadEnd === false && this.state.loading === false) {
      this.setState({'loading': true});
      const nextPage = this.state.curPage + 1;
      const requestURL = `${process.env.API_URL}/engagement/${reviewId}?page=${nextPage}`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;

      let headerObj = {
        'Accept': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      }
      if(accessToken)
        headerObj.Authorization = token;

      axios({
        method: 'GET',
        url: requestURL,
        headers: headerObj,
      }).then(resp => {
        console.log(resp);
        if(Boolean(resp.data)) {
          console.log(']]]-------------loaded loadLikeMore-------------[[[');
          this.setState({'curPage': nextPage});
          const addData = this.state.likelist.concat(resp.data);
          this.setState({'likelist': addData});
          this.setState({'loading': false});
        }
      }).catch(error => {
          if(error.response.data.code === 300104) {
            console.log("no more data");
            this.setState({'loadEnd': true});
          } else if(error.response.data.code === 500000) {
            console.log("likelist empty > ERROR");  
          }
          console.log(error.response);
      });
    }
  }

  render() {
    const { classes, reviewId, rewardLitercube } = this.props;
    const { totalVoter, totalReward, likelist } = this.state;
    
    return (
      <div onScroll={this.handleScroll}>
        {(rewardLitercube && rewardLitercube > 0)?(
          <Button className={classes.totalLiterCube} onClick={this.handleClickOpen}>{rewardLitercube} LCB</Button>
        ):(
          <span className={classes.totalLiterCubeNon} >{rewardLitercube} LCB</span>
        )}

        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          scroll="paper"
          TransitionComponent={Transition}
          className={classes.dialogBox}
          classes={{
            root: classes.root,
            paper: classes.root,
          }}
        >
          <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                총 {totalVoter} 명
              </Typography>
              <div className={classes.cubeCaption}>
                {totalReward} LCB
              </div>
            </Toolbar>
          </AppBar>
          <List>
            {likelist && likelist.map((item, idx) => {
                  const elAvatar =
                  item.user.profileImageSmallUrl != null ? (
                    <Avatar
                      aria-label="Recipe"
                      className={classes.avatar}
                      src={item.user.profileImageSmallUrl}
                    />
                  ) : (
                    <img
                      aria-label="Recipe"
                      className={classes.avatar}
                      src={avatarDefault}
                    />
                  );
              return (
              <div key={idx}>
                <CardHeader
                  className={classes.cardHeader}
                  avatar={elAvatar}
                  action={
                    <FollowAjxButton
                      followEmail={item.user.username}
                      followYn={item.followYn}
                      followId={item.user.id}
                    />
                  }
                  title={item.user.userNickName}
                />
              </div>
            )
            })}
          </List>
        </Dialog>
      </div>
    );
  }
}

LikeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LikeList);

