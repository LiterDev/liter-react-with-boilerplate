/**
 *
 * ActionListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import { makeSelectUserID } from 'containers/FollowActionPage/selectors';
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

import Header from 'components/Header';

import { makeSelectPageType } from 'containers/FollowActionPage/selectors';

import { loadList, setFollow } from './actions';
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
    width: '51px',
    height: '17px',
    fontFamily: 'AppleSDGothicNeo',
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
    width: '34px',
    height: '16px',
    fontFamily: 'AppleSDGothicNeo',
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
});

/* eslint-disable react/prefer-stateless-function */
export class ActionListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
    this.onFollowCtrlClick = this.onFollowCtrlClick.bind(this);
  }

  componentDidMount() {
    if (this.props.userid && this.props.userid.trim().length > 0)
      this.props.onLoadList();
  }

  onFollowCtrlClick = followid => {
    this.props.onSetFollow(followid);
  };

  render() {
    const { classes } = this.props;
    const { followType, contents } = this.props;

    const nType = followType == 'follow' ? 0 : 1;
    const messages = Tmessages[nType];

    console.log("]-------------- USERID -----------[");
    console.log(this.props.userid);

    let content = null;
    const followArray = contents.content != null ? contents.content : [];

    if (this.props.contents != false) {
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
                alt={item.username}
                src={(item.profileImageUrl) ? item.profileImageUrl: avatarDefault }
                className={classes.avatar}
              />
            </div>
          </ListItemIcon>
          <div className={classes.listItem}>
            <ListItemText>
              <Typography variant="body1" className={classes.nameFont}>
                {item.username}
              </Typography>
              <Typography variant="caption">
                <FormattedMessage {...messages.reviewCaption} />{' '}
                {item.reviewCount}
              </Typography>
              <Typography variant="caption">{item.tags}</Typography>
            </ListItemText>
          </div>
          <div>
            <FollowCtrl followid={item.id} onFollow={this.onFollowCtrlClick} />
          </div>
        </ListItem>
      ));
    }

    return (
      <div>
        <div className={classes.container}>
          <Header
            headerTitle={<FormattedMessage {...messages.headerTitle} />}
          />
        </div>
        <div className={classes.root}>
          <Typography className={classes.followCaption}>
            <FormattedMessage {...messages.followCaption} />{' '}
            {followArray.length}
          </Typography>
          <List>{content}</List>
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
  userid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onSetFollow: PropTypes.func,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  contents: makeSelectListContents(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  userid: makeSelectUserID(),
  type: makeSelectPageType(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadList: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadList());
    },
    onSetFollow: followid => {
      dispatch(setFollow(followid));
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
