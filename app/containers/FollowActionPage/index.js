/**
 *
 * FollowActionPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import ActionListContainer from 'containers/ActionListContainer';

import { makeSelectFollowActionPage } from './selectors';
import { makeSelectPageType } from './selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FollowActionPage extends React.PureComponent {
  render() {
    const { followType } = this.props;
    const userId = this.props.match.params.userId;

    // console.log("]-------------- USERID -----------[");
    // console.log(userId);
    // console.log(followType);

    return (
      <div>
        <Helmet>
          <title>FollowActionPage</title>
          <meta name="description" content="Description of FollowActionPage" />
        </Helmet>
        <ActionListContainer followType={followType} userid={userId} />
      </div>
    );
  }
}

FollowActionPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  followactionpage: makeSelectFollowActionPage(),
  followType: makeSelectPageType(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'actionPage', reducer });
const withSaga = injectSaga({ key: 'actionPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FollowActionPage);
