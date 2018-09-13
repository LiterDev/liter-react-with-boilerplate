/**
 *
 * ProfileMarried
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import axios from 'axios';
/* material-ui core */
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
/* material-ui icon */
import CloseIcon from '@material-ui/icons/Close';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

/* containers */
/* components */
import ProfileBotton from 'components/ProfileBotton';
import BlueButton from 'components/BlueButton';

/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  root: {
    backgroundColor: '#f9f9f9',
    height: '100vh',
    fontFamily: 'Apple SD Gothic Neo',
  },
  appBar: {
    // height: theme.spacing.unit * 8,
    height: 64,
    backgroundColor: '#fffff',
    boxShadow: '0 0.5px 0 0 rgba(17, 17, 17, 0.1)',
  },
  toolbar: {
    textAlign: 'center',
    minHeight: 64,
    // boxShadow: '0 0.5px 0 0 rgba(0, 0, 0, 0.1)',
  },
  title: {
    position: 'relative',
    width: '100%',
    fontSize: 16,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: 'rgb(17, 17, 17)',
    // marginBottom: 37
  },
  close: {
    position: 'absolute',
    right: 20,
    height: 24,
    width: 24,
    zIndex: 10,
    color: '#000000',
  },

  procbarWrap: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 22,
    paddingBottom: 35,
    marginTop: 12,
    position: 'relative',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  barRoot: {
    backgroundColor: '#c8cacf',
    height: 3,
    marginTop: 3,
  },
  bar: {
    backgroundColor: '#1591ff',
  },
  textWrap: {
    position: 'relative',
  },
  procbarText: {
    // position: 'absolute',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: 'normal',
    color: '#999999',
    width: '70%',
    float: 'left',
    textAlign: 'left',
  },
  procbarPercent: {
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: 'normal',
    color: '#1591ff',
    width: '30%',
    float: 'left',
    textAlign: 'right',
  },
  quicon: {
    marginLeft: 6,
  },
  textTop: {
    marginTop: 20,
    marginBottom: 17,
    fontSize: 18,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: 'rgb(51, 51, 51)',
  },
  textMid: {
    fontSize: 14,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
    color: 'rgb(153, 153, 153)',
  },
  buttons: {
    position: 'relative',
    marginTop: 35,
  },
  buttonsSec: {
    position: 'relative',
    marginTop: 13,
  },
  button: {
    width: '95%',
    // marginLeft: 13,
  },
  buttonWrap: {
    // height: '100%',
    width: '50%',
    // float: 'left',
  },
  buttonWrapLeft: {
    float: 'left',
    textAlign: 'left',
  },
  buttonWrapRight: {
    textAlign: 'right',
    display: 'inline-block',
  },
  checkIcon: {
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'rgb(170, 170, 170)',
  },
  formControl: {
    // width: '100%',
    width: '100vw',
    height: 40,
    borderRadius: 4,
    // border: 'solid 0.5px rgb(153, 153, 153)',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  formControlWrap: {
    marginTop: 35,
  },
  inputCss: {
    textAlign: 'center',

    color: 'rgb(153, 153, 153)',
  },
  buttonDiv: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 24,
  },
});

/* eslint-disable react/prefer-stateless-function */
class ProfileMarried extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      married: false,
      notMarried: false,
      child1: false,
      child2: false,
      child3: false,
      child4: false,
      complete: false,
      loading: false,
    };

    this.handleClose = this.handleClose.bind(this);
  }
  handleClose = () => {
    this.props.handleClose();
  };
  handleMarriedToggle = () => {
    const marriedValue = !this.state.married;
    this.setState({
      married: marriedValue,
      notMarried: false,
    });
    this.handleComplete(marriedValue);
  };
  handleNotMarriedToggle = () => {
    const marriedValue = !this.state.notMarried;
    this.setState({
      married: false,
      notMarried: marriedValue,
    });
    this.handleComplete(marriedValue);
  };

  handleChild1Toggle = () => {
    this.setState({
      child1: !this.state.child1,
    });
    this.handleCompleteWithChild();
  };
  handleChild2Toggle = () => {
    this.setState({
      child2: !this.state.child2,
    });
    this.handleCompleteWithChild();
  };
  handleChild3Toggle = () => {
    this.setState({
      child3: !this.state.child3,
    });
    this.handleCompleteWithChild();
  };
  handleChild4Toggle = () => {
    this.setState({
      child4: !this.state.child4,
    });
    this.handleCompleteWithChild();
  };
  handleCompleteWithChild = () => {
    // console.log('complate');
    if (this.state.married == true || this.state.notMarried == true) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  handleComplete = marriedValue => {
    let married = false;
    if (marriedValue == true) {
      married = true;
    }
    if (married == true) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  submitForm = () => {
    if (this.state.complete == false) {
      return false;
    }

    let married = -1;
    if (this.state.married == true) {
      married = 0;
    }
    if (this.state.notMarried == true) {
      married = 1;
    }
    const hasChilds = [];
    let hasChild = false;
    if (this.state.child1) {
      hasChilds.push(1);
    }
    if (this.state.child2) {
      hasChilds.push(2);
    }
    if (this.state.child3) {
      hasChilds.push(3);
    }
    if (this.state.child4) {
      hasChilds.push(4);
    }
    // console.log(hasChilds);
    // console.log(hasChilds.toString());
    if (hasChilds.length > 0) {
      hasChild = true;
    }
    const self = this;
    if (this.state.loading === false) {
      self.setState({ loading: true });
      const requestURL = `${process.env.API_URL}/user`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;
      if (accessToken) {
        axios({
          method: 'PUT',
          url: requestURL,
          headers: {
            Accept: 'application/json;charset=UTF-8',
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: token,
          },
          data: {
            married: married,
            hasChilds: hasChilds.toString(),
            hasChild: hasChild,
          },
        })
          .then(resp => {
            self.setState({ loading: false });
            this.props.handleClose();
            // }
          })
          .catch(error => {
            self.setState({ loading: false });
          });
      }
    }
  };
  componentDidMount = () => {
    const self = this;
    if (this.state.loading === false) {
      self.setState({ loading: true });
      const requestURL = `${process.env.API_URL}/user/detailInfo`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;
      if (accessToken) {
        axios({
          method: 'GET',
          url: requestURL,
          headers: {
            Accept: 'application/json;charset=UTF-8',
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: token,
          },
        })
          .then(resp => {
            console.log(resp.data);
            let married = -1;
            if (resp.data.married === 0) {
              self.setState({
                married: true,
                notMarried: false,
              });
            }
            if (resp.data.married === 1) {
              self.setState({
                married: false,
                notMarried: true,
              });
            }
            if (
              Boolean(resp.data.hasChilds) &&
              resp.data.hasChilds !== 'NONE'
            ) {
              const childsArry = resp.data.hasChilds.split(',');
              console.log(childsArry);
              if (childsArry.includes('1')) {
                self.setState({
                  child1: true,
                });
              }
              if (childsArry.includes('2')) {
                self.setState({
                  child2: true,
                });
              }
              if (childsArry.includes('3')) {
                self.setState({
                  child3: true,
                });
              }
              if (childsArry.includes('4')) {
                self.setState({
                  child4: true,
                });
              }
            }
            self.setState({
              loading: false,
            });
            // this.props.handleClose();
            // }
          })
          .catch(error => {
            self.setState({ loading: false });
          });
      }
    }
  };
  render() {
    const { classes, handleClose } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="relative">
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              결혼여부
            </Typography>
            <IconButton
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
              className={classes.close}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.procbarWrap}>
          <div className={classes.textTop}>결혼여부</div>
          <div className={classes.textMid}>결혼여부, 자녀의 나이에 따른</div>
          <div className={classes.textMid}>
            유용한 경험을 공유받으실 수 있습니다.
          </div>

          <div className={classes.buttons}>
            <div
              className={classNames(classes.buttonWrap, classes.buttonWrapLeft)}
            >
              <ProfileBotton
                handleToggle={this.handleMarriedToggle}
                active={this.state.married}
                buttonText="기혼"
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrap,
                classes.buttonWrapRight,
              )}
            >
              <ProfileBotton
                handleToggle={this.handleNotMarriedToggle}
                active={this.state.notMarried}
                buttonText="미혼"
              />
            </div>
          </div>
        </div>
        <div className={classes.procbarWrap}>
          <div className={classes.textTop}>자녀의 나이</div>
          <div className={classes.textMid}>
            여러명의 자녀가 있으시면 중복 선택이 가능합니다.
          </div>
          <div className={classes.buttons}>
            <div
              className={classNames(classes.buttonWrap, classes.buttonWrapLeft)}
            >
              <ProfileBotton
                handleToggle={this.handleChild1Toggle}
                active={this.state.child1}
                buttonText="0 ~ 1세"
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrap,
                classes.buttonWrapRight,
              )}
            >
              <ProfileBotton
                handleToggle={this.handleChild2Toggle}
                active={this.state.child2}
                buttonText="1 ~ 3 세"
              />
            </div>
          </div>
          <div className={classes.buttonsSec}>
            <div
              className={classNames(classes.buttonWrap, classes.buttonWrapLeft)}
            >
              <ProfileBotton
                handleToggle={this.handleChild3Toggle}
                active={this.state.child3}
                buttonText="4 ~ 7 세"
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrap,
                classes.buttonWrapRight,
              )}
            >
              <ProfileBotton
                handleToggle={this.handleChild4Toggle}
                active={this.state.child4}
                buttonText="8세 이상"
              />
            </div>
          </div>
        </div>
        <div className={classes.buttonDiv}>
          <BlueButton
            btnName={'완료'}
            onClickFunc={this.submitForm}
            complete={this.state.complete}
            btnType="button"
          />
        </div>
      </div>
    );
  }
}

ProfileMarried.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

// export default ProfileMarried;
export default withStyles(styles)(ProfileMarried);
