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

// include FollowCtrl
import FollowCtrl from 'containers/FollowCtrl';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { loadList } from './actions';
import { makeSelectList, makeSelectListContents } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  header: {
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
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing.unit,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ActionListContainer extends React.PureComponent {
  componentDidMount() {
    if (this.props.userid && this.props.userid.trim().length > 0)
      this.props.onLoadList();
  }

  render() {
    const { classes } = this.props;
    const { contents } = this.props;

    let content = null;

    const followArray = contents;
    if (contents !== false) {
      content = followArray.map((item, idx) => (
        <ListItem
          key={`item-${item.id}`}
          item={item}
          className={classes.listItem}
        >
          <ListItemIcon>
            <div className={classes.row}>
              <Avatar
                alt="Remy Sharp"
                src={item.profileImageUrl}
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
                리뷰수 {item.reviewCount}
              </Typography>
              <Typography variant="caption">{item.tags}</Typography>
            </ListItemText>
          </div>
          <FollowCtrl
            key={`${item.id}`}
            idx={idx}
            userid={item.id}
            isFollow={false}
          />
        </ListItem>
      ));
    }

    return (
      <div className={classes.root}>
        <Typography className={classes.header}>
          팔로워 {this.props.contents.length}
        </Typography>
        <List>{content}</List>
      </div>
    );

    // return (
    //   <div>
    //     <div>
    //       <p>콘텐츠보기</p>
    //       {this.props.list.contents}
    //     </div>
    //     <FormattedMessage {...messages.header} />
    //     <FollowCtrl followid={this.props.contents[0]} />
    //     <FollowCtrl followid={this.props.contents[1]} />

    //     <div>

    //     </div>

    //   </div>
    // );
  }
}

ActionListContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  contents: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadList: PropTypes.func,
  userid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  contents: makeSelectListContents(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  userid: makeSelectUserID(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadList: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadList());
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
