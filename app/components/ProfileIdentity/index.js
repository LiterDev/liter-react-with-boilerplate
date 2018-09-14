/**
 *
 * ProfileIdentity
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
import TagInput from './TagInput';

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
  textBig: {
    margin: 'auto',
    width: '279px',
    fontSize: 18,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: '#333333',
    textAlign: 'center',
  },
  textHead: {
    margin: 'auto',
    width: '279px',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: '#7c7c7c',
    textAlign: 'center',
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
    paddingBottom: '10px',
  },
  hidden: {
    display: 'hidden',
  }
});

/* eslint-disable react/prefer-stateless-function */
class ProfileIdentity extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tags: '',
      tagsList: [],
      errorTags: false,
      complete: false,
    };
    
    this._state = this.state;
    this.onSubmitFormInit = this.onSubmitFormInit.bind(this);
  }

  componentDidMount() {
    this.handleLoadData();
  }

  handleSelectNationCode = (event) => {
    // console.log(event.target.value);
  }

  onSubmitFormInit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    let tagsData = data.get('tags').toString();

    if(!tagsData.trim()) {
      tagsData = "";
    }

    const requestURL = `${process.env.API_URL}/user`;
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
          tags: tagsData
        },

      }).then(resp => {
        if(Boolean(resp.data)) {
          // console.log(']]]-------------put Address-------------[[[');
          // console.log(resp.data);
          this.props.handleIdentityPopClose();
        }
      }).catch(error => {
          console.log(error.response);
      });
  }

  handleBlur = (val) => {
    if(val.trim()) {
      this.setState({'complete': true});      
    } else {
      this.setState({'complete': false});
    }
  }

  handleLoadData = () => {
    const requestURL = `${process.env.API_URL}/user/detailInfo`;
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

          if(resp.data && resp.data.tags.trim()) {
            this.setState({
            'tags': resp.data.tags,
            'tagsList': resp.data.tags.split(','),
            'complete': true,
            });
          }

          this._state = this.state;
        }
      }).catch(error => {
          console.log(error.response);
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.tagsList);
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="relative">
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              프로필 정보 입력
            </Typography>
            <IconButton
              color="inherit"
              onClick={this.props.handleIdentityPopClose}
              aria-label="Close"
              className={classes.close}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <form onSubmit={this.onSubmitFormInit}>
        <div className={classes.procbarWrap}>          
          <div 
            classes={{ root: classes.formRoot }}
            className={classes.formControl}
            >
            <div className={classes.divRow}>
              <div className={classes.textBig}>
                유저 아이덴티티
              </div>              
            </div>

            <div className={classes.divRow}>
              <div className={classes.divCol}>
                <div className={classes.textHead}>
                  고객님만의 개성을 해시태그로 적어주세요.                
                </div>
                <div className={classes.textHead}>
                맞춤 적용된 경험들을 제공받고, 사람들과 나눌 수 있습니다.
                </div>
              </div>
              <div className={classes.divCol}>                
                <TagInput tags={this.state.tagsList} handleBlur={this.handleBlur}/>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.submitBtnWrap}>
          <BlueButton
            // onClickFunc={this.submitForm}
            btnType="submit"
            // onClickFunc={this.onSubmitFormInit}
            // onClickFunc={this.handleSubmit} 
            complete={this.state.complete}
            btnName="등록"
          />
        </div>
        </form>
      </div>
    );
  }
}

ProfileIdentity.propTypes = {};

// export default ProfileIdentity;
export default withStyles(styles)(ProfileIdentity);
