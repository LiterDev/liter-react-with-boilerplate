/**
 *
 * ReviewForm
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
import Header from 'components/Header';
import ImagePreviewButton from 'components/ImagePreviewButton';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';

// import Upload from 'material-ui-upload/Upload';

import makeSelectReviewForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    margin: '0px 0px 12px',
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
});

/* eslint-disable react/prefer-stateless-function */
export class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      files: new FormData(),
    };
    this.handleImageAppend = this.handleImageAppend.bind(this);
    this.handleImageRemove = this.handleImageRemove.bind(this);
  }

  handleImageAppend = (name, file) => {
    this.state.files.append(name, file);
  };
  handleImageRemove = name => {
    // this.state.files.append(name);
    this.state.files.delete(name);
    console.log(Array.from(this.state.files.entries()).length);
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.container}>
          <Header headerTitle={<FormattedMessage {...messages.header} />} />
          {/* <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button> */}
          <Input
            // defaultValue="Hello world"
            placeholder="Placeholder"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </div>
        <div className={classes.container}>
          <ImagePreviewButton
            handleImageAppend={this.handleImageAppend}
            handleImageRemove={this.handleImageRemove}
          />
        </div>
      </div>
    );
  }
}

ReviewForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  imagePreviewUrl: PropTypes.string,
  accept: PropTypes.string,
  label: PropTypes.any,
  multi: PropTypes.bool,
  passBase64: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  reviewform: makeSelectReviewForm(),
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

const withReducer = injectReducer({ key: 'reviewForm', reducer });
const withSaga = injectSaga({ key: 'reviewForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ReviewForm);
