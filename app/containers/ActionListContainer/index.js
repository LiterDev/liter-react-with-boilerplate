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
import StyledLink from './StyledLink';

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
  constructor(props) {
    super(props);
    this.state = {
      followFlag: null,
      followContents: false,
    }
    this.onFollowCtrlClick = this.onFollowCtrlClick.bind(this);
    this.state.followContents = this.props.contents;
  }

  componentDidMount() {
    this.props.onLoadList(this.props.fType, this.props.userId);
  }

  onFollowCtrlClick = followId => {
    // console.log("onFollowCtrlClick>>>>>>>>>>>>>>>");
    // console.log(followId);
    this.props.onSetFollow(followId, this.props.fType, this.props.userId);
  };

  onUnFollowCtrlClick = followId => {
    // console.log("onUnFollowCtrlClick>>>>>>>>>>>>>>>");
    // console.log(followId);
    this.props.onSetUnFollow(followId, this.props.fType, this.props.userId);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      followContents: nextProps.contents,
    });
  }

  render() {
    const { classes, followType, fType } = this.props;
    const { followContents } = this.state;

    const messages = Tmessages[(fType == 'follow')? 0 : 1];

    let content = null;
    const followArray = followContents != false ? followContents.content : [];

    // console.log("this.props.followArray-----------------------");
    // console.log(followArray);

    if (followArray.length > 0) {
      const filledArray = followContents.content;
      content = filledArray.map((item, idx) => (
        <ListItem
          key={`item-${item.id}`}
          item={item}
          className={classes.listItem}
        >
          <ListItemIcon>
            <div className={classes.row}>
              <StyledLink to={`/profile/${item.id}`}>
                <Avatar
                  alt={item.userNickName}
                  src={(item.profileImageSmallUrl) ? item.profileImageSmallUrl: avatarDefault }
                  className={classes.avatar}
                />
              </StyledLink>
            </div>
          </ListItemIcon>
          <div className={classes.listItem}>
            <ListItemText>
              <Typography variant="body1" className={classes.nameFont}>
                <StyledLink to={`/profile/${item.id}`}>
                  {item.userNickName}
                </StyledLink>
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
              followEmail={item.username}
              followId={item.id} 
              onUnFollow={this.onUnFollowCtrlClick} 
              onFollow={this.onFollowCtrlClick} 
              followYn={(item.followStatus === 'UNFOLLOW')? 0: 1} 
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
    onLoadList: (followType, userId) => {
      dispatch(loadList(followType, userId));
    },
    onSetFollow: (followid, followType, userId) => {
      dispatch(setFollow(followid, followType, userId));
    },
    onSetUnFollow: (followid, followType, userId) => {
      dispatch(setUnFollow(followid, followType, userId));
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
