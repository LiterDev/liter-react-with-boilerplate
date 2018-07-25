/**
 *
 * MyPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Section from './Section';
import messages from './messages';
import { changeUsername } from './actions';
import { loadRepos } from '../App/actions';
import { makeSelectUsername, makeSelectMyPage } from './selectors';
import reducer from './reducer';
import saga from './saga';

// import messages from './messages';

// import Panel from './Panel';

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
  render() {
    const { loading, error, repos, rewardsReviews } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
      rewardsReviews,
    };

    return (
      <article>
        <Helmet>
          <title>My Page</title>
          <meta name="description" content="Description of MyPage" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.onSubmitForm}
              >
                로딩
              </Button>
            </Form>
            {<ReposList {...reposListProps} />}
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
      </article>
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
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  rewardsReviews: PropTypes.oneOfType([PropTypes.array(), PropTypes.bool()]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  rewardsReviews: makeSelectMyPage(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),

    onSubmitForm: evt => {
      console.log('homePage');
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
      alert('1111');
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
)(MyPage);
