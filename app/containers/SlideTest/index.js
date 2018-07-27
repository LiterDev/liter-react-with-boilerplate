/**
 *
 * SlideTest
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Header from 'components/Header';
import Slider from 'react-slick';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import makeSelectSlideTest from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
const styles = {
  flex: {
    flex: 1,
  },
  slideItem: {
    width: 77,
    height: 86,
    borderRadius: 4,
    border: 'solid 0.5px #e3e3e3',
    marginLeft: 8,
  },
};

/* eslint-disable react/prefer-stateless-function */
export class SlideTest extends React.PureComponent {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    const { classes } = this.props;
    return (
      <div>
        <Header headerTitle="Slide" />
        {/* <FormattedMessage {...messages.header} /> */}

        <Slider {...settings}>
          <div>
            <div className={classes.slideItem}>
              <h3>1</h3>
            </div>
          </div>
          <div>
            <div className={classes.slideItem}>
              <h3>2</h3>
            </div>
          </div>
          <div>
            <div className={classes.slideItem}>
              <h3>3</h3>
            </div>
          </div>
          <div>
            <div className={classes.slideItem}>
              <h3>4</h3>
            </div>
          </div>
          <div>
            <div className={classes.slideItem}>
              <h3>5</h3>
            </div>
          </div>
          <div>
            <div className={classes.slideItem}>
              <h3>6</h3>
            </div>
          </div>
        </Slider>
        <div className={classes.root}>
          <Icon className={classes.icon}>add_circle</Icon>
          <Icon className={classes.icon} color="primary">
            add_circle
          </Icon>
          <Icon className={classes.icon} color="secondary">
            add_circle
          </Icon>
          <Icon className={classes.icon} color="action">
            add_circle
          </Icon>
          <Icon
            className={classes.iconHover}
            color="error"
            style={{ fontSize: 30 }}
          >
            add_circle
          </Icon>
          <Icon
            className={classes.icon}
            color="disabled"
            style={{ fontSize: 36 }}
          >
            add_circle
          </Icon>
        </div>
      </div>
    );
  }
}

SlideTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  slidetest: makeSelectSlideTest(),
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

const withReducer = injectReducer({ key: 'slideTest', reducer });
const withSaga = injectSaga({ key: 'slideTest', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(SlideTest);
