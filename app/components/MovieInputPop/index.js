/**
 *
 * MovieInputPop
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import BlueButton from 'components/BlueButton';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
    // backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  appBar: {
    backgroundColor: '#ffffff',
    // backgroundColor: 'rgba(0, 0, 0, 0.79)',
  },
  popBpdy: {
    position: 'relative',
    backgroundColor: '#ffffff',
    // backgroundColor: 'rgba(0, 0, 0, 0.0)',
    height: '100vh',
    textAlign: 'center',
    // flexGrow: 1,
    width: '100%',
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 16,
    paddingRight: 16,
  },
  paper: {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeBtn: {
    color: 'rgb(17, 17, 17)',
    position: 'absolute',
    right: 20,
    top: 19,
  },
  flex: {
    with: '100%',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: 'rgb(17, 17, 17)',
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 35,
  },
  toolbar: {
    textAlign: 'center',
    // position: 'relative',
    with: '100%',
  },
  btnWrap: {
    paddingLeft: 16,
    paddingRight: 16,
    // marginTop: 30,
    position: 'fixed',
    bottom: 30,
    width: '100%',
  },
  textField: {
    marginBottom: 20,
  },
  bootstrapRoot: {
    // paddingLeft: 16,
    // paddingRight: 16,
    // width: '100%',
    // padding: '10px 10px 10px 10px',
  },
  bootstrapInput: {
    // position: 'relactive',
    // width: '100%',
    // maxWidth: '100%',
    // minWidth: '100%',
    borderRadius: 4,
    backgroundColor: 'rgb(244, 244, 244)',
    // border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 10px 10px 10px',
    // paddingTop: 10,
    // paddingLeft: 10,
    // width: 'calc(100% - 24px)',
    // transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgb(244, 244, 244)',
    },
    boxSizing: 'border-box',
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  movieinfo: {
    width: '100%',
    // paddingLeft: 18,
    // paddingRight: 19,
  },
});
function Transition(props) {
  return <Slide direction="up" {...props} />;
}
/* eslint-disable react/prefer-stateless-function */
class MovieInputPop extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      selectedLnk: false,
    };

    this.handleClose = this.handleClose.bind(this);
    // this.handleListItemClick = this.handleListItemClick.bind(this);
    // this.cateSelect = this.cateSelect.bind(this);
  }
  handleClose = () => {
    this.props.onClose(false);
  };
  handleChange = event => {
    // console.log(event.target.value.length);
    const linkValue = event.target.value;
    if (linkValue.length > 0) {
      if (linkValue.startsWith('http://') || linkValue.startsWith('https://')) {
        if (
          linkValue.includes('youtube') ||
          linkValue.includes('vimeo') ||
          linkValue.includes('youtu.be')
        ) {
          this.setState({
            complete: true,
            selectedLnk: event.target.value,
          });
        }
      }
    }
  };
  movieComplete = () => {
    // console.log('===========');
    this.props.onClose(this.state.selectedLnk);
    // this.props.onClose(value);
  };
  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
    return (
      <Dialog
        fullScreen
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
        className={classes.root}
        TransitionComponent={Transition}
        // paper={classes.paper}
        classes={{
          paper: classes.paper,
        }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            onClick={this.handleClose}
            aria-label="Close"
            className={classes.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          <div className={classes.flex}>동영상 추가</div>
          {/* <Button color="inherit" onClick={this.handleClose}>
            save
          </Button> */}
        </Toolbar>
        {/* <Input
          placeholder="Placeholder"
          multiline
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
        /> */}

        <div className={classes.popBpdy}>
          <TextField
            // defaultValue="react-bootstrap"
            // label="Bootstrap"
            // id="bootstrap-input"
            placeholder="업로드 하려는 동영상의 URL을 넣어 주세요."
            className={classes.movieinfo}
            rowsMax="6"
            rows="6"
            multiline
            InputProps={{
              disableUnderline: true,

              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              },
              onChange: this.handleChange,
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
          <Divider className={classes.divider} />
          <div>
            {' '}
            {/* <button onClick={this.handlePaste}>붙여넣기</button> */}
          </div>
        </div>

        <div className={classes.btnWrap}>
          <BlueButton
            btnType="button"
            onClickFunc={this.movieComplete}
            complete={this.state.complete}
            btnName="확인"
            className={classes.selectBtn}
          />
        </div>
      </Dialog>
    );
  }
}

MovieInputPop.propTypes = {};

// export default MovieInputPop;
export default withStyles(styles)(MovieInputPop);
