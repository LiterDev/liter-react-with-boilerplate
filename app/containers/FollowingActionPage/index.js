/**
 *
 * FollowingActionPage
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
/* material-ui core */
/* material-ui icon */
/* containers */
import ActionListContainer from 'containers/ActionListContainer';
/* components */
/* image */
/* ref */
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { makeSelectFollowingActionPage, makeSelectPageType } from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class FollowingActionPage extends React.PureComponent {
  render() {
    const { followType } = this.props;
    const userId = this.props.match.params.userId;
    console.log(userId);

    return (
      <div>
        <Helmet>
          <title>FollowActionPage</title>
          <meta name="description" content="Description of FollowActionPage" />
        </Helmet>
        {/* <ActionListContainer followType={followType} userid={userId} /> */}
        <ActionListContainer fType='following' userId={userId} />
      </div>
    );
  }
}

FollowingActionPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  followingactionpage: makeSelectFollowingActionPage(),
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
)(FollowingActionPage);
