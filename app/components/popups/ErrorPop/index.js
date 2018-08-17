/**
 *
 * ErrorPop
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class ErrorPop extends React.PureComponent {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    console.log('open');
    this.setState({ open: true });
  };

  handleClose = () => {
    console.log('close');
    this.setState({ open: false });
    // this.props.signinError = false;
  };
  // props.signinError
  // componentDidMount() {
  //   // 외부 라이브러리 연동: D3, masonry, etc
  //   // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  //   // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
  //   if (this.props.openProp) {
  //     this.handleClickOpen();
  //   }
  // }

  // componentWillMount() {
  //   this.handleClickOpen();
  //   this.handleClose();
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.openProp !== nextProps.openProp) {
  //     this.handleClickOpen();
  //   }
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // return false 하면 업데이트를 안함
  //   console.log(nextProps);
  //   console.log(nextState);
  //   return this.props.openProp !== nextProps.openProp;
  //   // return true;
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //   console.log(this.props.openProp);
  //   if (this.props.openProp !== nextProps.openProp) {
  //     this.handleClickOpen();
  //   }
  //   // if (this.porps.openProp !== nextProps.openProp) {
  //   //   this.whenBarChanges();
  //   // }
  // }
  render() {
    const { openProp } = this.props;
    if (openProp) {
      this.handleClickOpen();
    }

    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <Dialog
          open={this.state.open}
          // onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'로그인에 실패하였습니다.'}
          </DialogTitle>
          {/* <DialogContent>
            <DialogContentText id="alert-dialog-description">
              로그인에 실패하였습니다
            </DialogContentText>
          </DialogContent> */}
          <DialogActions>
            {/* <Button onClick={this.handleClose} color="secondary">
              Disagree
            </Button> */}
            <Button onClick={this.handleClose} color="secondary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ErrorPop.propTypes = { openProp: PropTypes.bool.isRequired };

export default ErrorPop;
