/**
 *
 * ProfileBirth
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
/* material-ui core */
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import LinearProgress from '@material-ui/core/LinearProgress';
/* material-ui icon */
import CloseIcon from '@material-ui/icons/Close';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';


/* containers */
/* components */
import ProfileBotton from 'components/ProfileBotton';

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
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class ProfileBirth extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      man: false,
      woman: false,
    };

    this.handleClose = this.handleClose.bind(this);
  }
  handleClose = () => {};
  handleManToggle = () => {
    this.setState({
      man: !this.state.man,
      woman: false,
    });
  };
  handleWomanToggle = () => {
    this.setState({
      man: false,
      woman: !this.state.woman,
    });
  };
  render() {
    const { classes } = this.props;
    const { handleClose } = this.state;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="relative">
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              성별/생년월일
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
          <div className={classes.textTop}>성별</div>
          <div className={classes.textMid}>성별을 선택해주세요</div>
          <div className={classes.textMid}>
            고객님의 성별에 맞는 경험을 알려드립니다.
          </div>

          <div className={classes.buttons}>
            <div
              className={classNames(classes.buttonWrap, classes.buttonWrapLeft)}
            >
              <ProfileBotton
                handleToggle={this.handleManToggle}
                active={this.state.man}
                buttonText="남자"
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrap,
                classes.buttonWrapRight,
              )}
            >
              <ProfileBotton
                handleToggle={this.handleWomanToggle}
                active={this.state.woman}
                buttonText="여자"
              />
            </div>
            {/* <div styles={{ clear: 'both' }} /> */}
          </div>
        </div>
        <div className={classes.procbarWrap}>
          <div className={classes.textTop}>생년월일</div>
          <FormControl className={classes.formControl}>
            
            <Input
              value={textmask}
              onChange={this.handleChange('textmask')}
              id="formatted-text-mask-input"
              inputComponent={TextMaskCustom}
            />
          </FormControl>
        </div>
        {/* <div className={classes.procbarWrap}>
          <div className={classes.textWrap}>
            <div className={classes.procbarText}>
              프로필 정보를 완성해주세요
              <span className={classes.quicon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <g fill="none">
                    <circle
                      cx="7"
                      cy="7"
                      r="7"
                      fill="#B9CBDC"
                      // fill-rule="nonzero"
                    />
                    <path
                      fill="#FFF"
                      d="M5 5.448C5.044 4.34 5.8 3.5 7.217 3.5c1.289 0 2.158.767 2.158 1.812 0 .756-.38 1.289-1.025 1.674-.63.371-.81.63-.81 1.133v.298H6.527l-.005-.39c-.024-.69.274-1.129.943-1.529.59-.356.8-.64.8-1.143 0-.551-.434-.957-1.103-.957-.674 0-1.108.406-1.152 1.05H5zm2.041 5.23a.627.627 0 0 1-.64-.63c0-.357.284-.63.64-.63.366 0 .645.273.645.63 0 .356-.279.63-.645.63z"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <div className={classes.procbarPercent}>40%</div>
          </div>
          <div
            style={{
              clear: 'both',
            }}
          />
          <div>
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={40}
              classes={{
                root: classes.barRoot,
                bar: classes.bar,
              }}
            />
          </div>
        </div> */}
      </div>
    );
  }
}

ProfileBirth.propTypes = {};

// export default ProfileBirth;
export default withStyles(styles)(ProfileBirth);
