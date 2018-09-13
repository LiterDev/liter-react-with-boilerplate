/**
 *
 * ProfileAddress
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
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import DaumPostcode from 'react-daum-postcode';

import { CountryCode, getCountryCallingCode, getPhoneCode } from 'libphonenumber-js';

/* containers */
/* components */
import ProfileBotton from 'components/ProfileBotton';
import BlueButton from 'components/BlueButton';
import Dialog from '@material-ui/core/Dialog';
import InputAdornment from '@material-ui/core/InputAdornment';

/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import axios from 'axios';

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
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
    // marginTop: 12,
    position: 'relative',
    backgroundColor: '#ffffff',
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
  textHead: {    
    width: '100px',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: '#7c7c7c',
    paddingBottom: '10px',
  },
  checkIcon: {
    marginLeft: 10,
  },
  searchButton: {
    borderRadius: '4px',
    backgroundColor: '#637382',
    float: 'right',
    width: '36%',
    height: '40px',
    color: '#ffffff',
  },
  inputWrap: { 
    borderRadius: 3,
    backgroundColor: '#fafafa',
    border: 'solid 0.5px #eeeeee',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 8,
    width: '100%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  inputWrapHalf: {
    borderRadius: 3,
    backgroundColor: '#fafafa',
    border: 'solid 0.5px #eeeeee',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 8,
    width: '60%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  inputWrapError: {
    position: 'relative',
    width: '100%',
    height: 44,
    borderRadius: 3,
    backgroundColor: '#fafafa',
    // border: 'solid 0.5px #eeeeee',
    textAlign: 'left',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 4,
    paddingBottom: 4,
    verticalAlign: 'middle',
    lineHeight: '100%',
    marginBottom: 8,
    border: 'solid 0.5px #ff9393',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  inputWrapText: {
    height: 16,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#999999',
    // position: 'relative',
    // top: '50%',
    // transform: 'translateY(-50%)',
  },
  inputWrapWarn: {
    position: 'absolute',
    height: 12,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ff411f',
    right: 12,
    // position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  inputWrapInput: {
    height: 16,
  },
  divRow: {
    width: '100%',
    paddingBottom: '24px',
  },
  formRoot: {
    display: 'block',
  },
  formControl: {
    
  },
  submitBtnWrap: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    position: 'fixed',
    bottom: '10px',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  divCol: {
    paddingBottom: '5px',
  }
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/[0-9]/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

/* eslint-disable react/prefer-stateless-function */
class ProfileAddress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      receiver: '',
      mobile: '',
      postcode: '',
      addressBase: '',
      addressDetail: '',
      handlePostCodePopOpen: false,
      nationPhoneCode: '',
      errorReceiver: false,
      errorMobile: false,
      errorPostCode: false,
      errorAddressBase: false,
      errorAddressDetail: false,
    };
    
    this._state = this.state;

    this.handlePostCodePopOpen = this.handlePostCodePopOpen.bind(this);
    this.handlePostCode = this.handlePostCode.bind(this);
  }

  componentDidMount() {
    this.handleLoadData();
  }

  handlePostCodePopOpen = () => {
    this.setState({'handlePostCodePopOpen': true});
  };
  handlePostCodePopClose = () => {
    this.setState({'handlePostCodePopOpen': false});
  };
  handlePostCode = (result) => {
    this.handlePostCodePopClose();

    this.setState({
      postcode: result.zonecode,
      addressBase: result.address,
    });    
  };

  handleSelectNationCode = (event) => {
    // console.log(event.target.value);
  }

  handleFormCheck = () => {
    let bResult = true;
    // address detail
    if(!Boolean(this.state.addressDetail)) {
      this.setState({'errorAddressDetail': true });
      bResult = false;
    } else {
      this.setState({'errorAddressDetail': false });
    }

    // address base
    if(!Boolean(this.state.addressBase)) {
      this.setState({'errorAddressBase': true});
      bResult = false;
    } else {
      this.setState({'errorAddressBase': false });
    }

    // zip code
    if(!Boolean(this.state.postcode)) {
      this.setState({'errorPostCode': true});
      bResult = false;
    } else {
      this.setState({'errorPostCode': false });
    }

    // mobile phone
    if(!Boolean(this.state.mobile)) {
      this.setState({'errorMobile': true});
      bResult = false;
    } else {
      this.setState({'errorMobile': false });
    }

    // receiver
    if(!Boolean(this.state.receiver)) {
      this.setState({'errorReceiver': true});
      bResult = false;
    } else {
      this.setState({'errorReceiver': false });
    }

    return bResult;
  }

  handleSubmit = () => {
    // this.handleFormCheck();
    if(this.handleFormCheck()) {
      
      if(this._state == this.state) {
        this.props.handleAddressPopClose();
        return;
      }
      const requestURL = `${process.env.API_URL}/user/addr`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;

      let headerObj = {
        'Accept': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      }
      if(accessToken)
        headerObj.Authorization = token;

      axios({
          method: 'PUT',
          url: requestURL,
          headers: headerObj,
          data: {
            postNumber: this.state.postcode,
            addressFirst: this.state.addressBase,
            addressDetail: this.state.addressDetail,
            reciverName: this.state.receiver,
            reciverPhoneNumber: this.state.mobile
          },
        }).then(resp => {
          if(Boolean(resp.data)) {
            // console.log(']]]-------------put Address-------------[[[');
            // console.log(resp.data);
            this.props.handleAddressPopClose();
          }
        }).catch(error => {
            console.log(error.response);
        });
    }
  }

  handleLoadData = () => {
    this.setState({'nationPhoneCode': 82});

    const requestURL = `${process.env.API_URL}/user/addrInfo`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;

    let headerObj = {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    }
    if(accessToken)
      headerObj.Authorization = token;

    axios({
        method: 'GET',
        url: requestURL,
        headers: headerObj,
      }).then(resp => {
        if(Boolean(resp.data)) {
          // console.log(']]]-------------get Address-------------[[[');
          // console.log(resp.data);
          this.setState(
            {
              'receiver': resp.data.reciverName,
              'nationPhoneCode': 82,
              'mobile': resp.data.reciverPhoneNumber,
              'postcode': resp.data.postNumber,
              'addressBase': resp.data.addressFirst,
              'addressDetail': resp.data.addressDetail,
            }
          );
          this._state = this.state;
        }
      }).catch(error => {
          console.log(error.response);
      });
  };

  handleChange = event => {

    if(event.target.name && event.target.name == "receiver" && event.target.value.length > 100)
      return;

    if(event.target.name && event.target.name == "addressDetail" && event.target.value.length > 1000)
      return;

    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="relative">
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              배송지 주소 등록
            </Typography>
            <IconButton
              color="inherit"
              onClick={this.props.handleAddressPopClose}
              aria-label="Close"
              className={classes.close}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className={classes.procbarWrap}>          
          <div 
            classes={{ root: classes.formRoot }}
            className={classes.formControl}
            >
            <div className={classes.divRow}>
              <div className={classes.textHead}>수령인</div>
              <Input
                ref={ref => { this._receiver = ref; }}
                error={this.state.errorReceiver}
                className={classes.inputWrap}                
                // id="formatted-text-mask-input"
                name="receiver"
                onChange={this.handleChange}
                value={this.state.receiver}
                placeholder='수령인 이름을 입력하세요'
              />
            </div>

            <div className={classes.divRow}>
              <div className={classes.textHead}>연락처</div>
              <Input
                ref={ref => { this._mobile = ref; }}
                error={this.state.errorMobile}
                className={classes.inputWrap}
                name="mobile"
                onChange={this.handleChange}
                // id="formatted-text-mask-input"
                value={this.state.mobile}
                placeholder='수령인 전화번호'
                inputComponent={TextMaskCustom}
                startAdornment={
                <InputAdornment position="start">
                  <Select
                    value={this.state.nationPhoneCode}
                    onChange={this.handleChange}
                    name="nationPhoneCode"
                    className={classes.selectEmpty}
                    displayEmpty={true}
                  >
                    <MenuItem key={82} value={82}>(한국) +82</MenuItem>
                  </Select>
                </InputAdornment>}
              />              
            </div>

            <div className={classes.divRow}>
              <div className={classes.textHead}>배송지</div>
              <div className={classes.divCol}>
                <Input
                  className={classes.inputWrapHalf}
                  ref={ref => { this._postCode = ref; }}
                  error={this.state.errorPostCode}
                  // onChange={this.handleChange('textmask')}
                  // id="formatted-text-mask-input"
                  value={this.state.postcode}
                  onClick={this.handlePostCodePopOpen}
                  disabled={true}
                  placeholder='우편번호'                
                />              
                <Button
                  className={classes.searchButton}
                  // onChange={this.handleChange('textmask')}
                  // id="formatted-text-mask-input"
                  onClick={this.handlePostCodePopOpen}
                >
                주소검색
                </Button>
              </div>
              <div className={classes.divCol}>
                <Input
                  className={classes.inputWrap}
                  ref={ref => { this._addressBase = ref; }}
                  error={this.state.errorAddressBase}
                  // onChange={this.handleChange('textmask')}
                  // id="formatted-text-mask-input"
                  value={this.state.addressBase}
                  disabled={true}
                  placeholder='주소'
                />
              </div>
              <div className={classes.divCol}>
                <Input
                  ref={ref => { this._addressDetail = ref; }}
                  error={this.state.errorAddressDetail}
                  className={classes.inputWrap}
                  name="addressDetail"
                  onChange={this.handleChange}
                  // id="formatted-text-mask-input"
                  placeholder='상세 주소'
                  value={this.state.addressDetail}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.submitBtnWrap}>
          <BlueButton
            btnType="submit"
            // onClickFunc={this.onSubmitFormInit}
            onClickFunc={this.handleSubmit} 
            // complete={this.state.complete}
            btnName="등록"
          />
        </div>
        <Dialog
          fullScreen
          open={this.state.handlePostCodePopOpen}
          onClose={this.handlePostCodePopClose}
          scroll="paper"
        >
          <DaumPostcode
            onComplete={this.handlePostCode}
            height='100%'
              />
        </Dialog>
      </div>
    );
  }
}

ProfileAddress.propTypes = {};

// export default ProfileAddress;
export default withStyles(styles)(ProfileAddress);
