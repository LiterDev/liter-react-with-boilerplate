/**
 *
 * ReviewForm
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
/* material-ui core */
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
// import SvgIcon from '@material-ui/core/SvgIcon';
// import Button from '@material-ui/core/Button';
// import Upload from 'material-ui-upload/Upload';
import { withStyles } from '@material-ui/core/styles';
/* material-ui icon */
/* containers */
/* components */
import Header from 'components/Header';
import ReviewWrite from 'components/ReviewWrite';
/* image */
/* ref */
import axios from 'axios';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { postAction, loadAction, loadInit } from './actions';
import {
  makeSelectReviewForm,
  makeSelectReviews,
  // makeSelectReviewId,
  makeSelectSurveys,
  makeSelectError,
} from './selectors';

const styles = theme => ({
  root: {
    backgroundColor: '#f9f9f9',
  },
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
  writeForm: {
    marginTop: 12,
    backgroundColor: '#f9f9f9',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openSuccesPop: false,
    };
    this.initHandler = this.initHandler.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }
  componentDidMount() {
    // const { loadReview } = this.props;
    // const reviewId = this.props.match.params.reviewId;
    // console.log(reviewId);
    // if (reviewId) {
    //   loadReview(reviewId);
    // }
  }

  validWallet = () => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      const requestURL = `${process.env.API_URL}/user/authInfo`;
      const token = `Bearer ${accessToken}`;
      axios({
        method: 'GET',
        url: requestURL,
        headers: {
          Accept: 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: token,
        },
      }).then(resp => {
        if (!resp.data.hasWallet) {
          this.setState({
            openSuccesPop: true,
          });
        }
      });
    }
  };

  initHandler() {
    this.props.loadInit();
  }
  componentWillMount() {
    // const { loadReview } = this.props;
    // const reviewId = this.props.match.params.reviewId;
    // console.log(reviewId);
    // if (reviewId) {
    //   loadReview(reviewId);
    // }
  }

  handleClose = () => {
    this.setState({
      openSuccesPop: false,
    });

    // this.props.history.push('/mypage');
  };
  handleMove = () => {
    this.setState({
      openSuccesPop: false,
    });

    this.props.history.push('/mypage');
  };
  render() {
    const { classes, reviewId, reviews, surveys } = this.props;
    const { reviewform } = this.props;
    const { loading } = reviewform;
    this.validWallet();
    // console.log(this.props.match.params.reviewId);
    // if (this.props.match.params.reviewId > 0) {
    //   this.initHandler();
    // }

    // console.log(reviews);
    // console.log(surveys);
    // dotenv.config();
    // console.log(process.env.API_URL);
    // console.log(process.env.NODE_ENV);
    return (
      <div className={classes.root}>
        <Header headerTitle={<FormattedMessage {...messages.header} />} />
        {loading ? (
          <div className={classes.dimmed}>
            <CircularProgress className={classes.progress} />
          </div>
        ) : (
          <div />
        )}
        <ReviewWrite
          onSubmitForm={this.props.onSubmitForm}
          className={classes.writeForm}
          reviews={reviews}
          surveys={surveys}
        />
        <Dialog
          open={this.state.openSuccesPop}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className={classes.popWrap}
          fullWidth
          // maxWidth="false"
          classes={{
            root: classes.popRoot,
            paper: classes.popPaper,
          }}
        >
          <DialogTitle id="alert-dialog-title">
            {/* {"Use Google's location service?"} */}
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              이메일 인증이 필요한 서비스 입니다.
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogActions
            // className={classes.popFooter}
            classes={{
              root: classes.popRoot,
              // paper: classes.popFooter,
            }}
          >
            <Button onClick={this.handleMove} color="secondary">
              확인
            </Button>
          </DialogActions>
        </Dialog>
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
  loadReview: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  reviewform: makeSelectReviewForm(),
  reviews: makeSelectReviews(),
  surveys: makeSelectSurveys(),
  error: makeSelectError(),
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
    loadReview: reviewId => {
      dispatch(loadAction(reviewId));
    },
    loadInit: () => {
      // console.log('loadInit');
      dispatch(loadInit());
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
