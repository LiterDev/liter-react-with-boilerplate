/**
 *
 * SelfieControl
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '45%',
    display: 'inline-block',
    float: 'left',
  },
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
    color: '#99999',
    width: '100%',
    height: 40,
    backgroundColor: '#f4f4f4',
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
    width: '100%',
    border: {
      radius: 4,
      solid: 0.5,
      color: '#e3e3e3',
    },
  },
  icon: {
    // margin: theme.spacing.unit * 2,
    position: 'absolute',
    right: '24px',
    color: '#1591ff',
  },
  buttonText: {
    width: '100%',
    height: 18,
    position: 'absolute',
    // left: '33px',
    right: '12px',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    // color: '#999999',
    color: '#1591ff',
  },
  bigAvatar: {
    width: 150,
    height: 150,
  },
});

/* eslint-disable react/prefer-stateless-function */
class SelfieControl extends React.PureComponent { 
  state = {
    imageFormData: new FormData(),
    imageData: null,
    open: false,
  }
  constructor(props) {
    super(props);
    this.selfie = React.createRef();
    this.handleInput = this.handleInput.bind(this);
    this.handleAppend = this.handleAppend.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.props.changeSelfie(this.handleInput);
  }
  
  handleInput = () => {
    this.upload.click();
    console.log("]] ----- handleInput end ----- [[");
  }

  handleAppend(event) {

    console.log("]] ----- event start ----- [[");
    console.log(event.target.files);

    if (event.target.files) {
      if (event.target.files.length > 0) {
        const selfie = event.target.files[0];
        this.state.imageFormData.append("media", selfie);
        this.setState({'imageData': selfie });

        // const canvas = this.refs.canvas;
        // const ctx = canvas.getContext("2d");
        // ctx.drawImage(selfie, 0, 0);
        
        this.setState({ open: true });
      }
      const eventStatus = event;
      eventStatus.target.value = null;
    }
  }

  handleSubmit = () => {
    console.log(this.state.imageFormData);

    const data = this.state.imageFormData;   
    
    const requestURL = `${process.env.API_URL}/user/profile`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    const options = {
          'Accept': 'application/json',
          // 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': token,
    };

    axios({
      'method': 'POST',
      'headers': options,
      'url': requestURL,
      'data': data,
    })
    .then(function (response) {
      console.log(self);
      self.setState({
        'open': false
      });
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  }

  render() {
    const { classes } = this.props;
    
    let selfieData = null;
    if(this.state.imageData) {
      selfieData = <Avatar className={classes.bigAvatar} width={150} height={150} src={ URL.createObjectURL(this.state.imageData) } />
    }

    return (
      <div>
        <input 
          ref={(ref) => this.upload = ref} 
          className={classes.inputfile} 
          type="file" 
          accept="image/*" 
          capture="camera" 
          id="camera"
          onChange={this.handleAppend}
          name="media"
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"프로필 선택"}</DialogTitle>
          <DialogContent>
            { selfieData }
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              취소
            </Button>
            <Button onClick={this.handleSubmit} color="secondary" autoFocus>
              사용
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SelfieControl.propTypes = {};

export default withStyles(styles)(SelfieControl);
