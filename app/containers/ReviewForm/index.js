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
import ImagePreviewButtonWithoutSlider from 'components/ImagePreviewButtonWithoutSlider';
import MoviePreviewButton from 'components/MoviePreviewButton';

import UploadSlider from 'components/UploadSlider';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
// import Button from '@material-ui/core/Button';

// import Upload from 'material-ui-upload/Upload';

import makeSelectReviewForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { postAction } from './actions';

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
    // margin: {
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 12,
    // },
    // width: '100%',
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
});

/* eslint-disable react/prefer-stateless-function */
export class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      files: new FormData(),
      // filesArray: [],
      imageCount: 0,
      imageComponent: [],
    };
    this.handleImageAppend = this.handleImageAppend.bind(this);
    this.handleImageRemove = this.handleImageRemove.bind(this);
    this.onSubmitFormInit = this.onSubmitFormInit.bind(this);
  }

  handleImageAppend = fileList => {
    if (fileList) {
      if (fileList.length > 0) {
        const imageComponentTmp = [];
        // const filesArrayTmp = [];
        for (let i = 0; i < fileList.length; i += 1) {
          this.state.files.append(
            `imgnames[${this.state.imageCount}]`,
            fileList[i],
          );

          imageComponentTmp.push({
            id: this.state.imageCount,
            name: `imgnames[${this.state.imageCount}]`,
            src: URL.createObjectURL(fileList[i]),
            alt: fileList[i].name,
            file: fileList[i],
          });

          this.state.imageCount += 1;
        }
        this.setState({
          imageComponent: this.state.imageComponent.concat(imageComponentTmp),
        });
      }
    }

    // this.state.imageCount += 1;

    console.log(this.state.imageComponent.length);
    console.log(Array.from(this.state.files.entries()).length);
  };
  handleImageRemove = name => {
    const findRemoveIndex = [];
    if (this.state.imageComponent.length > 0) {
      for (let i = 0; i < this.state.imageComponent.length; i += 1) {
        if (name === this.state.imageComponent[i].name) {
          findRemoveIndex.push(i);
        }
      }
    }
    const copy = [...this.state.imageComponent];
    // console.log(copy);
    if (findRemoveIndex.length > 0) {
      for (let i = 0; i < findRemoveIndex.length; i += 1) {
        // this.state.imageComponent.splice(findRemoveIndex[i], 1);
        copy.splice(findRemoveIndex[i], 1);
      }
    }
    this.setState({
      imageComponent: copy,
    });
    this.state.files.delete(name);
    console.log(Array.from(this.state.files.entries()).length);
  };
  onSubmitFormInit(event) {
    event.preventDefault();
    // if (event !== undefined && event.preventDefault) event.preventDefault();
    // console.log('submit');

    // console.log(event.target);
    // console.log(this.state.files);
    const data = new FormData(event.target);
    console.log(data);
    console.log(data.get('title'));
    // data.append('mutifile', this.state.files);
    // console.log(data.get('mutifile'));
    // console.log(data.get('mutifile'));

    if (this.state.imageComponent.length > 0) {
      for (let i = 0; i < this.state.imageComponent.length; i += 1) {
        data.append(`files[${i}]`, this.state.imageComponent[i].file);
      }
    }
    this.props.onSubmitForm(data);
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header headerTitle={<FormattedMessage {...messages.header} />} />
        <form onSubmit={this.onSubmitFormInit}>
          <div className={classes.container}>
            <Input
              placeholder="Placeholder"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              name="title"
            />
          </div>
          <div className={classes.container}>
            <Grid container spacing={16}>
              <Grid item xs={6} sm={6}>
                <ImagePreviewButtonWithoutSlider
                  handleImageAppend={this.handleImageAppend}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <MoviePreviewButton
                  handleImageAppend={this.handleImageAppend}
                />
              </Grid>
            </Grid>
            <Divider className={classes.divader} />
            <div className={classes.uploadSlider}>
              <UploadSlider
                imageComponent={this.state.imageComponent}
                handleImageRemove={this.handleImageRemove}
              />
            </div>
          </div>
          <div className={classes.container}>
            구매정보를 입력해주세요.
            <Divider className={classes.propsdivader} />
          </div>
          <Button
            variant="contained"
            component="button"
            className={classes.button}
            // onClick={this.onSubmitFormInit}
            type="submit"
          >
            작성 완료
          </Button>
          {/* <button>작성 완료</button> */}
        </form>
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
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  reviewform: makeSelectReviewForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   console.log('submit');
    //   console.log(this.state.files);
    //   const data = new FormData(evt.target);
    //   data.concat(this.state.files);
    //   dispatch(postAction(data));
    // },
    onSubmitForm: data => {
      dispatch(postAction(data));
    },
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
