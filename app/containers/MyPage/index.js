/**
 *
 * MyPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import H2 from 'components/H2';
import Header from 'components/Header';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
// import Form from './Form';
import Section from './Section';
import messages from './messages';
import defaultMessage from '../App/messages';
import homeMessage from '../HomePage/messages';

import { mypageAction } from './actions';
import { makeSelectMyPage } from './selectors';

import reducer from './reducer';
import saga from './saga';

// import messages from './messages';

// import Panel from './Panel';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
  },
};

const Panel = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: space-between;
  background: #e3e3e3;
`;

const Tab = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: space-between;
`;

const TabItem = styled.div`
  text-align: center;
  width: 50%;
  height: 100px;
  display: flex;
  align-items: space-between;
`;

const RewardingList = styled.div`
  text-align: center;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: space-between;
`;

const RewardingListItem = styled.div`
  text-align: center;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: space-between;
`;
/* eslint-disable react/prefer-stateless-function */
export class MyPage extends React.PureComponent {
  state = {
    userId: '',
  };
  handleChange = e => {
    this.setState({
      userId: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      userId: '',
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.container}>
          <Header headerTitle={<FormattedMessage {...messages.header} />} />
        </div>
        <div>
          <CenteredSection>
            <p>
              <FormattedMessage {...defaultMessage.startProjectHeader} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...homeMessage.trymeHeader} />
            </H2>
            <form onSubmit={this.props.onSubmitForm}>
              <FormattedMessage {...homeMessage.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...homeMessage.trymeAtPrefix} />
              </AtPrefix>
              <Input
                name="userId"
                placeholder="아이디"
                value={this.state.userId}
                onChange={this.handleChange}
                // value={this.props.username}
                // onChange={this.props.onChangeUsername}
              />
              <H2>
                <div>{this.state.id}</div>
              </H2>
              <Button type="submit"> 로딩 </Button>
            </form>
            <Panel />
            <Tab>
              <TabItem>리뷰</TabItem>
              <TabItem>보상 내역</TabItem>
            </Tab>
            <RewardingList>
              보상 진행중인 리뷰가 없습니다.
              <RewardingListItem />
            </RewardingList>
          </Section>
        </div>
      </div>
    );
  }
}
/** Panel
   Tab
   LiterCoin
   rewarding review
   <LikeCount>
* */

MyPage.propTypes = {
  id: PropTypes.string,
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // rewardsReviews: PropTypes.oneOfType([PropTypes.array(), PropTypes.bool()]),
  onSubmitForm: PropTypes.func,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  rewardsReviews: makeSelectMyPage(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),

    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      const data = new FormData(evt.target);
      dispatch(mypageAction(data));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'myPage', reducer });
const withSaga = injectSaga({ key: 'myPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(MyPage);
