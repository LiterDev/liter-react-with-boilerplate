/**
 *
 * ActionListContainer
 *
 */
/* react ref*/
/* material-ui core */
/* material-ui icon */
/* containers */
/* components */
/* image */
/* ref */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import FollowCtrl from 'containers/FollowCtrl';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import PopupHeader from 'components/popups/PopupHeader';

import { loadList, setFollow, setUnFollow } from './actions';
import { makeSelectList, makeSelectListContents } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Tmessages from './messages';
import avatarDefault from '../../images/ic-avatar.png';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
  },
  followCaption: {
    lineHeight: '40px',
    height: '40px',
    textAlign: 'left',
    paddingLeft: '10px',
    backgroundColor: '#f8f8f8',
  },
  listItem: {
    width: '100%',
  },
  nameFont: {
    width: '100%',
    height: '17px',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '14px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '-0.2px',
    color: '#111111',
  },
  row: {
    justifyContent: 'center',
  },
  avatar: {
    width: '50px',
    height: '50px',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  button: {
    backgroundColor: '#1591ff',
    color: 'white',
    margin: theme.spacing.unit,
    width: '89px',
    height: '32px',
    borderRadius: '3px',
  },
  buttonText: {
    height: '16px',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '13px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  nolistcontainer: {
    backgroundColor: '#ffffff',
  },
  nolist: {
    height: '300px',
    textAlign: 'center',
    margin: '100px 0 0 0',
  }
});

/* eslint-disable react/prefer-stateless-function */
export class ActionListContainer extends React.PureComponent {
  state = {
    followFlag: null,
  }

  constructor(props) {
    super(props);
    console.log(props);
    this.onFollowCtrlClick = this.onFollowCtrlClick.bind(this);
  }

  componentDidMount() {
    this.props.onLoadList(this.props.fType);
  }

  onFollowCtrlClick = followId => {
    console.log("onFollowCtrlClick>>>>>>>>>>>>>>>");
    console.log(followId);
    this.props.onSetFollow(followId);
  };

  onUnFollowCtrlClick = followId => {
    console.log("onUnFollowCtrlClick>>>>>>>>>>>>>>>");
    console.log(followId);
    this.props.onSetUnFollow(followId);
  };

  render() {
    const { classes } = this.props;
    const { followType, contents } = this.props;
    const { fType } = this.props;

    const messages = Tmessages[(fType == 'follow')? 0 : 1];

    let content = null;
    const followArray = contents.content != null ? contents.content : [];

    console.log("this.props.contents-----------------------");
    console.log(followArray);

    if (followArray.length > 0) {
      const filledArray = this.props.contents.content;
      content = filledArray.map((item, idx) => (
        <ListItem
          key={`item-${item.id}`}
          item={item}
          className={classes.listItem}
        >
          <ListItemIcon>
            <div className={classes.row}>
              <Avatar
                alt={item.userNickName}
                src={(item.profileImageSmallUrl) ? item.profileImageSmallUrl: avatarDefault }
                className={classes.avatar}
              />
            </div>
          </ListItemIcon>
          <div className={classes.listItem}>
            <ListItemText>
              <Typography variant="body1" className={classes.nameFont}>
                {item.userNickName}
              </Typography>
              <Typography variant="caption">
                <FormattedMessage {...messages.reviewCaption} />{' '}
                {item.reviewCount}
              </Typography>
              <Typography variant="caption">{item.tags}</Typography>
            </ListItemText>
          </div>
          <div>
            <FollowCtrl 
              followId={item.id} 
              onUnFollow={this.onUnFollowCtrlClick} 
              onFollow={this.onFollowCtrlClick} 
              followYn={(item.followStatus == 'UNFOLLOW')? 0: 1} 
            />
          </div>
        </ListItem>
      ));

      return (
        <div>
          <div className={classes.container}>
            <PopupHeader
              headerTitle={<FormattedMessage {...messages.headerTitle} />}
            />
          </div>
          <div className={classes.nolistcontainer}>
            <Typography className={classes.followCaption}>
              <FormattedMessage {...messages.followCaption} />{' '}
              {followArray.length}
            </Typography>
            <List>{content}</List>
          </div>
        </div>
      );
    } 
    
    return (
      <div>
        <div className={classes.container}>
          <PopupHeader
            headerTitle={<FormattedMessage {...messages.headerTitle} />}
          />
        </div>
        <div className={classes.root}>
          <Typography className={classes.followCaption}>
            <FormattedMessage {...messages.followCaption} />{' '}
            {followArray.length}
          </Typography>
          <div className={classes.nolist}>
             <FormattedMessage {...messages.nolistCaption} />
          </div>
        </div>
      </div>
    );
  }
}

ActionListContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  contents: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadList: PropTypes.func,
  onSetFollow: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  contents: makeSelectListContents(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadList: (followType) => {
      dispatch(loadList(followType));
    },
    onSetFollow: followid => {
      dispatch(setFollow(followid));
    },
    onSetUnFollow: followid => {
      dispatch(setUnFollow(followid));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'actionlist', reducer });
const withSaga = injectSaga({ key: 'actionlist', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ActionListContainer);
