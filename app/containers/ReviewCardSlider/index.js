/**
 *
 * ReviewCardSlider
 *
 */
// default
import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// material-ui
// import { withStyles } from '@material-ui/core/styles';
// containers
// components
import ReviewCardSlide from 'components/ReviewCardSlide';
// image
// ref
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import makeSelectReviewCardSlider from './selectors';



import { loadList } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ReviewCardSlider extends React.PureComponent {
  componentDidMount() {
    const { loadReviewList, user } = this.props;
    loadReviewList(user.id);
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
    loadReviewList: userid => {
      dispatch(loadList(userid));
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
