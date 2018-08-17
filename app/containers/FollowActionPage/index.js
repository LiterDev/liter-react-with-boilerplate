/**
 *
 * FollowActionPage
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
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { makeSelectFollowActionPage, makeSelectPageType } from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class FollowActionPage extends React.PureComponent {
  render() {
    const { followType } = this.props;
    const userId = this.props.match.params.userId;

    return (
      <div>
        <Helmet>
          <title>FollowActionPage</title>
          <meta name="description" content="Description of FollowActionPage" />
        </Helmet>
        {/* <ActionListContainer followType="follow" userId={userId} /> */}
        <ActionListContainer fType='follow' userId={userId} />
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
