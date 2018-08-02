/**
 *
 * ReviewCardSlider
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

import ReviewCardSlide from 'components/ReviewCardSlide';

import makeSelectReviewCardSlider from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { withStyles } from '@material-ui/core/styles';

import { loadList } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ReviewCardSlider extends React.PureComponent {
  componentDidMount() {
    const { loadReviewList } = this.props;
    loadReviewList();
  }

  render() {
    const { classes } = this.props;
    const { reviews, user } = this.props;

    return (
      <div>
        <ReviewCardSlide reviews={reviews} user={user} />
      </div>
    );
  }
}

ReviewCardSlider.propTypes = {
  loadReviewList: PropTypes.func,
  reviews: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  reviews: makeSelectReviewCardSlider(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadReviewList: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadList());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'reviewCardSlider', reducer });
const withSaga = injectSaga({ key: 'reviewCardSlider', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ReviewCardSlider);
