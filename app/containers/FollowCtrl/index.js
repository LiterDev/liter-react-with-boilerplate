/**
 *
 * FollowCtrl
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

// change Selector GLOBAL STATE - for userid;
import { makeSelectUserID } from 'containers/ActionListContainer/selectors';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeSelectIsFollow } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { followAction } from './actions';

const styles = theme => ({
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
});

/* eslint-disable react/prefer-stateless-function */
export class FollowCtrl extends React.PureComponent {
  render() {
    const { classes } = this.props;
    const { followid } = this.props;

    console.log(followid);

    return (
      <div>
        <Button
          className={classes.button}
          userid={this.props.userId}
          onClick={this.props.onFollow}
        >
          <Typography className={classes.buttonText}>
            <FormattedMessage {...messages.buttonTitle} />
          </Typography>
        </Button>
      </div>
    );
  }
}

FollowCtrl.propTypes = {
  userid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isfollow: PropTypes.bool,
  defaultAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userid: makeSelectUserID(),
  isFollow: makeSelectIsFollow(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFollow: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(followAction());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'followCtrl', reducer });
const withSaga = injectSaga({ key: 'followCtrl', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(FollowCtrl);
