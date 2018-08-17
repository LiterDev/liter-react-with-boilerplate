/**
 *
 * ReviewFormEdit
 *
 */
// default
// material-ui
// containers
// components
// image
// ref

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from 'components/Header';

import ReviewWrite from 'components/ReviewWrite';

import makeSelectReviewFormEdit from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = theme => ({
  containerWrap: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  container: {
    backgroundColor: '#ffffff',
    margin: '12px 0px 0px',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    margin: theme.spacing.unit,
    color: '#333333',
    '&:before': {
      borderBottomColor: '#e3e3e3',
    },
    '&:after': {
      borderBottomColor: '#1591ff',
    },
  },
  inputfile: { display: 'none' },
  cssFocused: {},
  cssUnderline: {
    '&:before': {
      borderBottomColor: '#e3e3e3',
    },
    '&:after': {
      borderBottomColor: '#e3e3e3',
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  previewimg: {
    flex: 1,
    width: '100%',
  },
  divader: {
    marginTop: 4,
    paddingLeft: 6,
    paddingRight: 6,
    // marginBottom: 4,
  },
  uploadSlider: {
    paddingTop: 10,
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  dimmed: {
    background: '#000',
    opacity: 0.5,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    textAlign: 'center',
  },
  progress: {
    position: 'absolute',
    left: 'calc(50% - 20px)',
    top: 'calc(50% - 20px)',
  },
  floatBtn: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class ReviewFormEdit extends React.PureComponent {
  render() {
    const { classes } = this.props;
    const { reviewform } = this.props;
    // const { loading } = reviewform;

    return (
      <div>
        <Header headerTitle={<FormattedMessage {...messages.header} />} />
        {/* {loading ? (
          <div className={classes.dimmed}>
            <CircularProgress className={classes.progress} />
          </div>
        ) : (
          <div />
        )} */}
        <ReviewWrite onSubmitForm={this.props.onSubmitForm} style={{}} />
      </div>
    );
  }
}

ReviewFormEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  reviewformedit: makeSelectReviewFormEdit(),
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

const withReducer = injectReducer({ key: 'reviewFormEdit', reducer });
const withSaga = injectSaga({ key: 'reviewFormEdit', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ReviewFormEdit);
