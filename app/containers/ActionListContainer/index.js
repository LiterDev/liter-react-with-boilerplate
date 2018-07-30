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

import { loadList } from './actions';
import { makeSelectList, makeSelectListContents } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ActionListContainer extends React.PureComponent {
  componentDidMount() {
    if (this.props.userid && this.props.userid.trim().length > 0)
      this.props.onLoadList();
  }

  render() {
    console.log('render--');
    console.log(this.props.userid);

    console.log(this.props.contents);
    console.log(this.props.list);

    if (this.props.contents) {
      console.log(this.props.contents);
    }

    console.log(typeof this.props.contents[0]);

    return (
      <div>
        <div>
          <p>콘텐츠보기</p>
          {this.props.list.contents}
        </div>
        <FormattedMessage {...messages.header} />
        <FollowCtrl followid={this.props.contents[0]} />
        <FollowCtrl followid={this.props.contents[1]} />
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
)(ActionListContainer);
