/**
 *
 * Reviews
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

import { withStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import ReviewList from 'components/ReviewList';

import makeSelectReviews from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { loadList } from './actions';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class Reviews extends React.PureComponent {

  componentDidMount() {
    const { loadReviewList } = this.props;
    loadReviewList();
  }

  render() {
    // const { classes } = this.props;
    const { reviews } = this.props;
    return (
      <div>
        <Header headerTitle={<FormattedMessage {...messages.header} />} />
        <ReviewList reviews={ reviews }/>
      </div>
    );
  }
}

Reviews.propTypes = {
  loadReviewList: PropTypes.func,
  reviews: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  reviews: makeSelectReviews(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadReviewList: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      console.log("initialize review list");
      dispatch(loadList());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'reviews', reducer });
const withSaga = injectSaga({ key: 'reviews', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(Reviews);
